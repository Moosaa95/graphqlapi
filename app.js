// imports from package files 
const { ApolloServer } = require('apollo-server'); // this helps us to create a server
// const gql = require('graphql-tag'); // this helps us to create a schema
const mongoose = require('mongoose'); // this helps us to connect to mongodb


//relative imports
// const { MONGODB } = require('./config'); // this is the database configuration
const typeDefs = require('./graphql/typeDefs'); // this is the schema
const resolvers = require('./graphql/resolvers'); // this is the resolvers
const connectDB = require('./config/db'); // this is the database configuration

connectDB(); // this is the database configuration



// server to connect typeDefs and resolvers
const server = new ApolloServer({
    typeDefs,
    resolvers,
    // mock: true,
});

server.listen({port:process.env.PORT || 4000})
.then(({url})=>{
    console.log(`Server ready at ${url}`);
}
);

// module.exports = server;