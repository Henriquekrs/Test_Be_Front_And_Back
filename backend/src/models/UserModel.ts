import SequelizeUserModel from '../database/models/SequelizeUserModel';
import { IUser } from '../interfaces/IUser';
import { IUserModel } from '../interfaces/IUserModel';

export default class UserModel implements IUserModel {
  private model = SequelizeUserModel;

  async create(email: string, password: string): Promise<IUser | null> {
    try {
      const dbData = await this.model.create({ email, password });
      return dbData;
    } catch (error) {
      console.error('Error in UserModel.create: ', error);
      return null;
    }
  }

  async login(email: string): Promise<IUser | null> {
    try {
      const dbData = await this.model.findOne({ where: { email } });
      return dbData;
    } catch (error) {
      return null;
    }
  }
}
