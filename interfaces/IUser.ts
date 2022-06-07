export interface IUser {
    _id?: string;
    name: string;
    username: string;
    password: string;
    roles: string[];
    state: boolean;
}