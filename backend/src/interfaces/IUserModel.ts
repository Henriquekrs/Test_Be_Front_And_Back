import { IUser } from './IUser';

export interface IUserModel {
  create(email: string, password: string): Promise<IUser | null>;
}
