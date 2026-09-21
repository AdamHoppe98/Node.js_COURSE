const express = require("express")
const app = express();

app.use(express.json());


const cities = [
    { name: "New York", timeZone: -6, id: 1 },
    { name: "Tokyo", timeZone:  7, id: 2 },
    { name: "London", timeZone: -1, id: 3 },
    { name: "Sydney", timeZone:  8, id: 4 },
    { name: "Rio de Janeiro", timeZone: -5, id: 5 },
]

let nextId = 6;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/api/time', (req, res) => {

    const now = new Date();
    res.send({ data: {localString: now.toLocaleTimeString('da-DK'), iso: now.toISOString()} })
})

app.get('/api/cities', (req, res) => {
    res.send({ data: cities });
});

app.post('/api/cities', (req, res) => {
    const providedCity = req.body;
    providedCity.id = nextId++;

    cities.push(providedCity);
    res.status(204).send({ data: providedCity })
});





app.listen(8080, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", 8080)

})