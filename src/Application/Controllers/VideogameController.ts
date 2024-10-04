import { Request, Response, NextFunction } from 'express';

import IVideogameServices from "../../Domain/Interfaces/IVideogameServices";
import CreateVideogameRequest from '../Requests/CreateVideogameRequest';
import mongoose from 'mongoose';

class VideogameController{
    private videogameServices: IVideogameServices;
    constructor(videogameServices: IVideogameServices){
        this.videogameServices = videogameServices;
    }
    async createVideogame( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { name, genre, description, imageUrl, releaseDate}: CreateVideogameRequest = req.body;
            const createVideogameRequest = new CreateVideogameRequest(name, genre, description, releaseDate, imageUrl);
            const createdVideogame = await this.videogameServices.createVideogame(createVideogameRequest);
            res.status(201).send(createdVideogame._id);
        }
        catch(error){
            next(error);
        }       
        
    }
    async deleteVideogame( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const videogameId: string = req.body.videogameId;
            await this.videogameServices.deleteVideogame(new mongoose.Types.ObjectId(videogameId));
            res.status(200).send("Videojuego eliminado con exito");
        }
        catch(error){
            next(error);
        }       
    }
    async findVideogameById( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { videogameId } = req.params;
            const retrievedVideogame = await this.videogameServices.findVideogameById(new mongoose.Types.ObjectId(videogameId));
            res.status(200).send(retrievedVideogame);
        }
        catch(error){
            next(error);
        }       
    }
    async findVideogameByName( req: Request, res: Response, next: NextFunction ): Promise<void>{
        try{
            const { videogameName } = req.params;
            const retrievedVideogame = await this.videogameServices.findVideogameByName(videogameName);
            res.status(200).send(retrievedVideogame);
        }
        catch(error){
            next(error);
        }       
    }
}
export default VideogameController;
