// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { v4 as uuidv4 } from 'uuid'

let solicitations = [];

export function findAll(request, response){
    response.json(solicitations);
}

export function create(request, response){
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
}

export function find(request, response){
    const orderPerId = solicitations.find(solicitation => solicitation.id === request.params.id);

    if(!orderPerId){
        return response.status(404).json({ error: 'Desculpe, esse item não foi encontrado!' })
    };

    response.json(orderPerId);
}