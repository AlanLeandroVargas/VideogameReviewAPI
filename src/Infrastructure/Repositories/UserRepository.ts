import { Types } from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import IUserRepository from "../Interfaces/IUserRepository";
import userModel from "../Models/UserModel";
import NotFoundException from "../../Application/Exceptions/NotFoundException";
import IUserDocument from "../Interfaces/IUserDocument";

class UserRepository implements IUserRepository{
    async createUser(createUserRequest: CreateUserRequest): Promise<IUserDocument> {
        const createdUser = new userModel(createUserRequest);
        await createdUser.save();
        return createdUser;
    }
    async deleteUser(id: Types.ObjectId): Promise<void> {
        const deletedUser = await userModel.deleteOne({_id: id});
        if(!deletedUser) throw new NotFoundException('Usuario no encontrado');
    }
    async findUserById(id: Types.ObjectId): Promise<IUserDocument> {
        const retrievedUser = await userModel.findById(id);
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser;
    }
    async findUserByUsername(username: string): Promise<IUserDocument> {
        const retrievedUser = await userModel.findOne({username: username});
        if(!retrievedUser) throw new NotFoundException('Usuario no encontrado');
        return retrievedUser;
    }
}
export default UserRepository;