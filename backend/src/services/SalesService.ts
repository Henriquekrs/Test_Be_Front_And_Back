import { ISales } from '../interfaces/ISales';
import SalesModel from '../models/SalesModel';
import {
  ServiceResponse,
  ServiceResponseError,
  ServiceResponseSuccess,
} from '../types/ServiceResponse';

export default class SalesService {
  constructor(private salesModel = new SalesModel()) {}

  async create(data: any): Promise<ServiceResponse<ISales>> {
    try {
      const dbData = await this.salesModel.create(data);
      if (!dbData) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not created' },
        };
      }
      const response: ServiceResponseSuccess<ISales> = {
        status: 'SUCCESSFUL',
        data: dbData,
      };
      return response;
    } catch (error) {
      console.error('Error in SalesService.create: ', error);
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error creating sale' },
      };
      return response;
    }
  }

  async getAll(): Promise<ServiceResponse<ISales[]>> {
    try {
      const dbData = await this.salesModel.getAll();
      if (!dbData) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not found' },
        };
      }
      const response: ServiceResponseSuccess<ISales[]> = {
        status: 'SUCCESSFUL',
        data: dbData,
      };
      return response;
    } catch (error) {
      console.error('Error in SalesService.getAll: ', error);
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error searching for sale' },
      };
      return response;
    }
  }
}
