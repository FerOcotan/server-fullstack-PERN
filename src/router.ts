
import { Router } from "express"
import { body, check } from "express-validator";
import createProduct from "./handlers/product";

const router = Router()

// Define a route for the root URL
router.get("/", (req, res) => {
    // Send a "Hello World" response
    res.json("desde get")
})

router.post(
    "/",
    [
        check("name").notEmpty().withMessage("Name is required"),
        check("price").notEmpty().isNumeric().withMessage("Price must be a positive number"),
    ],
    createProduct
);

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