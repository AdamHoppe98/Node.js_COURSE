import express from 'express'
const app = express()
app.use(express.json())






const PORT = 8080;

app.listen(PORT, error => {
    if (error) {
        console.log("error starting the server", error)
        return
    }
    console.log('Server is running on port', PORT)
})