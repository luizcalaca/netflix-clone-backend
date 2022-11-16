import { EpisodeRepository } from "../../src/domain/repository/EpisodeRepository"
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import EpisodeService from "../../src/domain/usecase/EpisodeService";
import { Episode } from "../../src/domain/entities/Episode";
import { IPersistence } from "../../src/domain/repository/IPersistence";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an Episode', () => {
    it('BDD - Should create an Episode', async () => {
        const Episode: Omit<Episode, "_id"> = {
            season_id: "5ce819935e539c343f141der",
            title: "The back the wasn't go",
            description: "Series across the world",
            number: "6",
            cover: "cover.png",
        }

        const EpisodeMock: Episode = {
            _id: "5ce819935e539c343f141ece",
            season_id: "5ce819935e539c343f141der",
            title: "The back the wasn't go",
            description: "Series across the world",
            number: "6",
            cover: "cover.png",
        }

        const iPersistence = stubInterface<IPersistence>()
        const episodeRepository = new EpisodeRepository(iPersistence)
        episodeRepository.createEpisode = sinon.stub().returns(EpisodeMock)

        const usecase = new EpisodeService(episodeRepository)
        usecase.createEpisode = sinon.stub().returns(EpisodeMock)

        const result = await usecase.createEpisode(Episode)

        expect(result).to.be.equal(EpisodeMock)
    })

    sinon.restore()
})