import mongoose from "mongoose";
import User from "./User";
import Videogame from "./Videogame";

class Review {
    _id?: mongoose.Types.ObjectId;
    author: User['_id'];
    videogame: Videogame['_id'];
    comment: string;
    puntuation: number;
    createdAt: Date;
    constructor(author: mongoose.Types.ObjectId, videogame: mongoose.Types.ObjectId, comment: string, puntuation: number, createdAt: Date){
        this.author = author;
        this.videogame = videogame;
        this.comment = comment;
        this.puntuation = puntuation;
        this.createdAt = createdAt;
    }
}
export default Review;