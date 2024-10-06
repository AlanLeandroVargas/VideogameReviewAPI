import mongoose from "mongoose";
import Review from "../Entities/Review";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";
import ReviewResponse from "../../Application/Responses/ReviewResponse";

interface IReviewServices{
    createReview(createReviewRequest: CreateReviewRequest): Promise<Review>;
    deleteReview(id: mongoose.Types.ObjectId): Promise<void>;
    findReviewById(id: mongoose.Types.ObjectId): Promise<Review>;
    findReviewByAuthor(id: mongoose.Types.ObjectId): Promise<Array<Review>>;
    findReviewByVideogameId(id: mongoose.Types.ObjectId): Promise<Array<Review>>
    findReviewByVideogameName(name: string): Promise<Array<ReviewResponse>>
}
export default IReviewServices;