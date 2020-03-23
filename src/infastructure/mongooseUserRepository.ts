import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../definitions/IUser';
import MongooseUser, { IMongooseUser }  from './mongooseModels/UserModel';

class MongooseUserRepository implements IUserRepository{
    
    getUserById(userId: String): IUser {
        
        MongooseUser.g(userId);
        
    }

    getAllUsers(): IUser[] {
        throw new Error("Method not implemented.");
    }

    addUser(user: IUser): void {
        
        return await Pet.create({
            owner,
            name
          })
            .then((data: IPet) => {
              return data;
            })
            .catch((error: Error) => {
              throw error;
            });

    }  
}