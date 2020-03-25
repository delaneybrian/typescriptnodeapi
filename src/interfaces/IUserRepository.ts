import { IUser } from '../definitions/IUser';

export interface IUserRepository{

    getUserById(userId: String): Promise<IUser | null>

    getAllUsers(): Promise<Array<IUser>>;

    addUser(user: IUser): Promise<void>;
}