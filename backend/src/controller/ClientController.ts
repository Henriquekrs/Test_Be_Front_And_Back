import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import ClientService from '../services/ClientService';

export default class ClientController {
  constructor(private clientService = new ClientService()) {}

  async getAll(req: Request, res: Response) {
    try {
      const serviceResponse = await this.clientService.getAll();
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Data not found' });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { month, year } = req.query;

      const clientId = parseInt(id, 10);
      const monthNumber = month ? parseInt(month as string, 10) : undefined;
      const yearNumber = year ? parseInt(year as string, 10) : undefined;
      console.log(clientId, 'controller');

      const serviceResponse = await this.clientService.getById(
        clientId,
        monthNumber,
        yearNumber
      );
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      res.status(400).json({ message: 'Client not found' });
    }
  }
}
