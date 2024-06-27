import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import { App } from '../../app';
import jwt from 'jsonwebtoken';
import jwtSecret from '../../config/jwtConfig';

chai.use(chaiHttp);

describe('TokenTest in routes', () => {
  const appInstance = new App();

  const validUser = {
    email: 'teste1@teste.com',
    password: 'Password1@',
  };

  const validToken = jwt.sign({ email: validUser.email }, jwtSecret, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  it('should return 401 if token not found', async () => {
    const res = await chai.request(appInstance.app).get('/client');

    expect(res.status).to.be.equal(401);
    expect(res.body).to.have.property('message').equal('Token not found');
  });
  it('should return 401 if token type is not Bearer', async () => {
    const res = await chai
      .request(appInstance.app)
      .get('/client')
      .set('Authorization', 'Token' + validToken);

    expect(res.status).to.be.equal(401);
    expect(res.body)
      .to.have.property('message')
      .equal('Token must be a valid token');
  });

  afterEach(() => {
    sinon.restore();
  });
});
