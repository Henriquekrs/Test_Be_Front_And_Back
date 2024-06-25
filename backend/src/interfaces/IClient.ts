import { ISales } from './ISales';

export interface IClient {
  id?: number | undefined;
  name: string;
  cpf: string;
  vendas?: ISales[];
}

export interface ICreateClientParams {
  name: string;
  cpf: string;
  address: {
    rua: string;
    cidade: string;
    estado: string;
    cep: string;
    pais: string;
  };
  phones: string[];
}
