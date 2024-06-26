import { Request, Response } from 'express';
import SalesService from '../services/SalesService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class SalesController {
  constructor(private salesService = new SalesService()) {}

  async create(req: Request, res: Response) {
    try {
      const data = req.body;

      const serviceResponse = await this.salesService.create(data);
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'An error occurred during sales creation' });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const serviceResponse = await this.salesService.getAll();
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      return res
        .status(400)
        .json({ message: 'An error occurred during sales listing' });
    }
  }
}
