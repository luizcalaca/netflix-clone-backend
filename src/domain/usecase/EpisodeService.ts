import { Episode } from "../entities/Episode";
import { Season } from "../entities/Season";
import { EpisodeRepository } from "../repository/EpisodeRepository";

class EpisodeUseCase {

  constructor(private repository: EpisodeRepository) {}

  public create = async (entityEpisode: Omit<Episode, "_id">, 
  entitySeason: Omit<Season, "_id">): Promise<Season> => {
    return await this.repository.create(entityEpisode, entitySeason)
  }

  public createEpisode = async (entity: Omit<Episode, "_id">): Promise<Episode> => {
    return await this.repository.createEpisode(entity)
  }

  public read = async (): Promise<Episode> => {
    return await this.repository.read()
  }
}

export default EpisodeUseCase;



