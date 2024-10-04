import mongoose, { Document } from "mongoose";

interface IUserDocument extends Document{
    _id: mongoose.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: string;
    comparePassword(password: string): Promise<boolean>;
}
export default IUserDocument;