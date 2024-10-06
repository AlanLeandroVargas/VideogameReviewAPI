import { Types } from "mongoose";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";
import Videogame from "../Entities/Videogame";
import IVideogameServices from "../Interfaces/IVideogameServices";
import IVideogameRepository from "../../Infrastructure/Interfaces/IVideogameRepository";
import Review from "../Entities/Review";

class VideogameServices implements IVideogameServices{    
    private videogameRepository: IVideogameRepository;
    constructor(videogameRepository: IVideogameRepository){
        this.videogameRepository = videogameRepository;
    }
    async createVideogame(createVideogameRequest: CreateVideogameRequest): Promise<Videogame> {
        const createdVideogame = await this.videogameRepository.createVideogame(createVideogameRequest);
        return createdVideogame;
    }
    async deleteVideogame(id: Types.ObjectId): Promise<void> {
        await this.videogameRepository.deleteVideogame(id);
    }
    async findVideogameById(id: Types.ObjectId): Promise<Videogame> {
        const retrievedVideogame = await this.videogameRepository.findVideogameById(id);
        return retrievedVideogame;
    }
    async findVideogameByName(name: string): Promise<Videogame> {
        const retrievedVideogame = await this.videogameRepository.findVideogameByName(name);
        return retrievedVideogame;
    }
    async findVideogamesByGenre(genre: string): Promise<Array<Videogame>>{
        const retrievedVideogames = await this.videogameRepository.findVideogamesByGenre(genre);
        return retrievedVideogames;
    }

    async updateAverage(videogameId: Types.ObjectId, reviews: Array<Review>): Promise<void>{
        const currentAmount = reviews.length;
        const totalScore = reviews.reduce((total, currentReview) => total + currentReview.puntuation, 0)
        const average = Math.floor((totalScore / currentAmount) * 10) / 10;
        this.videogameRepository.updateAverage(videogameId, average, currentAmount);
    }
}
export default VideogameServices;