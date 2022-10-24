import { IPersistence } from '../../domain/repository/IPersistence';
import { MovieRepository } from '../../domain/repository/MovieRepository';
import MovieUseCase from '../../domain/usecase/MovieService';
import MovieController from '../controllers/MovieController';
import MovieODM from '../persistence/MovieODM';

const ipersitence: IPersistence = new MovieODM()
const movieRepository = new MovieRepository(ipersitence)
const usecase = new MovieUseCase(movieRepository)
const controller = new MovieController(usecase)

export {controller}