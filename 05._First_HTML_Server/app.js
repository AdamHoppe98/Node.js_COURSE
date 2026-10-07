import express from 'express';

const app = express();
app.use(express.json())
app.use(express.static('public'));


import path from 'path';



import fruitPackage from './util/fruitsUtilESModule.js'
import { AsyncLocalStorage } from 'async_hooks';
console.log(fruitPackage.slogan, fruitPackage.fruits);

console.log(path.resolve());

// route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/index.html') );
});

app.get('/fruits', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/index.html'));
});

app.get('/redirection', (req, res) => {
    res.sendFile(path.resolve('public/redirection/redirection.html'))
})




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