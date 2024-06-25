import SequelizeClientModel from '../database/models/SequelizeClientModel';
import { IClient } from '../interfaces/IClient';
import { IClientModel } from '../interfaces/IClientModel';

export default class ClientModel implements IClientModel {
  private model = SequelizeClientModel;

  async getAll(): Promise<IClient[] | null> {
    try {
      const dbData = await this.model.findAll({ order: [['id', 'ASC']] });
      return dbData;
    } catch (error) {
      return null;
    }
  }
}
