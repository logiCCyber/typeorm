
export const typeDefs = `#graphql
    type Query {
        getPerson: [Personal]
    }
    
    type Personal {
         id: ID!,
         name: String!,
         phone: String!, 
         email: String!,
         address: String!,
    }
    
    type Mutation {
        addPerson(name: String!, phone: String!, email: String!, address: String!): Personal
    }
`