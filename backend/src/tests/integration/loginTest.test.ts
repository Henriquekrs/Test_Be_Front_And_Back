import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import SequelizeUserModel from '../../database/models/SequelizeUserModel';

chai.use(chaiHttp);

describe('LoginTest in routes', () => {
  const appInstance = new App();

  const invalidEmail = {
    email: 'teste1@test',
    password: 'Password1@',
  };
  const validUser = {
    email: 'teste1@teste.com',
    password: 'Password1@',
  };
  const dbData = {
    email: 'teste1@teste.com',
    password: '$2a$10$.7zydCQiL8S5wjVJw2U50.15wXiCF4RbSwyp/ag3aqQrQX3MPoIsu',
  };

  it('should return 400 if All fields must be filled', async () => {
    const res = await chai.request(appInstance.app).post('/login');

    expect(res.status).to.be.equal(400);
    expect(res.body)
      .to.have.property('message')
      .equal('All fields must be filled');
  });
  it('should return 401 if Email is invalid', async () => {
    const res = await chai
      .request(appInstance.app)
      .post('/login')
      .send(invalidEmail);

    expect(res.status).to.be.equal(401);
    expect(res.body)
      .to.have.property('message')
      .equal('Invalid email or password');
  });
  it('should return 200 if token', async () => {
    sinon.stub(SequelizeUserModel, 'findOne').resolves(dbData as any);

    const res = await chai
      .request(appInstance.app)
      .post('/login')
      .send(validUser);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('token');
  });
  afterEach(() => {
    sinon.restore();
  });
});
