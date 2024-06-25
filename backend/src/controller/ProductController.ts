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

  async getById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const serviceResponse = await this.productService.getById(id);
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Data not found' });
    }
  }

  async create(req: Request, res: Response) {
    const product = req.body;
    try {
      const serviceResponse = await this.productService.create(product);
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Data not found' });
    }
  }
}
