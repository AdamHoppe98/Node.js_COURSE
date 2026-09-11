const express = require('express');

const app = express();
const animals = [
    { name: "Parrot", age: 34, id: 1 },
    { name: "Pelican", age: 20, id: 2 }
]

app.get('/animals', (req, res) => {
    res.send({ data: animals });
})

app.get('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);
    if (!foundAnimal) {
        return res.status(404).send({ data: `No animal found by id: ${providedId}` })
    }
    res.send({ data: foundAnimal });


})



app.listen(8080);