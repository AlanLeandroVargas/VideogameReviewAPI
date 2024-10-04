import mongoose, { model, Schema } from "mongoose";
import IReviewDocument from "../Interfaces/IReviewRepository";
const reviewSchema: Schema<IReviewDocument> = new mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    videogame: { type: Schema.Types.ObjectId, ref: 'Videogame', required: true},
    comment: { type: String, required: true},
    puntuation: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now },    
})

const reviewModel = model<IReviewDocument>("Review", reviewSchema);

export default reviewModel;