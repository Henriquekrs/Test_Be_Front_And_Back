import ProductModel from '../models/ProductModel';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async getAll() {
    try {
      const products = await this.productModel.getAll();
      if (!products) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not found' },
        };
      }
      const response = {
        status: 'SUCCESSFUL',
        data: products,
      };
      return response;
    } catch (error) {
      return {
        status: 'BAD_REQUEST',
        data: { message: 'Error internal' },
      };
    }
  }
}
