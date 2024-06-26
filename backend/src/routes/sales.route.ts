import { Request, Response, Router } from 'express';
import SalesController from '../controller/SalesController';

const salesController = new SalesController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  salesController.getAll(req, res)
);

router.post('/', (req: Request, res: Response) =>
  salesController.create(req, res)
);

export default router;
