import { IPersistence } from '../../domain/repository/IPersistence';
import { SeasonRepository } from '../../domain/repository/SeasonRepository';
import SeasonUseCase from '../../domain/usecase/SeasonService';
import SeasonController from '../controllers/SeasonController';
import SeasonODM from '../persistence/SeasonODM';

const ipersitence: IPersistence = new SeasonODM()
const seasonRepository = new SeasonRepository(ipersitence)
const usecase = new SeasonUseCase(seasonRepository)
const controller = new SeasonController(usecase)

export {controller}