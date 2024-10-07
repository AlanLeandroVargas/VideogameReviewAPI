import { Types } from "mongoose";
import CreateUserRequest from "../../Application/Requests/CreateUserRequest";
import User from "../Entities/User";
import IUserServices from "../Interfaces/IUserServices";
import IUserRepository from "../../Infrastructure/Interfaces/IUserRepository";
import LoginRequest from "../../Application/Requests/LoginRequest";
import ValidationException from "../../Application/Exceptions/ValidationException";
import jwt from 'jsonwebtoken';
import LoginResponse from "../../Application/Responses/LoginResponse";

const JWT_SECRET = 'videogame_review_web_site';


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
    async login(loginRequest: LoginRequest): Promise<LoginResponse>{
        const retrievedUser = await this.userRepository.findUserByUsername(loginRequest.username);
        const isMatch = await retrievedUser.comparePassword(loginRequest.password);
        if(!isMatch){throw new ValidationException("Credenciales invalidas")};
        const payload = { id: retrievedUser.id, role: retrievedUser.role};
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h'});
        const loginResponse = new LoginResponse(token, retrievedUser.id);
        return loginResponse;
    }
}
export default UserServices;