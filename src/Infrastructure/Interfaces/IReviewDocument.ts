import mongoose, { Document } from "mongoose";
import User from "../../Domain/Entities/User";
import Videogame from "../../Domain/Entities/Videogame";

interface IReviewDocument extends Document{
    _id: mongoose.Types.ObjectId;
    author: User['_id'];
    videogame: Videogame['_id'];
    comment: string;
    puntuation: number;
    createdAt: Date;
}
export default IReviewDocument;