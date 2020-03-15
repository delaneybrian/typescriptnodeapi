import { IUserRepository } from '../interfaces/IUserRepository';
import * from './mongooseModels/UserModel';

class MongooseUserRepository implements IUserRepository{
    
    getUserById(userId: String): import("../definitions/IUser").IUser {
        throw new Error("Method not implemented.");
    }
    getAllUsers(): import("../definitions/IUser").IUser[] {
        throw new Error("Method not implemented.");
    }
    addUser(user: import("../definitions/IUser").IUser): void {
        throw new Error("Method not implemented.");
    }

    
}