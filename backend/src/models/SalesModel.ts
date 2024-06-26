import SequelizeSalesModel from '../database/models/SequelizeSalesModel';
import { ISales } from '../interfaces/ISales';
import { ISalesModel } from '../interfaces/ISalesModel';

export default class SalesModel implements ISalesModel {
  private model = SequelizeSalesModel;

  async create(data: any): Promise<any> {
    try {
      const dbData = await this.model.create(data);
      return dbData;
    } catch (error) {
      console.error('Error in SalesModel.create: ', error);
      return null;
    }
  }

  async getAll(): Promise<ISales[] | null> {
    try {
      const dbData = await this.model.findAll({
        attributes: { exclude: ['id', 'dataTime'] },
      });
      return dbData;
    } catch (error) {
      console.error('Error in SalesModel.getAll: ', error);
      return null;
    }
  }
}
