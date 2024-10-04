import mongoose, { Document } from "mongoose";

interface IVideogameDocument extends Document{
    _id: mongoose.Types.ObjectId;
    name: string;
    genre: Array<string>;
    description: string;
    imageUrl?: string;
    averagePuntuation: Number;
    releaseDate: Date;
}
export default IVideogameDocument;