export type CreatedUser = {
  email: string;
  password: string;
};

export type ServiceMessage = { message: string };

type ServiceResponseErrorType =
  | 'BAD_REQUEST'
  | 'UNAUTHORIZED'
  | 'NOT_FOUND'
  | 'CONFLICT';

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL';
  data: T;
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
