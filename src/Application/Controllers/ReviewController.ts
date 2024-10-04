import { Request, Response, NextFunction } from 'express';
import IReviewServices from "../../Domain/Interfaces/IReviewServices";
import CreateReviewRequest from '../Requests/CreateReviewRequest';
import mongoose from 'mongoose';

class ReviewController {
    private reviewServices: IReviewServices;
    constructor(reviewServices: IReviewServices) {
        this.reviewServices = reviewServices;
    }
    async createReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { author, videogame, comment, puntuation }: CreateReviewRequest = req.body;
            const createReviewRequest = new CreateReviewRequest(new mongoose.Types.ObjectId(author), new mongoose.Types.ObjectId(videogame), comment, puntuation)
            const createdReview = await this.reviewServices.createReview(createReviewRequest);
            res.status(201).send(createdReview._id);
        }
        catch (error) {
            next(error);
        }
    }    
    async deleteReview(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const reviewId: string  = req.body.reviewId;
            await this.reviewServices.deleteReview(new mongoose.Types.ObjectId(reviewId));
            res.status(200).send('Reseña eliminada con exito')
        }
        catch (error) {
            next(error);
        }
    }
    async findReviewById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { reviewId } = req.params;
            const retrievedReview = await this.reviewServices.findReviewById(new mongoose.Types.ObjectId(reviewId));
            res.status(200).send(retrievedReview);
        }
        catch (error) {
            next(error);
        }
    }
    async findReviewByAuthor(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { author } = req.params;
            const retrievedReview = await this.reviewServices.findReviewByAuthor(new mongoose.Types.ObjectId(author));
            res.status(200).send(retrievedReview);
        }
        catch (error) {
            next(error);
        }
    }
    async findReviewByVideogameId(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { videogameId } = req.params;
            const retrievedReview = await this.reviewServices.findReviewByVideogameId(new mongoose.Types.ObjectId(videogameId));
            res.status(200).send(retrievedReview);
        }
        catch (error) {
            next(error);
        }
    }
}
export default ReviewController;