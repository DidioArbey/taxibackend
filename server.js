import express, { urlencoded } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { conectDB } from './config/db.js'
import router from './routes/routes.js'

const app = express()

dotenv.config()
app.use(cors())
app.use(express.json())
app.use("/api/products",router)

app.use(urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.send("Hola mundo desde le backend")
})

const PORT  = process.env.PORT
const MONGO_URI = process.env.MONGO_URI

const start =  async()=>{
    try {
        await conectDB(MONGO_URI)
        console.log("Base de datos Mongo DB conectado con exito")
        app.listen(PORT, ()=>{
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start()