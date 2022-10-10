const { v4: uuidv4 } = require('uuid');
const express = require('express');
const { response } = require('express');
const app = express();

let pizzas = [];
let solicitations = [];

app.use(express.json());

app.listen(3333, () => {
    console.log("Servidor online!");
});

app.get('/pizzas', (request, response) => {
    const nameQuery = request.query.name;
    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery));
    response.json(pizzasFiltered)
})

app.post('/pizzas', (request, response) => {
    const {name, description, price, ingredients} = request.body;
    const pizza = {
        id: uuidv4(),
        name,
        description,
        price,
        ingredients
    };

    pizzas.push(pizza);

    response.status(201).json(pizza)
})

app.get('/solicitations', (request, response) => {
    response.json(solicitations)
})

app.post('/solicitations', (request, response) => {
    const {clientName, clientCpf, clientAddress, clientPhone, payment, obs, pizzaOrder} = request.body;
    const solicitation = {
        id: uuidv4(),
        clientName,
        clientCpf,
        clientAddress,
        clientPhone,
        payment, 
        obs,
        pizzaOrder,
        status: "Em producão"
    };

    solicitations.push(solicitation);

    response.status(201).json(solicitation)
})