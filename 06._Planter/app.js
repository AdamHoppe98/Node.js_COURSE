// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config'; // caller /config fil i dotenv import
console.log(process.env.SECRET_VALUE);

import express from 'express'
const app = express()

app.use(express.static('public'))

app.use(express.urlencoded());

// short-circuit operator
// console.log(undefined || 0 || "" || 8080 || true);

// console.log(false && 8080 && null);
// console.log("" ?? 8080);
const PORT = process.env.PORT ?? 8080;

import pagesRouter from './routers/pagesRouter.js';
app.use(pagesRouter);

import plantsRouter from './routers/plantsRouter.js';
app.use(plantsRouter);

import contactRouter from './routers/contactRouter.js';
app.use(contactRouter);

const server = app.listen(PORT, error => {
    if (error) {
        console.log("error starting the server", error)
        return
    }

    console.log('Server is running on port', server.address().port)
})
