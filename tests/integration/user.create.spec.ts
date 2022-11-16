import chaiAsPromised from 'chai-as-promised';
import * as chai from 'chai'
import supertest from 'supertest'
import app from '../../src/application/app'

chai.use(chaiAsPromised)
const expect = chai.expect

describe('Testing POSTS/shots endpoint', () => {
    it('respond with valid HTTP status code and description and message', async function (done) {

      await supertest(app).post('/users').send({
        name: 'John',
        email: "email@email.com",
        password: "R#@a89*"
      })
      .expect(201)
      .then((response) => {
        expect(response.status).to.be.equal(201)
        done();
      })
      .catch(done)
    })
});