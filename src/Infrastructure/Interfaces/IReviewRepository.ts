import mongoose from "mongoose";
import Review from "../../Domain/Entities/Review";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";

interface IReviewRepository{
    createReview(createReviewRequest: CreateReviewRequest): Promise<Review>;
    deleteReview(id: mongoose.Types.ObjectId): Promise<void>;
    findReviewById(id: mongoose.Types.ObjectId): Promise<Review>;
    findReviewByAuthor(id: mongoose.Types.ObjectId): Promise<Review>;
    findReviewByVideogameId(id: mongoose.Types.ObjectId): Promise<Review>
}
export default IReviewRepository;