import jwt from 'jsonwebtoken';
import jwtSecret from '../config/jwtConfig';
import { RequestHandler } from 'express';

const validateToken: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer') {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  try {
    const user = jwt.verify(token, jwtSecret);
    req.cookies = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default validateToken;
