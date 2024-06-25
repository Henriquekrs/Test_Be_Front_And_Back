import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ClientService from '../services/ClientService';

export default class ClientController {
  constructor(private clientController = new ClientService()) {}

  async getAll(req: Request, res: Response) {
    try {
      const serviceResponse = await this.clientController.getAll();
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Data not found' });
    }
  }
}
