// cadastrar - create
// listar varios - findAll
// listar 1 elemento só = find
// atualizar elementos - update
// deletar elemento - destroy

import { v4 as uuidv4 } from 'uuid'

let userAddress = [];

export function createOne(request, response){
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
};