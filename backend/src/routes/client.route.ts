import { Request, Response, Router } from 'express';
import ClientController from '../controller/ClientController';

const clientController = new ClientController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  clientController.getAll(req, res)
);

router.get('/:id', (req: Request, res: Response) =>
  clientController.getById(req, res)
);

export default router;
