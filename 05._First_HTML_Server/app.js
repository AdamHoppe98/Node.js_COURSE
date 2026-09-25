import express from 'express';

const app = express();
app.use(express.json())
app.use(express.static('public'));


import fruitPackage from './util/fruitsUtilESModule.js'
console.log(fruitPackage.slogan, fruitPackage.fruits);



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/frontpage/index.html');
});

app.get('/fruits', (req, res) => {
    res.sendFile(__dirname + '/public/fruits/fruits.html');
});


app.listen(8080, error => {
        if (error) {
            console.log(error);
            return
        }
        console.log("Server is running on port", 8080)
});

let counter = 0;
app.get('/api/counter', (req, res) => {
    res.send({ data: ++counter })
})