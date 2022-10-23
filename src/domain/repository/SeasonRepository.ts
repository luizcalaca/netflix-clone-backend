import { Movie } from "../entities/Movie"
import { Season } from "../entities/Season"
import { IPersistence } from "./IPersistence"

class SeasonRepository {
    constructor(private iPersistenceSeason: IPersistence,
        private iPersistenceMovie: IPersistence = null as unknown as IPersistence) { }
    
    public create = async (entitySeason: Omit<Season, "_id">,
            entityMovie: Omit<Movie, "_id">): Promise<Season & Movie> => {
        const result = await this.iPersistenceMovie.create(entityMovie)
        entitySeason.movie_id = result._id
    
        return await this.iPersistenceSeason.create(entitySeason)
    }

    public createSeason = async (entitySeason: Omit<Season, "_id">) => {
        return await this.iPersistenceSeason.create(entitySeason)
    }

    public read = async() => {
        return await this.iPersistenceSeason.read()
    }
}

export { SeasonRepository }

