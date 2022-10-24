import { IPersistence } from '../../domain/repository/IPersistence';
import { EpisodeRepository } from '../../domain/repository/EpisodeRepository';
import EpisodeUseCase from '../../domain/usecase/EpisodeService';
import EpisodeController from '../controllers/EpisodeController';
import EpisodeODM from '../persistence/EpisodeODM';

const ipersitence: IPersistence = new EpisodeODM()
const episodeRepository = new EpisodeRepository(ipersitence)
const usecase = new EpisodeUseCase(episodeRepository)
const controller = new EpisodeController(usecase)

export {controller}