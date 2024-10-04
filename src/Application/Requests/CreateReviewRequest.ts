import mongoose from "mongoose";

class CreateReviewRequest{
    author: mongoose.Types.ObjectId;
    videogame: mongoose.Types.ObjectId;
    comment: string;
    puntuation: Number;
    createdAt: Date;
    constructor(author: mongoose.Types.ObjectId, videogame: mongoose.Types.ObjectId, comment: string, puntuation: Number, createdAt: Date){
        this.author = author;
        this.videogame = videogame;
        this.comment = comment;
        this.puntuation = puntuation;
        this.createdAt = createdAt;
    }
}
export default CreateReviewRequest;