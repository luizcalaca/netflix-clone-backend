import { User } from "../entities/User";
import { UserRepository } from "../repository/UserRepository";

class UserUseCase {

  constructor(private repository: UserRepository) {}

  public create = async (entity: Omit<User, "_id">): Promise<User> => {
    return await this.repository.create(entity)
  }

  public read = async (): Promise<User> => {
    return await this.repository.read()
  }
}

export default UserUseCase;



