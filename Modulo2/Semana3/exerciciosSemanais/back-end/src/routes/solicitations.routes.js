import { Router } from 'express';
import { create, find, findAll } from '../controllers/solicitation.controller.js';

const solicitationsRouter = Router();

solicitationsRouter.post('/solicitations', create)
solicitationsRouter.get('/solicitations', findAll)
solicitationsRouter.get('/solicitations/:id', find)

export default solicitationsRouter;