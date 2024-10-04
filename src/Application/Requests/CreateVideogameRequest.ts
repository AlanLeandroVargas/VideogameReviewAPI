class CreateVideogameRequest{
    name: string;
    genre: Array<string>;
    description: string;
    imageUrl?: string;
    releaseDate: Date;
    constructor(name: string, genre: Array<string>, description: string, releaseDate: Date, imageUrl?: string) {
        this.name = name;
        this.genre = genre;
        this.description = description;
        this.releaseDate = releaseDate;
        this.imageUrl = imageUrl;
    }
}
export default CreateVideogameRequest;