import { Router } from 'express';
import { createOne } from '../controllers/user.controller.js';

const userRouter = Router();

userRouter.post('/user/address', createOne)

export default userRouter;