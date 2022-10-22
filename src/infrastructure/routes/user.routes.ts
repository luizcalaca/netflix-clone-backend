import { Router } from 'express';
import { controller } from '../factories/UserFactory';

const userRoutes = Router()
userRoutes.post('/', controller.create);
userRoutes.get('/', controller.list);

export default userRoutes;