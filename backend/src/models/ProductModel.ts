import SequelizeProductModel from '../database/models/SequelizeProductModel';
import { IProduct } from '../interfaces/IProduct';
import { IProductModel } from '../interfaces/IProductModel';

export default class ProductModel implements IProductModel {
  private model = SequelizeProductModel;

  async getAll(): Promise<IProduct[] | null> {
    try {
      const dbData = await this.model.findAll({
        order: [['nome', 'ASC']],
        attributes: { exclude: ['id'] },
      });
      return dbData;
    } catch (error) {
      return null;
    }
  }

  async getById(productId: string): Promise<IProduct | null> {
    try {
      const dbData = await this.model.findByPk(productId, {
        attributes: { exclude: ['id'] },
      });
      return dbData;
    } catch (error) {
      return null;
    }
  }
}
