import mongoose from "mongoose";

class CreateReviewRequest{
    author: mongoose.Types.ObjectId;
    videogame: mongoose.Types.ObjectId;
    comment: string;
    puntuation: Number;
    constructor(author: mongoose.Types.ObjectId, videogame: mongoose.Types.ObjectId, comment: string, puntuation: Number){
        this.author = author;
        this.videogame = videogame;
        this.comment = comment;
        this.puntuation = puntuation;
    }
}
export default CreateReviewRequest;