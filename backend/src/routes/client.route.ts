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

router.post('/', (req: Request, res: Response) => {
  clientController.create(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  clientController.update(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  clientController.delete(req, res);
});

export default router;
