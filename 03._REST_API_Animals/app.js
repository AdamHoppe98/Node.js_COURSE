const express = require('express');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));
const animals = [
    { name: "Parrot", age: 34, id: 1 },
    { name: "Pelican", age: 20, id: 2 },
    { name: "Tiger", age: 55, id: 3 },
    { name: "Panda", age: 4, id: 4 }
]

let nextId = 5;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

app.get('/animals', (req, res) => {
    res.send({ data: animals });
})

app.get('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundAnimal = animals.find((animal) => animal.id === providedId);
    if (isNaN(providedId)){
        return res.status(400).send({ data: `the parameter must be a number` })
    }
    if (!foundAnimal) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId}` })
    }
    res.send({ data: foundAnimal });
});

app.post('/animals', (req, res) => {
    

    const providedAnimal = req.body;
    // const newId = animals[animals.length -1 ].id + 1;
    providedAnimal.id = nextId++;

    // const newAnimal = { id: newId, name: req.body.name, age: req.body.age }


    animals.push(newAnimal);

    res.status(201).send({data: newAnimal});
})

app.put('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundIndex = animals.findIndex(item => item.id === providedId);

    if (isNaN(providedId)){
        return res.status(400).send({ data: `the parameter must be a number` })
    }
    if (foundIndex === -1) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId}` })
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
    const foundAnimalIndex = animals.findIndex(animal => animal.id === providedId);
    
    if (!foundAnimalIndex === -1) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId}` });
    }
    
    const providedAnimal = req.body;
    const foundAnimal = animals[foundAnimalIndex];

    const animalToCreate = { ...foundAnimal, ...providedAnimal, id: providedId }
    
    animals[foundAnimalIndex] = animalToCreate
   
    res.send({ data: animalToCreate });
});

app.delete('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id);
    const foundIndex = animals.findIndex(animal => animal.id === providedId);

    if (foundIndex === -1) {
        return res.status(404).send({ errorMessage: `No animal found by id ${providedId}` })
    }

    animals.splice(foundIndex, 1);
    res.status(204).send();
});



app.listen(8080, (error) => {
    if (error) {
        console.log("Error running the server", error)
        return;
    }
    console.log("server is running on port", 8080);
});