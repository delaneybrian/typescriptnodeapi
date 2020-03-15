import mongoose, {Schema} from 'mongoose';

const UserSchema: Schema = new Schema({
    id: { type: String, required: true, unique: true},
    firstName: { type: String, requred: true},
    lastName: { type: String, required: true},
    age: { type: Number }
});

export default mongoose.model('User', UserSchema)

