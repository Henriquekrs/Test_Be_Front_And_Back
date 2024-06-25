import { IProduct } from './IProduct';

export interface IProductModel {
  getAll(): Promise<IProduct[] | null>;
  getById(productId: string): Promise<IProduct | null>;
}
