import { Request, Response } from 'express';
import { Episode } from '../../domain/entities/Episode';
import { IEpisode } from '../../domain/entities/interfaces/IEpisode';
import EpisodeUseCase from '../../domain/usecase/EpisodeService';

class EpisodeController {

  constructor(private EpisodeUseCase: EpisodeUseCase) {}

  public create = async (req: Request, res: Response) => {
    const episode: Omit<Episode, "_id"> = {
        season_id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        number: req.body.number,
        cover: req.body.cover,
    }

    const result = await this.EpisodeUseCase.createEpisode(episode)
    return res.status(201).json(result);
  }

  public list = async (req: Request, res: Response) => {
    const result = await this.EpisodeUseCase.read()
    return res.status(201).json(result);
  }
}
export default EpisodeController;
