import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../definitions/IUser';
import MongooseUser, { MapToUser, MapToUsers } from './mongooseModels/UserModel';
import { ILogger } from '../interfaces/ILogger';
import { inject, injectable } from 'inversify';

@injectable()
export class MongooseUserRepository implements IUserRepository {

  constructor(        
    @inject('logger') private _logger: ILogger){}

  async getUserById(userId: String): Promise<IUser | null> {

    try {
      var mongooseUser = await MongooseUser.findOne({ id: userId });

      if (mongooseUser) {
        return MapToUser(mongooseUser);
      }
    }
    catch (error) {
      this._logger.Exception(error);
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
      this._logger.Exception(error);
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
      this._logger.Exception(error);
      throw error;
    }
  }
}