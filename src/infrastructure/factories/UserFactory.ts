import { IPersistence } from '../../domain/repository/IPersistence';
import { UserRepository } from '../../domain/repository/UserRepository';
import UserUseCase from '../../domain/usecase/UserService';
import UserController from '../controllers/UserController';
import UserODM from '../persistence/UserODM';

const ipersitence: IPersistence = new UserODM()
const userRepository = new UserRepository(ipersitence)
const usecase = new UserUseCase(userRepository)
const controller = new UserController(usecase)

export {controller}