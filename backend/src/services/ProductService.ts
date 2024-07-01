import { IProduct } from '../interfaces/IProduct';
import ProductModel from '../models/ProductModel';
import {
  ServiceResponse,
  ServiceResponseDelete,
  ServiceResponseError,
  ServiceResponseSuccess,
} from '../types/ServiceResponse';

export default class ProductService {
  constructor(private productModel = new ProductModel()) {}

  async getAll(): Promise<ServiceResponse<IProduct[]>> {
    try {
      const products = await this.productModel.getAll();
      if (!products) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not found' },
        };
      }
      const response: ServiceResponseSuccess<IProduct[]> = {
        status: 'SUCCESSFUL',
        data: products,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error searching for product' },
      };
      return response;
    }
  }

  async getById(productId: string): Promise<ServiceResponse<IProduct>> {
    try {
      const product = await this.productModel.getById(productId);
      if (!product) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not found' },
        };
      }
      const response: ServiceResponseSuccess<IProduct> = {
        status: 'SUCCESSFUL',
        data: product,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error searching for a product' },
      };
      return response;
    }
  }

  async create(product: IProduct): Promise<ServiceResponse<IProduct>> {
    try {
      const newProduct = await this.productModel.create(product);
      if (!newProduct) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not created' },
        };
      }
      const response: ServiceResponseSuccess<IProduct> = {
        status: 'SUCCESSFUL',
        data: newProduct,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error creating product' },
      };
      return response;
    }
  }

  async update(
    id: string,
    product: IProduct
  ): Promise<ServiceResponse<IProduct>> {
    try {
      const updatedProduct = await this.productModel.update(id, product);
      if (!updatedProduct) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not updated' },
        };
      }
      const response: ServiceResponseSuccess<IProduct> = {
        status: 'SUCCESSFUL',
        data: updatedProduct,
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error changing product' },
      };
      return response;
    }
  }

  async delete(
    productId: string
  ): Promise<ServiceResponse<ServiceResponseDelete>> {
    try {
      const product = await this.productModel.delete(productId);
      if (!product) {
        return {
          status: 'BAD_REQUEST',
          data: { message: 'Data not deleted' },
        };
      }
      const response: ServiceResponseSuccess<ServiceResponseDelete> = {
        status: 'SUCCESSFUL',
        data: { message: 'Product successful deleted' },
      };
      return response;
    } catch (error) {
      const response: ServiceResponseError = {
        status: 'BAD_REQUEST',
        data: { message: 'Error deleting product' },
      };
      return response;
    }
  }
}
