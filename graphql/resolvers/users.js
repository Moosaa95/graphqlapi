const User = require('../../models/User');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../../config');

function generateToken(user){
    // generate the token and return the token

    return jwt.sign({
        id : user.id, 
        email : user.email,
        username : user.username
    },SECRET_KEY, { expiresIn: '1h' });
}


module.exports = {
  
    Mutation: {
        async register(_, {registerInput: {name, email, password, confirmPassword}}) {
            /* to 
            check if the user is already registered or not
            throw an error if the user is already registered
            params:
            name: String,
            email: String,
            password: String,
            confirmPassword: String


            */
            const user = await User.findOne({email}); // find the user by email
            if(user) {
                throw new ApolloError('User already exists');
            }
            if(password !== confirmPassword) {
                throw new Error('Passwords do not match');
            }
            //encrypt password
            const passwordHash = await bcrypt.hash(password, 12);
            const newUser = new User({
                name,
                email: email.toLowerCase(),
                password: passwordHash
            });
            const createdUser = await newUser.save(); // save the user to the database
            const token = generateToken(createdUser); // generate the token
            return { // return the user and token
                ...createdUser._doc,
                id: createdUser._id,
                token



        }
    },
     //list of all verified users
     listUsers: async () => {
        try {
            const users = await User.find({verified: true});
            return users;
        } catch (err) {
            throw new Error(err);
        }
    },

    async login(_, { email, password }) {
        const { errors, valid } = validateLoginInput(email, password);
        const user = await User.findOne({ email });
        if(!valid){
            throw new ApolloError('Errors', { errors });
        }
        if (!user){
            errors.general = 'User not found';
            throw new ApolloError('user not found', { errors });
        }

        const match = await bcrypt.compare(password, user.password);
        if(!match){
            errors.general = 'Wrong Credentials';
            throw new ApolloError('wrong Credentials', { errors });
        }
        const token = generateToken(user);
        return {
            ...user._doc,
            id: user._id,
            token
        }
    
    }
    }
}

