import mongoose from "mongoose";
import Videogame from "../../Domain/Entities/Videogame";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";

interface IVideogameRepository{
    createVideogame(createVideogameRequest: CreateVideogameRequest): Promise<Videogame>;
    deleteVideogame(id: mongoose.Types.ObjectId): Promise<void>;
    findVideogameById(id: mongoose.Types.ObjectId): Promise<Videogame>;
    findVideogameByName(name: string): Promise<Videogame>;
}
export default IVideogameRepository;