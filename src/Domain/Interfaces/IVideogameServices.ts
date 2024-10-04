import mongoose from "mongoose";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";
import Videogame from "../Entities/Videogame";

interface IVideogameServices{
    createVideogame(createVideogameRequest: CreateVideogameRequest): Promise<Videogame>;
    deleteVideogame(id: mongoose.Types.ObjectId): Promise<void>;
    findVideogameById(id: mongoose.Types.ObjectId): Promise<Videogame>;
    findVideogameByName(name: string): Promise<Videogame>;
}
export default IVideogameServices