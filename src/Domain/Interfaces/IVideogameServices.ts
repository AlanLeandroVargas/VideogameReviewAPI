import mongoose from "mongoose";
import CreateVideogameRequest from "../../Application/Requests/CreateVideogameRequest";
import Videogame from "../Entities/Videogame";
import Review from "../Entities/Review";

interface IVideogameServices{
    createVideogame(createVideogameRequest: CreateVideogameRequest): Promise<Videogame>;
    deleteVideogame(id: mongoose.Types.ObjectId): Promise<void>;
    findVideogameById(id: mongoose.Types.ObjectId): Promise<Videogame>;
    findVideogameByName(name: string): Promise<Videogame>;
    findVideogamesByGenre(genre: string): Promise<Array<Videogame>>;
    updateAverage(videogameId: mongoose.Types.ObjectId, reviews: Array<Review>): Promise<void>;
    searchVideogamesByName(search: string): Promise<Array<Videogame>>
}
export default IVideogameServices