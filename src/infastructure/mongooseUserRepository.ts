import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../definitions/IUser';
import MongooseUser, { MapToUser, MapToUsers } from './mongooseModels/UserModel';

export class MongooseUserRepository implements IUserRepository {

  async getUserById(userId: String): Promise<IUser | null> {

    try {
      var mongooseUser = await MongooseUser.findOne({ id: userId });

      if (mongooseUser) {
        return MapToUser(mongooseUser);
      }
    }
    catch (error) {
      console.log(error);
      throw error;
    }

    return null;
  }

  async getAllUsers(): Promise<IUser[]> {

    try {
      var mongooseUsers = await MongooseUser.find();

      return MapToUsers(mongooseUsers);
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }

  async addUser(user: IUser): Promise<void> {

    try {
      await MongooseUser.create(
        {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          age: user.age
        })
    }
    catch (error) {
      console.log(error);
      throw error;
    }
  }
}