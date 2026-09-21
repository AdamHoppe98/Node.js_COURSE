const express = require("express");

const app = express();

app.use(express.json());

// console.log(new Date().getMonth())
// utc

// console.log(Date())
// local time CET

// console.log(Date.now());
// unix epoch time
// secons since jan. 1st 1970

// task create a route that serves /months which returns the current month
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'
    ,'August', 'September', 'Oktober', 'November', 'December'];

app.get('/months/v1', (req, res) => {
    res.send({ data: months[new Date().getMonth] });
});

app.get('/months/v2', (req, res) => {
    const currentMounth = new Date().toLocaleDateString('en-dk', { month: 'long' });
    res.send({ data: currentMounth })
});


// task create a route that serves /days which returns the current day

app.get('/days', (req, res) => {
    const currentDay = new Date().toLocaleDateString('en-uk', {weekday: 'long'});
    res.send({ data: currentDay});
});

app.listen(8080, error => {
    if (error) {
        console.log(error);
        return
    }
    console.log("Server is running on port", 8080)
});