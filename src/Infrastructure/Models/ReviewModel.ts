import mongoose, { model, Schema } from "mongoose";
import Review from "../../Domain/Entities/Review";
const reviewSchema: Schema<Review> = new mongoose.Schema({
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    videogame: { type: Schema.Types.ObjectId, ref: 'Videogame', required: true},
    comment: { type: String, required: true},
    puntuation: { type: Number, required: true},
    createdAt: { type: Date, default: Date.now },    
})

const reviewModel = model<Review>("Review", reviewSchema);

export default reviewModel;