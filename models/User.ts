import mongoose, { Schema, model, Model } from 'mongoose';
import { IUser } from '../interfaces';

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    roles: [{
        type: String,
        required: true,
        enum: {
            values: ["admin", "user", "staff"],
            message: '{VALUE} is not valid'
        }
    }],
    state: { type: Boolean, required: true, default: false }
});


const User: Model<IUser> = mongoose.models.User || model('User', userSchema);
export default User;

