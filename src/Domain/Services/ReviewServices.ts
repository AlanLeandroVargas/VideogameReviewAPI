import { Types } from "mongoose";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";
import Review from "../Entities/Review";
import IReviewServices from "../Interfaces/IReviewServices";
import IReviewRepository from "../../Infrastructure/Interfaces/IReviewRepository";

class ReviewServices implements IReviewServices{
    private reviewRepository: IReviewRepository;
    constructor(reviewRepository: IReviewRepository){
        this.reviewRepository = reviewRepository;
    }
    async createReview(createReviewRequest: CreateReviewRequest): Promise<Review> {
        const createdReview = await this.reviewRepository.createReview(createReviewRequest);
        return createdReview;
    }
    async deleteReview(id: Types.ObjectId): Promise<void> {
        await this.reviewRepository.deleteReview(id);
    }
    async findReviewById(id: Types.ObjectId): Promise<Review> {
        const retrievedReview = await this.reviewRepository.findReviewById(id);
        return retrievedReview;
    }
    async findReviewByAuthor(id: Types.ObjectId): Promise<Array<Review>> {
        const retrievedReviews = await this.reviewRepository.findReviewByAuthor(id);
        return retrievedReviews;
    }
    async findReviewByVideogameId(id: Types.ObjectId): Promise<Array<Review>> {
        const retrievedReviews = await this.reviewRepository.findReviewByVideogameId(id);
        return retrievedReviews;
    }
}
export default ReviewServices;