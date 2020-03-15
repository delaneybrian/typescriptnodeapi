import { IUser } from '../definitions/IUser';

export interface IUserRepository{

    getUserById(userId: String): IUser

    getAllUsers(): Array<IUser>;

    addUser(user: IUser): void;
}