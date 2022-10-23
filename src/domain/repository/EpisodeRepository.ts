import { Episode } from "../entities/Episode"
import { Season } from "../entities/Season"
import { IPersistence } from "./IPersistence"

class EpisodeRepository {

    constructor(private iPersistenceEpisode: IPersistence,
                private iPersistenceSeason: IPersistence = null as unknown as IPersistence) { }
    
    public create = async (entityEpisode: Omit<Episode, "_id">, 
            entitySeason: Omit<Season, "_id">): Promise<Episode & Season> => {
        const result = await this.iPersistenceSeason.create(entitySeason)
        entityEpisode.season_id = result._id
        
        return await this.iPersistenceEpisode.create(entityEpisode)
    }

    public createEpisode = async (entityEpisode: Omit<Episode, "_id">): Promise<Episode> => {
        return await this.iPersistenceEpisode.create(entityEpisode)
    }

    public read = async() => {
        return await this.iPersistenceEpisode.read()
    }
}

export { EpisodeRepository }

