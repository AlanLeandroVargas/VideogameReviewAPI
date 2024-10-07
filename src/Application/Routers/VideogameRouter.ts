import { Router } from "express";
import VideoGameRepository from "../../Infrastructure/Repositories/VideogameRepository";
import VideogameServices from "../../Domain/Services/VideogameServices";
import VideogameController from "../Controllers/VideogameController";
import { authenticateJwt } from "../Middleware/Passport";
const videogameRouter = Router();
const videogameRepository = new VideoGameRepository();
const videogameServices = new VideogameServices(videogameRepository);
const videogameController = new VideogameController(videogameServices);

videogameRouter.post('/videogame', authenticateJwt, videogameController.createVideogame);
videogameRouter.delete('/videogame', authenticateJwt, videogameController.deleteVideogame);
videogameRouter.get('/videogame/id/:videogameId', videogameController.findVideogameById);
videogameRouter.get('/videogame/name/:videogameName', videogameController.findVideogameByName);
videogameRouter.get('/videogame/genre/:genre', videogameController.findVideogamesByGenre);
videogameRouter.get('/videogame/search', videogameController.searchVideogamesByName);
export default videogameRouter;