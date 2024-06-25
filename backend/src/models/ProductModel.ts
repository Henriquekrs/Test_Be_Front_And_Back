import SequelizeProductModel from '../database/models/SequelizeProductModel';

export default class ProductModel {
  private model = SequelizeProductModel;

  async getAll() {
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
}
