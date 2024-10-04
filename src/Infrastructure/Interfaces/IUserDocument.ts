import { Document } from "mongoose";

interface IUserDocument extends Document{
    username: string;
    email: string;
    password: string;
    role: string;
    comparePassword(password: string): Promise<boolean>;
}
export default IUserDocument;