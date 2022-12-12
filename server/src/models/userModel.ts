import {model, Schema, Document} from 'mongoose';

export interface IUser extends Document {
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  email: { type: String, unquie: true },
  password: { type: String }
});

export default model<IUser>("User", UserSchema);