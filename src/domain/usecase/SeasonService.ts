import { Season } from "../entities/Season";
import { SeasonRepository } from "../repository/SeasonRepository";

class SeasonUseCase {

  constructor(private repository: SeasonRepository) {}

  public create = async (entity: Omit<Season, "_id">): Promise<Season> => {
    return await this.repository.create(entity)
  }

  public read = async (): Promise<Season> => {
    return await this.repository.read()
  }
}

export default SeasonUseCase;



