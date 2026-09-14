const express = require('express');

const app = express();
app.use(express.json());

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
});

app.post('/animals', (req, res) => {
    const newId = animals[animals.length -1 ].id + 1;
    const newAnimal = { id: newID, name: req.body.name }

    animals.push(newAnimal);

    res.status(201).send(newAnimal);
})

app.put('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundIndex = animals.findIndex(item => item.id === providedId);

    if (foundIndex === -1) {
        return res.status(404).send({ data: `No animal found by id: ${providedId}` })
    }
    const { name, age } = req.body;
    if (typeof name !== 'string' || typeof age !== 'number') {
        return res.status(400).send({ data: 'name and age are required' });
    }
    const updatedAnimal = { name, age, id: providedId };
    animals[foundIndex] = updatedAnimal;

    res.send({ data: updatedAnimal });
});

app.patch('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find(animal => animal.id === providedId);

    if (!foundAnimal) {
        return res.status(404).send({ data: `No animal found by id: ${providedId}` });
    }

    const { name, age } = req.body;
    if (name !== undefined) {
        foundAnimal.name = name;
    }

    if (age !== undefined) {
        foundAnimal.age = age;
    }

    res.send({ data: foundAnimal });
});

app.delete('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundIndex = animals.findIndex(animal => animal.id === providedId);

    if (foundIndex === -1) {
        return res.status(404).send({ data: "Animal not found" })
    }

    animals.splice(foundIndex, 1);
    res.status(204).send();
});



app.listen(8080);