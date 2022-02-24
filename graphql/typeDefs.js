const { gql } = require('apollo-server') // helps create a server and also helps us to create a schema


// create mutation typeDefs
module.exports  = gql`
  type User {
    id: ID!
    name : String!
    email: String!
    country: String!
    mobilenumber: String
    token: String!
    date: String!

  }
    type Query {
        getUsers: [User]
    }
    input RegisterInput {
        name: String!
        email: String!
        password: String!
        confirmPassword: String!
        country: String!
        mobilenumber: String!
    }
    input LoginInput {
        email: String!
        password: String!
    }

    type Mutation {
        register(registerInput: RegisterInput): User!
        login(loginInput: LoginInput): User!
        listUsers: [User]
    }

`; 
