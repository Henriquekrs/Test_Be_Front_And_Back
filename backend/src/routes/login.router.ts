import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import validateInputs from '../middlewares/validationUser';

const loginController = new UserController();

const router = Router();

router.post('/', validateInputs, (req: Request, res: Response) =>
  loginController.login(req, res)
);

export default router;
