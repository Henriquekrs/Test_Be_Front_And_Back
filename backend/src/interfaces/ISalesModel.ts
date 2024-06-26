import { ISales } from './ISales';

export interface ISalesModel {
  create(data: any): Promise<any>;
  getAll(): Promise<ISales[] | null>;
}
