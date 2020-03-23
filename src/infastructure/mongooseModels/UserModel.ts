import mongoose, {Schema, Document} from 'mongoose';

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

export default mongoose.model<IMongooseUser>('MongooseUser', UserSchema)

