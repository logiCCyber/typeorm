

import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import crypto from "crypto";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());


const persons = [
    { id: '475573e3ca5c103e9b59912acd22d0bc', name: 'Alice', email: 'alice@example.com' },
    { id: 'e10a1a7afdd42a788fa7ccd0b7852413', name: 'Bob', email: 'bob@example.com' },
    { id: 'bd7d167a48c9ba0a8a0d7278e4a739a9', name: 'Charlie', email: 'charlie@example.com' },
    { id: 'c7d3623f910b36c5a62ed6b3f6205e9d', name: 'David', email: 'david@example.com' },
    { id: 'd55c9df4f5608926959c51804d116db2', name: 'Eve', email: 'eve@example.com' }
];

const typeDefs = gql`
     type Query {
         getPerson: [Person] 
     }
     type Person {
         id: String!
         name: String!
         email: String!
     }
     type Mutation {
         addPerson(id: String, name: String, email: String): Person,
         deletePerson(id: String!): Person,
         updatePerson(id: String, name: String, email: String): Person
     }
`;

const resolvers = {
    Query: {
        getPerson: () => persons,
    },
    Mutation: {
        addPerson: (_, {name, email}) => {
            const newPerson = {
                id: crypto.randomBytes(16).toString("hex"),
                name: name,
                email: email,
            }
            persons.push(newPerson);
            return newPerson;
        },
        deletePerson: (_, {id}) => {
            const indexPerson = persons.findIndex(person => person.id === id);
            if (indexPerson === -1) {
                throw new Error(`Person with id ${id} not found`);
            } else {
                const delPerson = persons.splice(indexPerson, 1)[0];
                return delPerson;
            }
        },
        updatePerson: (_, {id, name, email}) => {
            const indexPerson = persons.findIndex(person => person.id === id);
            if (indexPerson === -1) {
                throw new Error(`Person with id ${id} not found`);
            } else {
                persons[indexPerson] = {
                    id: persons[indexPerson].id,
                    name: name,
                    email: email,
                }
            }
            return persons[indexPerson];
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.start().then(() => {
    server.applyMiddleware({app, path: "/persons"});
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
