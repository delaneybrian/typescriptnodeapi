import { IUser } from '../../definitions/IUser';
import { IMongooseUser } from '../mongooseModels/UserModel';

export class Mapper {

    MapTo(mongooseUser: IMongooseUser): IUser {
        return {
            'id': mongooseUser.id,
            'lastName': mongooseUser.lastName,
            'firstName': mongooseUser.firstName,
            'age': mongooseUser.age
        };
    }
}
