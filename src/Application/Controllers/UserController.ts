import { Request, Response, NextFunction } from 'express';
import IUserServices from '../../Domain/Interfaces/IUserServices';
import CreateUserRequest from '../Requests/CreateUserRequest';
import LoginRequest from '../Requests/LoginRequest';
import mongoose from 'mongoose';

class UserController{
    private userServices: IUserServices;
    constructor(userServices: IUserServices){
        this.userServices = userServices;
        this.createUser = this.createUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.findUserById = this.findUserById.bind(this);
        this.findUserByUsername = this.findUserByUsername.bind(this);
        this.login = this.login.bind(this);
    }
    async createUser( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { username, email, password, role}: CreateUserRequest = req.body;
            const createUserRequest = new CreateUserRequest(username, email, password, role);
            const createdUser = await this.userServices.createUser(createUserRequest);
            res.status(201).send(createdUser._id);
        }
        catch(error){
            next(error);
        }       
    }
    async deleteUser( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const userId : string = req.body.userId;
            await this.userServices.deleteUser(new mongoose.Types.ObjectId(userId));
            res.status(200).send('Usuario eliminado con exito');
        }
        catch(error){
            next(error);
        }
    }
    async findUserById( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { userId } = req.params;
            const retrievedUser = await this.userServices.findUserById(new mongoose.Types.ObjectId(userId));
            res.status(200).send(retrievedUser);
        }
        catch(error){
            next(error);
        }
    }
    async findUserByUsername( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { username } = req.params;
            const retrievedUser = await this.userServices.findUserByUsername(username);
            res.status(200).send(retrievedUser);
        }
        catch(error){
            next(error);
        }
    }
    async login( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { username, password }: LoginRequest = req.body;
            const loginRequest = new LoginRequest(username, password);
            const loginResponse = await this.userServices.login(loginRequest);
            res.status(200).send(loginResponse);
        }
        catch(error){
            next(error);
        }
    }
}
export default UserController;

