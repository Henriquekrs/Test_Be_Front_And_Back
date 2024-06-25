import SequelizeProductModel from '../database/models/SequelizeProductModel';
import { IProduct } from '../interfaces/IProduct';
import { IProductModel } from '../interfaces/IProductModel';

export default class ProductModel implements IProductModel {
  private model = SequelizeProductModel;

  async getAll(): Promise<IProduct[] | null> {
    try {
      const dbData = await this.model.findAll({
        order: [['nome', 'ASC']],
        attributes: { exclude: ['id', 'deletedAt', 'createdAt', 'updatedAt'] },
      });
      console.log(dbData);
      return dbData;
    } catch (error) {
      return null;
    }
  }

  async getById(productId: string): Promise<IProduct | null> {
    try {
      const dbData = await this.model.findByPk(productId, {
        attributes: { exclude: ['id', 'deletedAt', 'createdAt', 'updatedAt'] },
      });
      return dbData;
    } catch (error) {
      return null;
    }
  }

  async create(product: IProduct): Promise<IProduct | null> {
    try {
      const dbData = await this.model.create(product);
      const { id, nome, descricao, preco } = dbData.get({ plain: true });
      return { id, nome, descricao, preco };
    } catch (error) {
      return null;
    }
  }

  async update(id: string, product: IProduct): Promise<IProduct | null> {
    try {
      await this.model.update(product, { where: { id } });
      const dbData = await this.model.findByPk(id, {
        attributes: { exclude: ['id', 'deletedAt', 'createdAt', 'updatedAt'] },
      });
      return dbData;
    } catch (error) {
      return null;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.model.destroy({ where: { id } });
      return true;
    } catch (error) {
      return false;
    }
  }
}
