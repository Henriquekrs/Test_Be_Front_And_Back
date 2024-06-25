import { IClient } from './IClient';

export interface IClientModel {
  getAll(): Promise<IClient[] | null>;
  getById(clientId: number, month?: number, year?: number): Promise<any>;
}
