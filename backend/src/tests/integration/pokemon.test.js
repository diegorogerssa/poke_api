import { describe } from "mocha";
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js'
import { expect } from 'chai'
import sinon from 'sinon'
import connection from '../../data/connection.js'

chai.use(chaiHttp)

describe('Rota pokemon', function() {
  afterEach(sinon.restore)

  it('/POST deve retornar status 201 e mensagem pokemon cadastrado', async function(){

    sinon.stub(connection, 'execute').resolves([{insertId: 20}])
    const poke = {
        id_pokemon:'20',
        name_pokemon: 'chalizard',
        image: 'urldaimagem.com'
    }
    const response = await chai.request(app)
    .post('/pokemon')
    .send(poke)
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal(
      {
        message: "Pokemon cadastrado com sucesso com o id 20"
      }
    )
  })
})

