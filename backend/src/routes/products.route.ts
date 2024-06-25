import { Request, Response, Router } from 'express';
import ProductController from '../controller/ProductController';

const productController = new ProductController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  productController.getAll(req, res)
);

export default router;
