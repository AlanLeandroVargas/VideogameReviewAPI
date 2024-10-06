import mongoose from "mongoose";

class Videogame {
    _id?: mongoose.Types.ObjectId;
    name: string;
    genre: Array<string>;
    description: string;
    imageUrl?: string;
    averagePuntuation: Number;
    releaseDate: Date;
    amountOfReviews: Number;
    constructor(name: string, genre: Array<string>, description: string, averagePuntuation: Number, releaseDate: Date, amountOfReviews: Number, imageUrl?: string) {
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