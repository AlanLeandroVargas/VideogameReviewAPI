import mongoose from "mongoose";

class LoginResponse{
    token: string;
    userId: mongoose.Types.ObjectId;
    role: string;
    constructor(token: string, userId: mongoose.Types.ObjectId, role: string){
        this.token = token;
        this.userId = userId;
        this.role = role;
    }
}
export default LoginResponse;