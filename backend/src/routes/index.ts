import { Router } from 'express';
import userRouter from './user.route';
import loginRouter from './login.router';
import clientRouter from './client.route';
import productRouter from './products.route';
import salesRouter from './sales.route';
import validateToken from '../middlewares/validationToken';

const router = Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/client', validateToken, clientRouter);
router.use('/product', validateToken, productRouter);
router.use('/sales', validateToken, salesRouter);

export default router;
