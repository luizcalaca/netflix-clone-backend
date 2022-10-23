import { Router } from 'express';
import { controller } from '../factories/MovieFactory';

const episodeRoutes = Router()
episodeRoutes.post('/', controller.create);
episodeRoutes.get('/', controller.list);

export default episodeRoutes;