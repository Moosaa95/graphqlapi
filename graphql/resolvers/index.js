const usersResolver = require('./users'); // this is the resolver for the users

module.exports = { 
    Query: { 
        ...usersResolver.Query // this is the same as saying Query: usersResolver.Query
    },
    Mutation: {
        ...usersResolver.Mutation // this is the same as saying Mutation: usersResolver.Mutation
    }
}

