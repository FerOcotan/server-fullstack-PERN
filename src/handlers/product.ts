
import { Request, Response } from "express";
import colors from "colors"
import Product from "../models/Product.model";
import { check,validationResult } from "express-validator";

export default async function createProduct(req: Request, res: Response): Promise<void> {
  

    
 
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;

    }


 const product = new Product(req.body);
     await product.save();
    console.log(colors.yellow("Product saved successfully"));
 
    

    // Extract the product data from the request body
    res.json({data: product})
}
