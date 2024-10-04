import { Types } from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import User from "../Entities/User";
import IUserServices from "../Interfaces/IUserServices";
import IUserRepository from "../../Infrastructure/Interfaces/IUserRepository";

class UserServices implements IUserServices{
    private userRepository: IUserRepository;
    constructor(userRepository: IUserRepository){
        this.userRepository = userRepository;
    }
    async createUser(createUserRequest: CreateUserRequest): Promise<User> {
        const createdUser = await this.userRepository.createUser(createUserRequest);
        return createdUser;
    }
    async deleteUser(id: Types.ObjectId): Promise<void> {
        await this.userRepository.deleteUser(id);
    }
    async findUserById(id: Types.ObjectId): Promise<User> {
        const retrievedUser = await this.userRepository.findUserById(id);
        return retrievedUser;
    }
    async findUserByUsername(username: string): Promise<User> {
        const retrievedUser = await this.userRepository.findUserByUsername(username);
        return retrievedUser;
    }
}
export default UserServices;