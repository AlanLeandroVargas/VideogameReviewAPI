import { Router } from "express";
import ReviewRepository from "../../Infrastructure/Repositories/ReviewRepository";
import ReviewServices from "../../Domain/Services/ReviewServices";
import ReviewController from "../Controllers/ReviewController";
import VideoGameRepository from "../../Infrastructure/Repositories/VideogameRepository";
import VideogameServices from "../../Domain/Services/VideogameServices";
const reviewRouter = Router();
const videogameRepository = new VideoGameRepository();
const videogameServices = new VideogameServices(videogameRepository);
const reviewRepository = new ReviewRepository();
const reviewServices = new ReviewServices(reviewRepository, videogameServices);
const reviewController = new ReviewController(reviewServices);
reviewRouter.post('/review', reviewController.createReview);
reviewRouter.delete('/review', reviewController.deleteReview);
reviewRouter.get('/review/id/:reviewId', reviewController.findReviewById);
reviewRouter.get('/review/author/:author', reviewController.findReviewByAuthor);
reviewRouter.get('/review/videogame/:videogameId', reviewController.findReviewByVideogameId);

export default reviewRouter;