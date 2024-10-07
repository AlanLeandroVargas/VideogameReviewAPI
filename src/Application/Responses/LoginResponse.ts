import mongoose from "mongoose";

class LoginResponse{
    token: string;
    userId: mongoose.Types.ObjectId;
    constructor(token: string, userId: mongoose.Types.ObjectId){
        this.token = token;
        this.userId = userId;
    }
}
export default LoginResponse;