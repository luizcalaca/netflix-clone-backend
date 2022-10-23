import { Season } from "../entities/Season"
import { IPersistence } from "./IPersistence"

class SeasonRepository {
    constructor(private iPersistence: IPersistence) { }
    
    public create = async (entity: Omit<Season, "_id">): Promise<Season> => {
        return await this.iPersistence.create(entity)
    }

    public read = async() => {
        return await this.iPersistence.read()
    }
}

export { SeasonRepository }

