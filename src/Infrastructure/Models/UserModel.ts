import mongoose, { model, Schema } from "mongoose";
import User from "../../Domain/Entities/User";

const userSchema: Schema<User> = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: { type: String, required: true}
})

const userModel = model<User>("User", userSchema);

export default userModel;