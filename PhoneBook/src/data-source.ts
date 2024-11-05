import "reflect-metadata"
import { DataSource } from "typeorm"
import { Person } from "./entity/User"
import ConnectDB from "./data-connection"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: ConnectDB.PORT,
    username: ConnectDB.DB_USERNAME,
    password: ConnectDB.DB_PASSWORD,
    database: ConnectDB.DB_DATABASE,
    synchronize: false,
    logging: false,
    entities: [Person],
    migrations: [],
    subscribers: [],
})
