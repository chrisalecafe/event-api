import { IUser } from "../interfaces";
interface IData {
    users: IUser[],
}
export const seedData: IData = {
    users: [
        {
            username: "user",
            name: "user",
            password: "$2b$10$Sm00t4wSheqd3HpL8C7l2elfYw9t7U6ypR8gg6WOexbsSbWja1WVa",
            roles: ["user"],
            state: true,
        },
        {
            username: "staff",
            name: "staff",
            password: "$2b$10$Sm00t4wSheqd3HpL8C7l2elfYw9t7U6ypR8gg6WOexbsSbWja1WVa",
            roles: ["staff"],
            state: true,
        },
        {
            username: "admin",
            name: "admin",
            password: "$2b$10$Sm00t4wSheqd3HpL8C7l2elfYw9t7U6ypR8gg6WOexbsSbWja1WVa",
            roles: ["admin"],
            state: true,
        },
    ]
}
