import ClientModel from '../models/ClientModel';
import {
  ClientResponse,
  ServiceResponse,
  ServiceResponseError,
  ServiceResponseSuccess,
} from '../types/ServiceResponse';

export default class ClientService {
  constructor(private clientModel = new ClientModel()) {}

  async getAll(): Promise<ServiceResponse<ClientResponse[]>> {
    try {
      const clients = await this.clientModel.getAll();
      if (!clients) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not found' },
        };
      }
      const response: ServiceResponseSuccess<ClientResponse[]> = {
        status: 'SUCCESSFUL',
        data: clients,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error internal' },
      };
      return response;
    }
  }

  async getById(clientId: number, month?: number, year?: number) {
    try {
      console.log(clientId, 'Service');

      const client = await this.clientModel.getById(clientId, month, year);
      if (!client) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Client not found' },
        };
      }
      const response = {
        status: 'SUCCESSFUL',
        data: client,
      };
      return response;
    } catch (error) {
      console.error('Error in ClientService.getById:', error);
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error search client' },
      };
      return response;
    }
  }
}
