// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { v4 as uuidv4 } from 'uuid'

let pizzas = [];

export function create(request, response){
    const {name, description, price, ingredients} = request.body;
    const pizza = {
        id: uuidv4(),
        name,
        description,
        price,
        ingredients
    };

    pizzas.push(pizza);

    response.status(201).json(pizza);
};

export function findAll(request, response){
    response.json(pizzas)
}

export function find(request, response){
    const nameQuery = request.query.name;
    const pizzasFiltered = pizzas.filter(pizza => pizza.name.toLowerCase().includes(nameQuery));
    response.json(pizzasFiltered);
}