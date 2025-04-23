
import { Request, Response } from "express";
import colors from "colors"
import Product from "../models/Product.model";
import { check,validationResult } from "express-validator";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const products = await Product.findAll({
            order: [['price', 'DESC']],
        });
        res.json({ data: products });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);

        if (!product) {
            res.status(404).json({
                error: 'Producto No Encontrado',
            });
            return;
        }

        res.json({ data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener producto' });
    }
};

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            res.status(404).json({
                error: 'Producto No Encontrado',
            });
            return;
        }

        // Actualizar el producto
        await product.update(req.body);
        await product.save();

        res.json({ data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar producto' });
    }
};

export const updateAvailability = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            res.status(404).json({
                error: 'Producto No Encontrado',
            });
            return; // No retornes el Response, solo termina la función
        }

        // Actualizar disponibilidad
        product.availability = !product.dataValues.availability;
        await product.save();

        res.json({ data: product });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al actualizar disponibilidad' });
    }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const product = await Product.findByPk(id);

        if (!product) {
            res.status(404).json({
                error: 'Producto No Encontrado',
            });
            return; // No retornes el Response, solo termina la función
        }

        await product.destroy();
        res.json({ data: 'Producto Eliminado' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al eliminar producto' });
    }
};
