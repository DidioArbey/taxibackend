import { TaxitModel } from "../models/ProductModels.js";

export const getTaxis = async (req,res)=>{
    try {
        const Taxis = await TaxitModel.find()
        res.status(200).json(Taxis)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const getTaxi = async (req,res)=>{
    try {
        const {id} = req.params
        const Taxi = await TaxitModel.findById(id)
        if(!Taxi){
            return res.status(404).json(`el viaje con id: ${id} no se pudo encontrar`)
        }
        res.status(200).json(Taxi)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const cretaeTaxi = async (req,res)=>{
    try {
        const Taxi = await TaxitModel.create(req.body)
        res.status(201).json(Taxi)
    } catch (error) {
        res.status(500).json({message:"error al crear el Viaje"})
    }
}

export const updateTaxi = async (req,res)=>{
    try {
        const {id} = req.params
        const Taxi = await TaxitModel.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new:true}
        )
        res.status(200).json(Taxi)
    } catch (error) {
        res.status(500).json({message:"error al actualizar el Viaje"})
    }
}

export const deletTaxi = async (req,res)=>{
    try {
        const {id} = req.params
        const Taxi = await TaxitModel.findByIdAndDelete(id)
        if(!Taxi){
            return res.status(404).json(`el Viaje con id: ${id} no se pudo encontrar`)
        }
        res.status(200).json("Viaje eliminado exitosamente")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}