import { Router } from 'express';
import { controller } from '../factories/SeasonFactory';

const seasonRoutes = Router()
seasonRoutes.post('/', controller.create);
seasonRoutes.get('/', controller.list);

export default seasonRoutes;