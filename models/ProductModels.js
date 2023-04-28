import mongoose from "mongoose";

//crear el shema
const taxiShema = new mongoose.Schema(
    {
        telefono_usuario: {
        type: Number,
        ref: 'Usuario',
        required: [true,"Completa el campo"]
        },
        direccion: {
            type: String,
            required: [true,"Completa el campo"]
        },
        barrio: {
            type: String,
            required: [true,"Completa el campo"]
        },
        observacion: {
            type: String
        },
        movil_taxi: {
            type: String,
        },
        placa_taxi: {
            type: String,
        },
        llego: {
            type: Boolean,
            default: false
        },
        recepcionado: {
            type: Date,
            default: Date.now
        },
        asignado: {
            type: Date
        },
        recogido: {
            type: Date
        },
    },
    {
        timestamps:true,
        versionKey:false
    }

);

//crear un modelo aprtir del shema
export const TaxitModel = mongoose.model("Taxi",taxiShema)