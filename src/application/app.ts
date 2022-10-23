import express from 'express';
import { ErrorHandler } from '../infrastructure/middlewares/Error';
import episodeRoutes from '../infrastructure/routes/episode.routes';
import movieRoutes from '../infrastructure/routes/movie.routes';
import seasonRoutes from '../infrastructure/routes/season.routes';
import userRoutes from '../infrastructure/routes/user.routes';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use('/users', userRoutes);
app.use('/movies', movieRoutes);
app.use('/seasons', seasonRoutes);
app.use('/episodes', episodeRoutes);
app.use(ErrorHandler.execute)

export default app;