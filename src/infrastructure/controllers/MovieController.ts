import { Request, Response } from 'express';
import { IMovie } from '../../domain/entities/interfaces/IMovie';
import MovieUseCase from '../../domain/usecase/MovieService';

class MovieController {

  constructor(private MovieUseCase: MovieUseCase) {}

  public create = async (req: Request, res: Response) => {
    const Movie: IMovie = {
        type: req.body.type,
        title: req.body.title,
        cover: req.body.cover,
        logo: req.body.logo,
        thumb: req.body.thumb,
        description: req.body.description,
        artists: req.body.artists,
        gender: req.body.gender,
        cenes_moments: req.body.cenes_moments,
    }

    const result = await this.MovieUseCase.create(Movie)
    return res.status(201).json(result);
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.MovieUseCase.read()
    return res.status(201).json(result);
  }
}
export default MovieController;
