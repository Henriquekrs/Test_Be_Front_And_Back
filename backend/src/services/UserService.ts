import UserModel from '../models/UserModel';
import {
  ServiceResponse,
  ServiceResponseError,
  ServiceResponseSuccess,
  CreatedUser,
} from '../types/ServiceResponse';

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
}
