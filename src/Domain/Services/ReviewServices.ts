import { Types } from "mongoose";
import CreateReviewRequest from "../../Application/Requests/CreateReviewRequest";
import Review from "../Entities/Review";
import IReviewServices from "../Interfaces/IReviewServices";
import IReviewRepository from "../../Infrastructure/Interfaces/IReviewRepository";
import IVideogameServices from "../Interfaces/IVideogameServices";
import ConflictException from "../../Application/Exceptions/ConflictException";
import ReviewResponse from "../../Application/Responses/ReviewResponse";
import IUserServices from "../Interfaces/IUserServices";

class ReviewServices implements IReviewServices{
    private reviewRepository: IReviewRepository;
    private videogameServices: IVideogameServices;
    private userServices: IUserServices;
    constructor(reviewRepository: IReviewRepository, videogameServices: IVideogameServices, userServices: IUserServices){
        this.reviewRepository = reviewRepository;
        this.videogameServices = videogameServices;
        this.userServices = userServices;
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
    async findReviewByVideogameName(name: string): Promise<Array<ReviewResponse>>{
        const retrievedVideogame = await this.videogameServices.findVideogameByName(name);
        if(!retrievedVideogame._id) throw new ConflictException('El videojuego no tiene id');
        const retrievedReviews = await this.findReviewByVideogameId(retrievedVideogame._id);
        const reviewResponses = await Promise.all(retrievedReviews.map(async (review) => {
            if(!review.author) throw new ConflictException('La reseña no tiene autor');
            const author = await this.userServices.findUserById(review.author);
            return new ReviewResponse(author.username, review.createdAt, review.comment);
        }))
        return reviewResponses;
    }
}
export default ReviewServices;