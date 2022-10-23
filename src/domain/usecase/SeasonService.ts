import { Movie } from "../entities/Movie";
import { Season } from "../entities/Season";
import { SeasonRepository } from "../repository/SeasonRepository";

class SeasonUseCase {

  constructor(private repository: SeasonRepository) {}

  public create = async (entitySeason: Omit<Season, "_id">,
    entityMovie:Omit<Movie, "_id">): Promise<Season> => {
      return await this.repository.create(entitySeason, entityMovie)
  }

  public createSeason = async (entitySeason: Omit<Season, "_id">) => {
    return await this.repository.createSeason(entitySeason)
}

  public read = async (): Promise<Season> => {
    return await this.repository.read()
  }
}

export default SeasonUseCase;



