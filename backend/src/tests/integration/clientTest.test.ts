import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtConfig';
import SequelizeClientModel from '../../database/models/SequelizeClientModel';
import {
  createClientMock,
  deleteClientMock,
  getAllClientMock,
  getByIdClientMock,
} from '../mocks/clientMock';

chai.use(chaiHttp);

describe('ClientTest in routes', () => {
  const appInstance = new App();

  const validUser = {
    email: 'teste1@teste.com',
    password: 'Password1@',
  };

  const validToken = jwt.sign({ email: validUser.email }, jwtSecret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  const client = {
    name: 'testeTeste',
    cpf: 'testeTeste',
    address: {
      rua: 'testeTeste',
      cidade: 'testeTeste',
      estado: 'testeTeste',
      cep: 'testeTeste',
      pais: 'testeTeste',
    },
    phones: ['testeTeste', 'testeTeste'],
  };

  it('should return 200 and a list of clients', async () => {
    sinon
      .stub(SequelizeClientModel, 'findAll')
      .resolves(getAllClientMock as any);
    const res = await chai
      .request(appInstance.app)
      .get('/client')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });
  it('should return 200 and a client', async () => {
    sinon
      .stub(SequelizeClientModel, 'findByPk')
      .resolves(getByIdClientMock as any);
    const res = await chai
      .request(appInstance.app)
      .get('/client/1')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
  });
  it('should return 200 and create a client', async () => {
    sinon
      .stub(SequelizeClientModel, 'create')
      .resolves(createClientMock as any);
    const res = await chai
      .request(appInstance.app)
      .post('/client')
      .set('Authorization', `Bearer ${validToken}`)
      .send(client);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
  });
  it('should return 200 and update a client', async () => {
    sinon
      .stub(SequelizeClientModel, 'update')
      .resolves(createClientMock as any);
    const res = await chai
      .request(appInstance.app)
      .put('/client/2')
      .set('Authorization', `Bearer ${validToken}`)
      .send(client);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
  });
  it('should return 200 and delete a client', async () => {
    sinon
      .stub(SequelizeClientModel, 'destroy')
      .resolves(deleteClientMock as any);
    const res = await chai
      .request(appInstance.app)
      .delete('/client/2')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body).to.have.property('message');
    expect(res.body.message).to.be.equal(deleteClientMock.message);
  });
  afterEach(() => {
    sinon.restore();
  });
});
