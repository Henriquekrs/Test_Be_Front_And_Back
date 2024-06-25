import UserModel from '../models/UserModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import {
  ServiceResponse,
  ServiceResponseError,
  ServiceResponseSuccess,
  CreatedUser,
  TokenType,
} from '../types/ServiceResponse';
import jwtSecret from '../config/jwtConfig';

export default class UserService {
  constructor(private userModel = new UserModel()) {}

  async create(
    email: string,
    password: string
  ): Promise<ServiceResponse<CreatedUser>> {
    try {
      const user = await this.userModel.create(email, password);
      if (!user) {
        return {
          status: 'CONFLICT',
          data: { message: 'User already exist' },
        };
      }
      const response: ServiceResponseSuccess<CreatedUser> = {
        status: 'SUCCESSFUL',
        data: user,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'An error occurred during user creation' },
      };
      return response;
    }
  }

  async login(
    email: string,
    password: string
  ): Promise<ServiceResponseSuccess<TokenType> | ServiceResponseError> {
    const dbData = await this.userModel.login(email);
    if (!dbData) {
      const response: ServiceResponseError = {
        status: 'UNAUTHORIZED',
        data: { message: 'Invalid email or password' },
      };
      return response;
    }

    const comparePass = bcrypt.compareSync(password, dbData.password);
    if (comparePass) {
      const payload = {
        id: dbData.id,
        email: dbData.email,
      };

      const token = jwt.sign(payload, jwtSecret, {
        expiresIn: '1h',
        algorithm: 'HS256',
      });

      const response: ServiceResponseSuccess<TokenType> = {
        status: 'SUCCESSFUL',
        data: { token },
      };
      return response;
    }

    const response: ServiceResponseError = {
      status: 'UNAUTHORIZED',
      data: { message: 'Invalid email or password' },
    };
    return response;
  }
}
