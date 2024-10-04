import mongoose from "mongoose";
import User from "../../Domain/Entities/User";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import IUserDocument from "./IUserDocument";

interface IUserRepository{
    createUser(createUserRequest: CreateUserRequest): Promise<IUserDocument>;
    deleteUser(id: mongoose.Types.ObjectId): Promise<void>;
    findUserById(id: mongoose.Types.ObjectId): Promise<IUserDocument>;
    findUserByUsername(username: string): Promise<IUserDocument>;
}
export default IUserRepository;