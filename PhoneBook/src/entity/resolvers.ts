import { AppDataSource } from "../data-source";
import { Person } from "./User";

export const resolvers = {
    Query: {
       getPerson: async () => {
           return await AppDataSource.manager.find(Person);
       }
    },
    Mutation: {
        addPerson: async (_paren, args) => {
            const { name, phone, email, address } = args;
            const user =  AppDataSource.manager.create(Person, {
                name,
                phone,
                email,
                address
            });
            await AppDataSource.manager.save(user);
            return user;
        }
    }
}