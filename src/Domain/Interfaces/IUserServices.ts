import mongoose from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import User from "../Entities/User";

interface IUserServices{
    createUser(createUserRequest: CreateUserRequest): Promise<User>;
    deleteUser(id: mongoose.Types.ObjectId): Promise<void>;
    findUserById(id: mongoose.Types.ObjectId): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
}
export default IUserServices;