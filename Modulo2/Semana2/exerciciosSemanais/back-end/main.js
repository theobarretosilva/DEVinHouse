const express = require('express')
const app = express()
const { v4: uuidv4 } = require('uuid');
const cors = require('cors')

let pizzas = [];
let solicitations = [];
let userAddress = [];

app.use(express.json());
app.use(cors());

app.listen(3333, () => {
    console.log('Servidor online!');
})

app.post('/pizzas', (request, response) => {
    const { name, description, price, url, ingredients } = request.body

    const pizzaExists = pizzas.find(pizza => pizza.name === name)

    if(pizzaExists) {
        return response.status(401).json({error: 'Pizza já encontra-se cadastrada'})
    }

    const pizza = { 
        id: uuidv4(),
        name, 
        url,
        description, 
        price,
        ingredients
    }

    pizzas.push(pizza);

    response.status(201).json(pizza);
});

app.get('/pizzas', (request, response) => {
    response.json(pizzas)
});

app.get('/pizzas', (request, response) => {
    const nameQuery = request.query.name || "";
    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery.toLowerCase()));
    response.json(pizzasFiltered);
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

    response.status(201).json(solicitation);
});

app.get('/solicitations', (request, response) => {
    response.json(solicitations);
})

app.get('/solicitations/:id', (request, response) => {
    const orderPerId = solicitations.find(solicitation => solicitation.id === request.params.id);

    if(!orderPerId){
        return response.status(404).json({ error: 'Desculpe, esse item não foi encontrado!' })
    };

    response.json(orderPerId);
});

app.post('/user/address', (request, response) => {
    const {zipCode, neighborhood, street, number, complement, addressName} = request.body;
    const address = {
        id: uuidv4(),
        zipCode,
        neighborhood,
        street,
        number,
        complement,
        addressName,
    };

    userAddress.push(address);

    response.status(201).json(address);
});

app.get('/user/address', (request, response) => {
    response.json(userAddress);
});