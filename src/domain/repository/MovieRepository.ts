import { Movie } from "../entities/Movie"
import { IPersistence } from "./IPersistence"

class MovieRepository {
    constructor(private iPersistence: IPersistence) { }
    
    public create = async (entity: Omit<Movie, "_id">): Promise<Movie> => {
        return await this.iPersistence.create(entity)
    }

    public read = async() => {
        return await this.iPersistence.read()
    }
}

export { MovieRepository }

