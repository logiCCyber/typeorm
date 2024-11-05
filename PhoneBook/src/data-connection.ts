import * as dotenv from 'dotenv';

dotenv.config();

type Connect = {
    DB_DATABASE: string,
    DB_PORT: number,
    DB_USERNAME: string,
    DB_PASSWORD: string,
    PORT: number
}

const ConnectDb: Connect = {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PORT: Number(process.env.DB_PORT),
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: Number(process.env.PORT)
}

export default ConnectDb;
