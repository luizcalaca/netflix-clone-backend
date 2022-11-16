import { SeasonRepository } from "../../src/domain/repository/SeasonRepository"
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import SeasonService from "../../src/domain/usecase/SeasonService";
import { ISeason } from "../../src/domain/entities/interfaces/ISeason";
import { Season } from "../../src/domain/entities/Season";
import { IPersistence } from "../../src/domain/repository/IPersistence";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating a Season', () => {
    it('BDD - Should create an Season', async () => {
        const season: Omit<Season, "_id"> = {
            movie_id: "2",
            title: 'the back again once time repeat',
        }

        const seasonMock: Season = {
            _id: "5ce819935e539c343f141ece",
            movie_id: "2",
            title: 'the back again once time repeat',
        }

        const iPersistence = stubInterface<IPersistence>()
        const seasonRepository = new SeasonRepository(iPersistence)
        seasonRepository.createSeason = sinon.stub().returns(seasonMock)

        const usecase = new SeasonService(seasonRepository)
        usecase.createSeason = sinon.stub().returns(seasonMock)

        const result = await usecase.createSeason(season)

        expect(result).to.be.equal(seasonMock)
    })
    sinon.restore()
})