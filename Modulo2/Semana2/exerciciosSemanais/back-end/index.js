const pizzas = [
    {
        "id": "1",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "2",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "3",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "4",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "5",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "6",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "7",
        "name": "",
        "description": "",
        "price": "",
        "ingredients": "",

    },
    {
        "id": "8",
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