import { CreateClientResponse } from '../types/ServiceResponse';
import { IClient, ICreateClientParams } from './IClient';

export interface IClientModel {
  getAll(): Promise<IClient[] | null>;
  getById(
    clientId: number,
    month?: number,
    year?: number
  ): Promise<IClient | null>;
  create(
    clientData: ICreateClientParams
  ): Promise<CreateClientResponse | undefined | null>;
}
