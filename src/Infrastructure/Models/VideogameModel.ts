import mongoose, { model, Schema } from "mongoose";
import Videogame from "../../Domain/Entities/Videogame";
import IVideogameDocument from "../Interfaces/IVideogameDocument";
const videogameSchema: Schema<IVideogameDocument> = new mongoose.Schema({
    name: { type: String, required: true},
    genre: { type: [String], required: true},
    description: { type: String, required: true},
    imageUrl: { type: String },
    averagePuntuation: { type: Number, required: true},
    releaseDate: { type: Date, required: true }
})

const videogameModel = model<IVideogameDocument>("Videogame", videogameSchema);

export default videogameModel;