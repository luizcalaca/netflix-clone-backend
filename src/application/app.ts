import express from 'express';
import { ErrorHandler } from '../infrastructure/middlewares/Error';
import routes from '../infrastructure/routes/Routes';

const app = express();
app.use(express.json());
app.use('/book', routes);
app.use(ErrorHandler.execute)

export default app;