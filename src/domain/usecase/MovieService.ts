import { Movie } from "../entities/Movie";
import { MovieRepository } from "../repository/MovieRepository";

class MovieUseCase {

  constructor(private repository: MovieRepository) {}

  public create = async (entity: Omit<Movie, "_id">): Promise<Movie> => {
    return await this.repository.create(entity)
  }

  public read = async (): Promise<Movie> => {
    return await this.repository.read()
  }
}

export default MovieUseCase;



