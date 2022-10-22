import { Router } from 'express';
import { controller } from '../factories/MovieFactory';

const movieRoutes = Router()
movieRoutes.post('/', controller.create);
movieRoutes.get('/', controller.list);

export default movieRoutes;