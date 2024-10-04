import mongoose from "mongoose";
import User from "../../Domain/Entities/User";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";

interface IUserRepository{
    createUser(createUserRequest: CreateUserRequest): Promise<User>;
    deleteUser(id: mongoose.Types.ObjectId): Promise<User>;
    findUserById(id: mongoose.Types.ObjectId): Promise<User>;
    findUserByUsername(username: string): Promise<User>;
}
export default IUserRepository;