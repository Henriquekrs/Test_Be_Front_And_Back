import { IClient } from './IClient';

export interface IClientModel {
  getAll(): Promise<IClient[] | null>;
}
