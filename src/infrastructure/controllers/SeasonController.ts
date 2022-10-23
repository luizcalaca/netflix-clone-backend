import { Request, Response } from 'express';
import { Season } from '../../domain/entities/Season';
import SeasonUseCase from '../../domain/usecase/SeasonService';

class SeasonController {

  constructor(private SeasonUseCase: SeasonUseCase) {}

  public create = async (req: Request, res: Response) => {
    const Season: Omit<Season, "_id"> = {
      movie_id: req.params.id,
      title: req.body.title,
    }

    const result = await this.SeasonUseCase.createSeason(Season)
    return res.status(201).json(result);
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.SeasonUseCase.read()
    return res.status(201).json(result);
  }
}
export default SeasonController;
