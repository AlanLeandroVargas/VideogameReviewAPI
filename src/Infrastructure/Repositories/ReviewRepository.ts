import { Types } from "mongoose";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";
import Review from "../../Domain/Entities/Review";
import IReviewRepository from "../Interfaces/IReviewRepository";
import reviewModel from "../Models/ReviewModel";
import NotFoundException from "../../Application/Exceptions/NotFoundException";

class ReviewRepository implements IReviewRepository {
    async createReview(createReviewRequest: CreateReviewRequest): Promise<Review> {
        const createdReview = new reviewModel(createReviewRequest);
        await createdReview.save();
        return createdReview;
    }
    async deleteReview(id: Types.ObjectId): Promise<void> {
        const deletedReview = await reviewModel.deleteOne({ _id: id });
        if (!deletedReview) throw new NotFoundException('Reseña no encontrada');
    }
    async findReviewById(id: Types.ObjectId): Promise<Review> {
        const retrievedReview = await reviewModel.findById(id);
        if (!retrievedReview) throw new NotFoundException('Reseña no encontrado');
        return retrievedReview;
    }
    async findReviewByAuthor(id: Types.ObjectId): Promise<Array<Review>> {
        const retrievedReview = await reviewModel.find({ author: id });
        if (!retrievedReview) throw new NotFoundException('Reseña no encontrado');
        return retrievedReview;
    }
    async findReviewByVideogameId(id: Types.ObjectId): Promise<Array<Review>> {
        const retrievedReview = await reviewModel.find({ videogame: id });
        if (!retrievedReview) throw new NotFoundException('Reseña no encontrado');
        return retrievedReview;
    }
}
export default ReviewRepository;