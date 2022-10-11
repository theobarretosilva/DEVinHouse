import express from 'express'
import pizzasRouter from './routes/pizzas.routes.js';
import solicitationsRouter from './routes/solicitations.routes.js';
import userRouter from './routes/user.routes.js';

const app = express();

app.use(express.json());
app.use(pizzasRouter);
app.use(solicitationsRouter);
app.use(userRouter);

app.listen(3333, () => {
    console.log("Servidor online!");
});

export default app;