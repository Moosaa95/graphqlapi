// create user model
const { model, Schema } = require('mongoose'); // this is the mongoose model and schema

const userSchema = new Schema({
    /* fields --->
    username: String,
    password: String,
    email: String,
    country : String,
    number : String,
    */
    name:{
        // name is a required field
        type: String,
        required: true
    },
    email: {
        // email is a required field and unique
        type: String,
        required: true,
        unique: true
    
    },
    password: {
        type: String,
        required: true
    },

    country: {
        type: String,
        // required: true
    },
    mobilenumber: {
        type: Number,
        // required: true
    },
   token: {
         type: String
   },
    date : {
        type:Date,
        default:Date.now()

    }
    

});

module.exports = model('User', userSchema);