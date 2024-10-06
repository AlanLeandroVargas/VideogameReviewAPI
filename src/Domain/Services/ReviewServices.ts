import { Types } from "mongoose";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";
import Review from "../Entities/Review";
import IReviewServices from "../Interfaces/IReviewServices";
import IReviewRepository from "../../Infrastructure/Interfaces/IReviewRepository";
import IVideogameServices from "../Interfaces/IVideogameServices";
import ConflictException from "../../Application/Exceptions/ConflictException";

class ReviewServices implements IReviewServices{
    private reviewRepository: IReviewRepository;
    private videogameServices: IVideogameServices;
    constructor(reviewRepository: IReviewRepository, videogameServices: IVideogameServices){
        this.reviewRepository = reviewRepository;
        this.videogameServices = videogameServices;
    }
    async createReview(createReviewRequest: CreateReviewRequest): Promise<Review> {
        const createdReview = await this.reviewRepository.createReview(createReviewRequest);
        if(!createdReview.videogame) throw new ConflictException('La reseña no tiene id de videojuego');
        const reviews = await this.findReviewByVideogameId(createdReview.videogame);
        await this.videogameServices.updateAverage(createdReview.videogame, reviews);
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