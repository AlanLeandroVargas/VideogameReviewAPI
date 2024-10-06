import mongoose from "mongoose";

class Videogame {
    _id?: mongoose.Types.ObjectId;
    name: string;
    genre: Array<string>;
    description: string;
    imageUrl?: string;
    averagePuntuation: number;
    releaseDate: Date;
    amountOfReviews: number;
    constructor(name: string, genre: Array<string>, description: string, averagePuntuation: number, releaseDate: Date, amountOfReviews: number, imageUrl?: string) {
        this.name = name;
        this.genre = genre;
        this.description = description;
        this.averagePuntuation = averagePuntuation;
        this.releaseDate = releaseDate;
        this.amountOfReviews = amountOfReviews;
        this.imageUrl = imageUrl;
    }
}
export default Videogame;