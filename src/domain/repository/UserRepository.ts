import { User } from "../entities/User"
import { IPersistence } from "./IPersistence"

class UserRepository {
    constructor(private iPersistence: IPersistence) { }
    
    public create = async (entity: Omit<User, "_id">): Promise<User> => {
        return await this.iPersistence.create(entity)
    }

    public read = async() => {
        return await this.iPersistence.read()
    }
}

export { UserRepository }

