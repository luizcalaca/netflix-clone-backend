import { Episode } from "../entities/Episode";
import { EpisodeRepository } from "../repository/EpisodeRepository";

class EpisodeUseCase {

  constructor(private repository: EpisodeRepository) {}

  public create = async (entity: Omit<Episode, "_id">): Promise<Episode> => {
    return await this.repository.create(entity)
  }

  public read = async (): Promise<Episode> => {
    return await this.repository.read()
  }
}

export default EpisodeUseCase;



