import { AppDataSource } from "./data-source"
// import { Person } from "./entity/User"
import { typeDefs } from "./entity/typeDefs"
import { resolvers } from "./entity/resolvers"
import { ApolloServer } from "@apollo/server"
import {startStandaloneServer} from "@apollo/server/standalone";

const server = new ApolloServer( { typeDefs, resolvers } )

AppDataSource.initialize().then(async () => {
    console.log("Loading users from the database...")
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    });

    console.log(`🚀 Server running at ${url}`)

}).catch(error => console.log(error))
