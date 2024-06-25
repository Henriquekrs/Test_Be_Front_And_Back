import { Request, Response } from 'express';
import UserService from '../services/UserService';
import mapStatusHTTP from '../utils/mapStatusHTTP';

export default class UserController {
  constructor(private userService = new UserService()) {}

  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const serviceResponse = await this.userService.create(email, password);
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (erro) {
      return res
        .status(400)
        .json({ message: 'An error occurred during user creation' });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const serviceResponse = await this.userService.login(email, password);
      return res
        .status(mapStatusHTTP(serviceResponse.status))
        .json(serviceResponse.data);
    } catch (error) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  }
}
