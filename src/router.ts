
import { Router } from "express"

const router = Router()

// Define a route for the root URL
router.get("/", (req, res) => {
    // Send a "Hello World" response
    res.json("desde get")
})

router.post("/", (req, res) => {
    // Send a "Hello World" response
    res.json("Desde post")
})

router.put("/", (req, res) => {
    // Send a "Hello World" response
    res.json("Desde put")
})


router.patch("/", (req, res) => {
    // Send a "Hello World" response
    res.json("Desde pathito")
})


router.delete("/", (req, res) => {
    // Send a "Hello World" response
    res.json("Desde delete")
})

export default router