import { describe } from "mocha";
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app.js'
import { expect } from 'chai'
import sinon from 'sinon'
import connection from '../../data/connection.js'

chai.use(chaiHttp)

describe('Rota register', function() {
  afterEach(sinon.restore)

  it('/POST deve retornar status 201 e um objeto com os dados do usuário', async function(){

      const data_user = {
        "id": 4,
        "name": "Rogers",
        "email": "rogers@rmail.com",
        "pokeballs": 100,
        "id_generation": 1
      }
    sinon.stub(connection, 'execute').resolves([{insertId: 4}])
    
    const response = await chai.request(app)
    .post('/register')
    .send(data_user)
    expect(response.status).to.equal(201);
    expect(response.body).to.deep.equal(data_user)
  })

})

