import { UserRepository } from "../../src/domain/repository/UserRepository"
import { stubInterface } from "ts-sinon";
import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import sinon from 'sinon'
import UserService from "../../src/domain/usecase/UserService";
import { IUser } from "../../src/domain/entities/interfaces/IUser";
import { User } from "../../src/domain/entities/User";
import { IPersistence } from "../../src/domain/repository/IPersistence";

chai.use(chaiAsPromised)
const expect = chai.expect

describe('BDD - Creating an User', () => {
    it('BDD - Should create an User', async () => {
        const user: Omit<User, "_id"> = {
            name: "One",
            email: '3452345@email.com',
            password: 'asdf'
        }

        const userMock: User = {
            _id: "5ce819935e539c343f141ece",
            name: "One",
            email: '3452345@email.com',
            password: 'asdf'
        }

        const iPersistence = stubInterface<IPersistence>()
        const userRepository = new UserRepository(iPersistence)
        userRepository.create = sinon.stub().returns(userMock)

        const usecase = new UserService(userRepository)
        usecase.create = sinon.stub().returns(userMock)

        const result = await usecase.create(user)

        expect(result).to.be.equal(userMock)
    })
    sinon.restore()
})