import express from 'express'
import path from 'path'
const app = express()
app.use(express.json())

app.use(express.static('public'))

// short-circuit operator
// console.log(undefined || 0 || "" || 8080 || true);

// console.log(false && 8080 && null);
// console.log("" ?? 8080);


const PORT = process.env.PORT ?? 8080;


app.get('/', (req, res) => {
    res.sendFile(path.resolve('public/frontpage/frontpage.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.resolve('public/about/about.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('public/contact/contact.html'))
})


const server = app.listen(PORT, error => {
    if (error) {
        console.log("error starting the server", error)
        return
    }

    console.log('Server is running on port', server.address().port)
})
