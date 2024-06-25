import { Router } from 'express';
import userRouter from './user.route';
import loginRouter from './login.router';
import clientRouter from './client.route';
import productRouter from './products.route';

const router = Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/client', clientRouter);
router.use('/product', productRouter);

export default router;
