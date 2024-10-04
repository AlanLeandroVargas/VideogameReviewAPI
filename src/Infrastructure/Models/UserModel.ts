import mongoose, { model, Schema } from "mongoose";
import IUserDocument from "../Interfaces/IUserDocument";
import bcrypt from 'bcryptjs';

const userSchema: Schema<IUserDocument> = new mongoose.Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: { type: String, required: true}
})

userSchema.pre<IUserDocument>('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
});
userSchema.methods.comparePassword = function (password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
};

const userModel = model<IUserDocument>("User", userSchema);

export default userModel;