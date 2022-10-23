import { Request, Response } from 'express';
import { ISeason } from '../../domain/entities/interfaces/ISeason';
import SeasonUseCase from '../../domain/usecase/SeasonService';

class SeasonController {

  constructor(private SeasonUseCase: SeasonUseCase) {}

  public create = async (req: Request, res: Response) => {
    const Season: ISeason = {
      movie_id: req.body.movie_id,
      title: req.body.title,
    }

    const result = await this.SeasonUseCase.create(Season)
    return res.status(201).json(result);
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.SeasonUseCase.read()
    return res.status(201).json(result);
  }
}
export default SeasonController;
