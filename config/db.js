import mongoose from "mongoose";

mongoose.set("strictQuery",false)

export const conectDB = (uri)=>{
    return mongoose.connect(uri)
}