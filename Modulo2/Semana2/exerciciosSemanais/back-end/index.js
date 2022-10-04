const pizzas = [
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
];

const express = require('express');
const app = express();

app.get('/pizzas', (response) => {
    response.json()
})

app.listen(3333, () => {
    console.log("Servidor online!");
});