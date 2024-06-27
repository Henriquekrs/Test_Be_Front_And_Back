import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtConfig';
import SequelizeSalesModel from '../../database/models/SequelizeSalesModel';
import { createSaleMock, getAllSalesMock } from '../mocks/salesMock';

chai.use(chaiHttp);

describe('SalesTest in routes', () => {
  const appInstance = new App();

  const validUser = {
    email: 'teste1@teste.com',
    password: 'Password1@',
  };

  const validToken = jwt.sign({ email: validUser.email }, jwtSecret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  const createSale = {
    clientId: 1,
    productId: 5,
    quantidade: 2,
    precoUnitario: 1000,
    precoTotal: 2000,
  };

  it('should return 200 and a list of sales', async () => {
    sinon.stub(SequelizeSalesModel, 'findAll').resolves(getAllSalesMock as any);
    const res = await chai
      .request(appInstance.app)
      .get('/sales')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });
  it('should return 200 create a sale', async () => {
    sinon.stub(SequelizeSalesModel, 'create').resolves(createSaleMock as any);
    const res = await chai
      .request(appInstance.app)
      .post('/sales')
      .set('Authorization', `Bearer ${validToken}`)
      .send(createSale);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.clientId).to.be.equal(createSaleMock.clientId);
    expect(res.body.productId).to.be.equal(createSaleMock.productId);
    expect(res.body.quantidade).to.be.equal(createSaleMock.quantidade);
    expect(res.body.precoUnitario).to.be.equal(createSaleMock.precoUnitario);
    expect(res.body.precoTotal).to.be.equal(createSaleMock.precoTotal);
  });
  afterEach(() => {
    sinon.restore();
  });
});
