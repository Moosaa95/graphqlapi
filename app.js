// imports from package files 
const { ApolloServer } = require('apollo-server'); // this helps us to create a server
// const gql = require('graphql-tag'); // this helps us to create a schema
const mongoose = require('mongoose'); // this helps us to connect to mongodb


//relative imports
const { MONGODB } = require('./config'); // this is the database configuration
const typeDefs = require('./graphql/typeDefs'); // this is the schema
const resolvers = require('./graphql/resolvers'); // this is the resolvers
const dotenv = require('dotenv'); // this helps us to read the .env file

dotenv.config(); // this helps us to read the .env file

// port number or environment variable
port = process.env.PORT || 4000;
//connect to mongodb
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true }) 
    // promise to listen to the port
    .then(() => {
        console.log('Connected to mongodb')
        return server.listen(port)
    })
    .then((res) => {
        console.log(`Server is running on port ${res.port}`)
    })



// server to connect typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // mock: true,
});


// server.listen().then(({ url }) => {
//     console.log(`Server ready at ${url}`);
// }   
// );


module.exports = server;