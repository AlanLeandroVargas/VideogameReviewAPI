import { Router } from "express";
import UserController from "../Controllers/UserController";
import UserServices from "../../Domain/Services/UserServices";
import UserRepository from "../../Infrastructure/Repositories/UserRepository";
const userRouter = Router();
const userRepository = new UserRepository();
const userServices = new UserServices(userRepository);
const userController = new UserController(userServices);
userRouter.post('/user', userController.createUser);
userRouter.delete('/user', userController.deleteUser);
userRouter.get('/user/:userId', userController.findUserById);
userRouter.get('/user/:username', userController.findUserByUsername);
userRouter.post('/user/login', userController.login);

export default userRouter;