const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();

let pizzas = [];

app.use(express.json());

app.listen(3333, () => {
    console.log("Servidor online!");
});

app.get('/pizzas', (request, response) => {
    response.json(pizzas)
})

app.post('/pizzas', (request, response) => {
    const {name, description, url, price, ingredients} = request.body;
    const pizza = {
        id: uuidv4(),
        name,
        description,
        url,
        price,
        ingredients
    };

    pizzas.push(pizza);

    response.status(201).json(pizza)
})