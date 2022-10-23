import { Router } from 'express';
import { controller } from '../factories/EpisodeFactory';

const episodeRoutes = Router()
episodeRoutes.post('/:id', controller.create);
episodeRoutes.get('/', controller.list);

export default episodeRoutes;