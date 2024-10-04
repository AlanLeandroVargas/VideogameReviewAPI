import { Types } from "mongoose";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";
import Videogame from "../Entities/Videogame";
import IVideogameServices from "../Interfaces/IVideogameServices";
import IVideogameRepository from "../../Infrastructure/Interfaces/IVideogameRepository";

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
}
export default VideogameServices;