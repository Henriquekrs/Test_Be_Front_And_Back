import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import bcrypt from 'bcrypt';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async create(req: Request, res: Response) {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const serviceResponse = await this.userService.create(
      email,
      hashedPassword
    );
    return res
      .status(mapStatusHTTP(serviceResponse.status))
      .json(serviceResponse.data);
  }
}
