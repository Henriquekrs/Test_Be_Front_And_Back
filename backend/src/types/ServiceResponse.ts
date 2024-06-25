export type CreatedUser = {
  email: string;
  password: string;
};

export type Adress = {
  rua: string;
  cidade: string;
  estado: string;
  cep: string;
  pais: string;
};

export type Phones = {
  numero: string;
};

export type CreateClientResponse = {
  id: number;
  name: string;
  cpf: string;
  enderecos?: Adress[] | undefined;
  telefones?: Phones[] | undefined;
};

export type ClientResponse = {
  name: string;
  cpf: string;
};

export type ServiceMessage = { message: string };

export type TokenType = { token: string };

type ServiceResponseErrorType =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'CONFLICT';

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL';
  data: T;
};

export type ServiceResponseDelete = {
  message: string;
};

export type ServiceResponseError = {
  status: ServiceResponseErrorType;
  data: ServiceMessage;
};

export type ServiceResponse<T> =
  | ServiceResponseError
  | ServiceResponseSuccess<T>;

export type ServiceResponseCreated = {
  status: 'SUCCESSFUL';
  data: CreatedUser;
};
