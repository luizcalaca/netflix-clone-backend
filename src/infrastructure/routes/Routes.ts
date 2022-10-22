import { Router } from 'express';
import { controller } from '../factories/UserFactory';

const routes = Router()
routes.post('/', controller.create);
routes.get('/', controller.list);

export default routes;