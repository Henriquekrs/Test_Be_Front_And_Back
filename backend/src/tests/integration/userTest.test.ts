import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtConfig';
import SequelizeUserModel from '../../database/models/SequelizeUserModel';
import { userMock } from '../mocks/userMock';

chai.use(chaiHttp);

describe('UserTest in routes', () => {
  const appInstance = new App();

  const validUser = {
    email: 'teste3@teste.com',
    password: 'Password1@',
  };

  it('should return 200 if user is created', async () => {
    sinon.stub(SequelizeUserModel, 'create').resolves(userMock as any);
    const res = await chai
      .request(appInstance.app)
      .post('/user')
      .send(validUser);

    expect(res.status).to.be.equal(200);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('email');
    expect(res.body).to.have.property('password');
  });
});
