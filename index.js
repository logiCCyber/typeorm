
import {graphqlHTTP} from "express-graphql";
import express from "express";
import {buildSchema} from "graphql";

const app = express();

const items = [
    { id: 1, name: 'Laptop', price: 999.99 },
    { id: 2, name: 'Smartphone', price: 599.99 },
    { id: 3, name: 'Tablet', price: 399.99 }
];

const schema = buildSchema(
    `
    type Query {
        getItems: [items]
    }
    
    type Items {
        id: Int
        name: String
        price: Float
    }
    `
);

const root = {
    getItems: () => items,
}

app.listen(3000, () => {
    console.log(`Server running on port 3000`);
});