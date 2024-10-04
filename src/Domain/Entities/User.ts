import mongoose from "mongoose";
class User
{
    _id?: mongoose.Types.ObjectId;
    username: string;
    email: string;
    password: string;
    role: string;
    constructor(username: string, email: string, password: string, role: string){
        this.username = username;
        this.email = email;
        this.password = password;
        this.role = role;
    }
}
export default User