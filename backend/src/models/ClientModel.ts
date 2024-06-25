import SequelizeClientModel from '../database/models/SequelizeClientModel';
import SequelizeSalesModel from '../database/models/SequelizeSalesModel';
import { IClient, ICreateClientParams } from '../interfaces/IClient';
import { IClientModel } from '../interfaces/IClientModel';
import { Op } from 'sequelize';
import db from '../database/models';
import SequelizeAdressModel from '../database/models/SequelizeAdressModel';
import SequelizePhoneModel from '../database/models/SequelizePhoneModel';
import { CreateClientResponse } from '../types/ServiceResponse';

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

  async getById(
    clientId: number,
    month?: number,
    year?: number
  ): Promise<IClient | null> {
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

  async create(
    clientData: ICreateClientParams
  ): Promise<CreateClientResponse | undefined | null> {
    const transaction = await db.transaction();
    try {
      const dbClient = await this.model.create(
        {
          name: clientData.name,
          cpf: clientData.cpf,
        },
        { transaction }
      );

      await SequelizeAdressModel.create(
        {
          ...clientData.address,
          clientId: dbClient.id,
        },
        { transaction }
      );

      for (const phone of clientData.phones) {
        await SequelizePhoneModel.create(
          {
            numero: phone,
            clientId: dbClient.id,
          },
          { transaction }
        );
      }

      await transaction.commit();

      const fullClient = await this.model.findByPk(dbClient.id, {
        include: [
          {
            model: SequelizeAdressModel,
            as: 'enderecos',
            attributes: ['rua', 'cidade', 'estado', 'cep', 'pais'],
          },
          {
            model: SequelizePhoneModel,
            as: 'telefones',
            attributes: ['numero'],
          },
        ],
      });

      return fullClient;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async update(
    clientId: number,
    clientData: ICreateClientParams
  ): Promise<CreateClientResponse | undefined | null> {
    const transaction = await db.transaction();
    try {
      await this.model.update(
        {
          name: clientData.name,
          cpf: clientData.cpf,
        },
        {
          where: { id: clientId },
          transaction,
        }
      );

      await SequelizeAdressModel.update(
        {
          ...clientData.address,
        },
        {
          where: { clientId },
          transaction,
        }
      );

      await SequelizePhoneModel.destroy({
        where: { clientId },
        transaction,
      });

      for (const phone of clientData.phones) {
        await SequelizePhoneModel.create(
          {
            numero: phone,
            clientId,
          },
          { transaction }
        );
      }

      await transaction.commit();

      const fullClient = await this.model.findByPk(clientId, {
        include: [
          {
            model: SequelizeAdressModel,
            as: 'enderecos',
            attributes: ['rua', 'cidade', 'estado', 'cep', 'pais'],
          },
          {
            model: SequelizePhoneModel,
            as: 'telefones',
            attributes: ['numero'],
          },
        ],
      });

      return fullClient;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}
