import { IClient, ICreateClientParams } from '../interfaces/IClient';
import ClientModel from '../models/ClientModel';
import {
  ClientResponse,
  CreateClientResponse,
  ServiceResponse,
  ServiceResponseDelete,
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

  async getById(
    clientId: number,
    month?: number,
    year?: number
  ): Promise<ServiceResponse<IClient>> {
    try {
      const client = await this.clientModel.getById(clientId, month, year);
      if (!client) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Client not found' },
        };
      }
      const response: ServiceResponseSuccess<IClient> = {
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

  async create(
    clientData: ICreateClientParams
  ): Promise<ServiceResponse<CreateClientResponse>> {
    try {
      const client = await this.clientModel.create(clientData);
      if (!client) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Client not found' },
        };
      }
      const response: ServiceResponseSuccess<CreateClientResponse> = {
        status: 'SUCCESSFUL',
        data: client,
      };
      return response;
    } catch (error) {
      console.log('error service', error);
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error create client' },
      };
      return response;
    }
  }

  async update(
    clientId: number,
    clientData: ICreateClientParams
  ): Promise<ServiceResponse<CreateClientResponse>> {
    try {
      const client = await this.clientModel.update(clientId, clientData);
      if (!client) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Client not found' },
        };
      }
      const response: ServiceResponseSuccess<CreateClientResponse> = {
        status: 'SUCCESSFUL',
        data: client,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error update client' },
      };
      return response;
    }
  }

  async delete(
    clientId: number
  ): Promise<ServiceResponse<ServiceResponseDelete>> {
    try {
      const client = await this.clientModel.delete(clientId);
      if (!client) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Client not found' },
        };
      }
      const response: ServiceResponseSuccess<ServiceResponseDelete> = {
        status: 'SUCCESSFUL',
        data: { message: 'Client deleted with success' },
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error delete client' },
      };
      return response;
    }
  }
}
