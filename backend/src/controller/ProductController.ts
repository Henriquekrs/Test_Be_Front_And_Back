import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ProductService from '../services/ProductService';

export default class ProductController {
  constructor(private productService = new ProductService()) {}

  async getAll(req: Request, res: Response) {
    try {
      const serviceResponse = await this.productService.getAll();
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Data not found' });
    }
  }
}
