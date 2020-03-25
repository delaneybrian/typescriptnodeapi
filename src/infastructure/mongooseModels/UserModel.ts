import mongoose, {Schema, Document} from 'mongoose';
import { IUser } from '../../definitions/IUser';

export interface IMongooseUser extends Document {
    id: string,
    firstName: string,
    lastName: string,
    age: number
}

const UserSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true},
    firstName: { type: String, requred: true},
    lastName: { type: String, required: true},
    age: { type: Number }
});

export function MapToUsers(mongooseUsers: IMongooseUser[]) : IUser[]{
    
    let users = new Array<IUser>();
    
    mongooseUsers.forEach(mongooseUser => {
        users.push(MapToUser(mongooseUser));
    });

    return users;
}

export function MapToUser(mongooseUser: IMongooseUser): IUser {
    return {
        'id': mongooseUser.id,
        'lastName': mongooseUser.lastName,
        'firstName': mongooseUser.firstName,
        'age': mongooseUser.age
    };
}

export default mongoose.model<IMongooseUser>('MongooseUser', UserSchema)

