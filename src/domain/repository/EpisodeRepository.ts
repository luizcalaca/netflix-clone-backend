import { Episode } from "../entities/Episode"
import { IPersistence } from "./IPersistence"

class EpisodeRepository {
    constructor(private iPersistence: IPersistence) { }
    
    public create = async (entity: Omit<Episode, "_id">): Promise<Episode> => {
        return await this.iPersistence.create(entity)
    }

    public read = async() => {
        return await this.iPersistence.read()
    }
}

export { EpisodeRepository }

