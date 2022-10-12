import { Router } from 'express';
import { create, find, findAll } from '../controllers/pizza.controller.js';

const pizzasRouter = Router();

pizzasRouter.post('/pizzas', create);
pizzasRouter.get('/pizzas', findAll);
pizzasRouter.get('/pizzas', find);

export default pizzasRouter;