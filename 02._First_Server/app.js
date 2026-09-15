
const express = require('express');

// console.log(express); logs the library functions
// declares the variable app and assigns its value to express();
const app = express(); // instancieret
app.use(express.json());


// const app = require('express')(); //importere og instancere, da importen er en function, som kan instancieres.

// console.log(app);
//task: Create a route for endpoint / that returns a greeting

// endpoint // callback function
app.get('/', (req, res) => {
    res.sendFile(__dirname   + "/index.html");
});

app.get('/xss', (req, res) => {
    res.sendFile(__dirname + '/xss.html')
})

// -- this is a route handler, it takes a path and a callback function 
// originally this is a json object
// express converts it to json and sends it to the client


app.get('/blablabla', (req, res) => {
    res.send({ data: "2nd They talk a lot but nothing is said" });
});

app.get('/myTestEndpoint', (req, res) => {
    res.send({ data: "Greetings, you succeeded reaching my test endpoint" });
});

// callback function: a function reference provided as an argument with the possibility, 
// perhaps (of being called later). The function is not called immediately,
//  but rather passed as a reference to be invoked at a later time. In this case, the callback function is executed when a GET request is made to the specified route.

// functions as first-class citizens 
// = I can do with functions what i can do with other data types

// these operations typically include assigning functions to variables, 
// passing them as arguments to other functions, and returning them from functions.

// the whole thing = route

// How can i send data in a GET request
// path variable: /users/1
// query paramters: ?userId=1&likespProgramming=true

// create a /beers route
app.get('/beers/:beerType/:amount', (req, res) => {
    console.log(req.params);
    res.send({ data: `you ordered ${req.params.amount} of ${req.params.beerType}` });
})

// // /bars/forgottenItems?myGirlfriend=mygirlfriend&myMom=myMom&myHorn=myHorn
// app.get('/bars/:forgottenItems', (req, res) => {
//     res.send({ data: `You forgot your ${req.query.forgottenItem} at the bar`});

// });
// /bars/forgottenItems?wallet=200&keys=my house&my_baby=Sam
app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.query);
    res.send({ data: req.query });
});


app.post('/dictators', (req, res) => {
    console.log(req.body);
    res.send({ data: req.body });
});

// task create a patch for dictators

app.patch('/dictators/:name', (req, res) => {
    res.send({ data: `You have turned the great dictator - ${req.params.name} benevolent for life` })
})



// makes the app liste on port 8080
app.listen(8080);