import ClientModel from '../models/ClientModel';
import {
  ClientResponse,
  ServiceResponse,
  ServiceResponseError,
  ServiceResponseSuccess,
} from '../types/ServiceResponse';

export default class ClientService {
  constructor(private clientService = new ClientModel()) {}

  async getAll(): Promise<ServiceResponse<ClientResponse[]>> {
    try {
      const clients = await this.clientService.getAll();
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
}
