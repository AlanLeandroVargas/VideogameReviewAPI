import mongoose from "mongoose";
import User from "../../Domain/Entities/User";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";

interface IUserRepository{
    createUser(createUserRequest: CreateUserRequest): Promise<User>;
    deleteUser(id: mongoose.Types.ObjectId): User;
    findUserById(id: mongoose.Types.ObjectId): User;
    findUserByUsername(username: string): User;
}
export default IUserRepository;