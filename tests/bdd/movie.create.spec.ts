import { MovieRepository } from "../../src/domain/repository/MovieRepository"
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import MovieService from "../../src/domain/usecase/MovieService";
import { IMovie } from "../../src/domain/entities/interfaces/IMovie";
import { Movie } from "../../src/domain/entities/Movie";
import { IPersistence } from "../../src/domain/repository/IPersistence";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating a Movie', () => {
    it('BDD - Should create an Movie', async () => {
        const Movie: Omit<Movie, "_id"> = {
            type: "Serie",
            title: "The back the wasn't go",
            cover: "cover.png",
            logo: "logo.png",
            thumb: "thumb.png",
            description: "Series across the world",
            artists: ["Steven", ""],
            gender: ["Comedy", "Drama"],
            cenes_moments: ["When", "Happens"],
        }

        const MovieMock: Movie = {
            _id: "5ce819935e539c343f141ece",
            type: "Serie",
            title: "The back the wasn't go",
            cover: "cover.png",
            logo: "logo.png",
            thumb: "thumb.png",
            description: "Series across the world",
            artists: ["Steven", ""],
            gender: ["Comedy", "Drama"],
            cenes_moments: ["When", "Happens"],
        }

        const iPersistence = stubInterface<IPersistence>()
        const movieRepository = new MovieRepository(iPersistence)
        movieRepository.create = sinon.stub().returns(MovieMock)

        const usecase = new MovieService(movieRepository)
        usecase.create = sinon.stub().returns(MovieMock)

        const result = await usecase.create(Movie)

        expect(result).to.be.equal(MovieMock)
    })
    sinon.restore()
})