import { Router } from "express";
import VideoGameRepository from "../../Infrastructure/Repositories/VideogameRepository";
import VideogameServices from "../../Domain/Services/VideogameServices";
import VideogameController from "../Controllers/VideogameController";
const videogameRouter = Router();
const videogameRepository = new VideoGameRepository();
const videogameServices = new VideogameServices(videogameRepository);
const videogameController = new VideogameController(videogameServices);

videogameRouter.post('/videogame', videogameController.createVideogame);
videogameRouter.delete('/videogame', videogameController.deleteVideogame);
videogameRouter.get('/videogame/id/:videogameId', videogameController.findVideogameById);
videogameRouter.get('/videogame/name/:videogameName', videogameController.findVideogameByName);

export default videogameRouter;