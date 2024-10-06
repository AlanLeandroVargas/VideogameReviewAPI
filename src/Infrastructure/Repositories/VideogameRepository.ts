import { Types } from "mongoose";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";
import Videogame from "../../Domain/Entities/Videogame";
import IVideogameRepository from "../Interfaces/IVideogameRepository";
import videogameModel from "../Models/VideogameModel";
import NotFoundException from "../../Application/Exceptions/NotFoundException";

class VideoGameRepository implements IVideogameRepository {
    async createVideogame(createVideogameRequest: CreateVideogameRequest): Promise<Videogame> {
        const createdVideogame = new videogameModel(createVideogameRequest);
        await createdVideogame.save();
        return createdVideogame;
    }
    async deleteVideogame(id: Types.ObjectId): Promise<void> {
        const deletedVideogame = await videogameModel.deleteOne({ _id: id });
        if (!deletedVideogame) throw new NotFoundException('Videojuego no encontrado');
    }
    async findVideogameById(id: Types.ObjectId): Promise<Videogame> {
        const retrievedVideogame = await videogameModel.findById(id);
        if (!retrievedVideogame) throw new NotFoundException('Videojuego no encontrado');
        return retrievedVideogame;
    }
    async findVideogameByName(name: string): Promise<Videogame> {
        const retrievedVideogame = await videogameModel.findOne({ name: name });
        if (!retrievedVideogame) throw new NotFoundException('Videojuego no encontrado');
        return retrievedVideogame;
    }
    async updateAverage(videogameId: Types.ObjectId , average: number): Promise<void>{
        await videogameModel.findOneAndUpdate({_id: videogameId}, {averagePuntuation: average});
    }

}
export default VideoGameRepository;