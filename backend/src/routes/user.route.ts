import { Request, Response, Router } from 'express';
import UserController from '../controller/UserController';
import validateInputs from '../middlewares/validationUser';

const userController = new UserController();

const router = Router();

router.post('/', validateInputs, (req: Request, res: Response) =>
  userController.create(req, res)
);

router.post('/', (req: Request, res: Response) => {
  /* controller */
});

export default router;
