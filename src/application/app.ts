import express from 'express';
import { ErrorHandler } from '../infrastructure/middlewares/Error';
import episodeRoutes from '../infrastructure/routes/episode.routes';
import movieRoutes from '../infrastructure/routes/movie.routes';
import seasonRoutes from '../infrastructure/routes/season.routes';
import userRoutes from '../infrastructure/routes/user.routes';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/seasons', seasonRoutes);
app.use('/episodes', episodeRoutes);
app.use(ErrorHandler.execute)

export default app;