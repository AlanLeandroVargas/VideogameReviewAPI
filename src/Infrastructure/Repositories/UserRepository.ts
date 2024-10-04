import { Types } from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import User from "../../Domain/Entities/User";
import IUserRepository from "../Interfaces/IUserRepository";
import userModel from "../Models/UserModel";

class UserRepository implements IUserRepository{
    async createUser(createUserRequest: CreateUserRequest): Promise<User> {
        const createdUser = new userModel(createUserRequest);
        await createdUser.save();
        return createdUser;
    }
    deleteUser(id: Types.ObjectId): User {
        throw new Error("Method not implemented.");
    }
    findUserById(id: Types.ObjectId): User {
        throw new Error("Method not implemented.");
    }
    findUserByUsername(username: string): User {
        throw new Error("Method not implemented.");
    }

}