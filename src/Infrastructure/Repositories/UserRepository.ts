import { Types } from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import User from "../../Domain/Entities/User";
import IUserRepository from "../Interfaces/IUserRepository";
import userModel from "../Models/UserModel";
import NotFoundException from "../../Application/Exceptions/NotFoundException";

class UserRepository implements IUserRepository{
    async createUser(createUserRequest: CreateUserRequest): Promise<User> {
        const createdUser = new userModel(createUserRequest);
        await createdUser.save();
        return createdUser;
    }
    async deleteUser(id: Types.ObjectId): Promise<void> {
        const deletedUser = await userModel.deleteOne({_id: id});
        if(!deletedUser) throw new NotFoundException('Usuario no encontrado');
    }
    async findUserById(id: Types.ObjectId): Promise<User> {
        const retrievedUser = await userModel.findById(id);
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser;
    }
    async findUserByUsername(username: string): Promise<User> {
        const retrievedUser = await userModel.findOne({username: username});
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser;
    }
}
export default UserRepository;