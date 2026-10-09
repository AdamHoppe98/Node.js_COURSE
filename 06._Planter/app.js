import express from 'express'
const app = express()
app.use(express.static('public'))

// short-circuit operator
// console.log(undefined || 0 || "" || 8080 || true);

// console.log(false && 8080 && null);
// console.log("" ?? 8080);
const PORT = process.env.PORT ?? 8080;


import { frontpagePage, aboutPage } from './templatingEngine/pages.js';


/// pages -----
app.get('/', (req, res) => {
    res.send(frontpagePage)
    // res.sendFile(path.resolve('public/pages/frontpage/frontpage.html'))
})

app.get('/about', (req, res) => {
    res.send(aboutPage)
});

import { fetchAllPlants, fetchPlant } from './util/fetchPlants.js'

/// api ----

app.get('/api/plants', async (req, res) => {
    res.send({ data: await fetchAllPlants() })
})

app.get('/api/plants/:plantSlug', async (req, res) => {
    res.send({ data: await fetchPlant(req.params.plantSlug) });
})



const server = app.listen(PORT, error => {
    if (error) {
        console.log("error starting the server", error)
        return
    }

    console.log('Server is running on port', server.address().port)
})
