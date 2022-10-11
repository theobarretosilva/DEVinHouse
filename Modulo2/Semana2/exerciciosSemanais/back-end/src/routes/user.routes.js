import { Router } from 'express';
import { create } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/user/address', create)

export default userRouter;