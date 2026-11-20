import { Router } from 'express'

const router = Router();


router.get("/banhmi/order", (req, res) => {
    console.log("Banh mi amount:", req.session.banhmiAmounter)
    if (!req.session.banhmiAmounter) {
        return res.send({ data: "All out of banh mi" })
    }
    req.session.banhmiAmounter -= 1;
    res.send({ data: "Gobble up" })
});

router.get("/banhmi/restock", (req, res) => {
    req.session.banhmiAmounter = 5;

    res.send({ data: "restock" })

});

router.get("/banhmi/mobsterrun", (req, res) => {
    // req.session.banhmiAmount = undefined;
    req.session.destroy(() => {
        res.send({ data: "The store is close forever "})
    })

})


export default router;