import { Router } from 'express';
import userRouter from './user.route';
import loginRouter from './login.router';
import clientRouter from './client.route';

const router = Router();

router.use('/user', userRouter);
router.use('/login', loginRouter);
router.use('/client', clientRouter);

export default router;
