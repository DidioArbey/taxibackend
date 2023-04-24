import mongoose from "mongoose";

//crear el shema
const productShema = new mongoose.Schema(
    {
        description:{
            type:String,
            require:[true,"Completa el campo"]
        },
        stock:{
            type:Number,
            require:[true,"Completa el campo"]
        },
        price:{
            type:Number,
            require:[true,"Completa el campo"]
        },
    },
    {
        timestamps:true,
        versionKey:false
    }
);

//crear un modelo aprtir del shema
export const ProductModel = mongoose.model("Product",productShema)