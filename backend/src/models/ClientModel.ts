import SequelizeClientModel from '../database/models/SequelizeClientModel';
import SequelizeSalesModel from '../database/models/SequelizeSalesModel';
import { IClient } from '../interfaces/IClient';
import { IClientModel } from '../interfaces/IClientModel';
import { Op } from 'sequelize';

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

  async getById(clientId: number, month?: number, year?: number) {
    const whereCondition: any = {};

    if (month && year) {
      whereCondition.dataTime = {
        [Op.between]: [
          new Date(year, month - 1, 1),
          new Date(year, month, 0, 23, 59, 59),
        ],
      };
    } else if (year) {
      whereCondition.dataTime = {
        [Op.between]: [
          new Date(year, 0, 1),
          new Date(year, 11, 31, 23, 59, 59),
        ],
      };
    }

    try {
      const client = await this.model.findByPk(clientId, {
        include: [
          {
            model: SequelizeSalesModel,
            as: 'vendas',
            where: month || year ? whereCondition : undefined,
            required: false,
            order: [['dataTime', 'DESC']],
          },
        ],
      });

      return client;
    } catch (error) {
      console.error('Error in ClientModel.getById:', error);
      return null;
    }
  }
}
