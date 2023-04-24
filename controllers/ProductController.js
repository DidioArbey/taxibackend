import { ProductModel } from "../models/ProductModels.js";

export const getProducts = async (req,res)=>{
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ProductModel.findById(id)
        if(!product){
            return res.status(404).json(`el producto con id: ${id} no se pudo encontrar`)
        }
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const cretaeProduct = async (req,res)=>{
    try {
        const product = await ProductModel.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({message:"error al crear el producto"})
    }
}

export const updateProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ProductModel.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new:true}
        )
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:"error al actualizar el producto"})
    }
}

export const deletProduct = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ProductModel.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json(`el producto con id: ${id} no se pudo encontrar`)
        }
        res.status(200).json("producto eliminado exitosamente")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}