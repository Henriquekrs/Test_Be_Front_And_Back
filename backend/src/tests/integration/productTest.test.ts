import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtConfig';
import SequelizeProductModel from '../../database/models/SequelizeProductModel';
import {
  createProductMock,
  deleteProductMock,
  getAllProductMock,
} from '../mocks/productMock';

chai.use(chaiHttp);

describe('ProductTest in routes', () => {
  const appInstance = new App();

  const validUser = {
    email: 'teste1@teste.com',
    password: 'Password1@',
  };

  const validToken = jwt.sign({ email: validUser.email }, jwtSecret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });
  const createProduct = {
    nome: 'Martelo Rompe Tormentas',
    descricao: 'Descrição do Produto A',
    preco: '1000.00',
  };
  it('should return 200 and a list of products', async () => {
    sinon
      .stub(SequelizeProductModel, 'findAll')
      .resolves(getAllProductMock as any);
    const res = await chai
      .request(appInstance.app)
      .get('/product')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('array');
  });
  it('should return 200 and a product', async () => {
    sinon
      .stub(SequelizeProductModel, 'findByPk')
      .resolves(getAllProductMock[0] as any);
    const res = await chai
      .request(appInstance.app)
      .get('/product/1')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.nome).to.be.equal(getAllProductMock[0].nome);
  });
  it('should return 200 and create a product', async () => {
    sinon
      .stub(SequelizeProductModel, 'create')
      .resolves(createProductMock as any);
    const res = await chai
      .request(appInstance.app)
      .post('/product')
      .set('Authorization', `Bearer ${validToken}`)
      .send(createProduct);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
  });
  it('should return 200 and update a product', async () => {
    sinon
      .stub(SequelizeProductModel, 'update')
      .resolves(getAllProductMock[0] as any);
    const res = await chai
      .request(appInstance.app)
      .put('/product/1')
      .set('Authorization', `Bearer ${validToken}`)
      .send(createProduct);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
  });
  it('should return 200 and delete a product', async () => {
    sinon
      .stub(SequelizeProductModel, 'destroy')
      .resolves(deleteProductMock as any);
    const res = await chai
      .request(appInstance.app)
      .delete('/product/1')
      .set('Authorization', `Bearer ${validToken}`);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.be.an('object');
    expect(res.body.message).to.be.equal(deleteProductMock.message);
  });
  afterEach(() => {
    sinon.restore();
  });
});
