import express  from 'express';
import {getTaxis, getTaxi, cretaeTaxi, updateTaxi, deletTaxi } from '../controllers/ProductController.js';

const router = express.Router()

// router.get("/", getProducts)
// router.get("/:id", getProduct)
// router.put("/:id",updateProduct)
// router.post("/", cretaeProduct)
// router.delete("/:id", deletProduct)
//forma 2 de las rutas
router.route("/").get(getTaxis).post(cretaeTaxi)
router.route("/:id").get(getTaxi).put(updateTaxi).delete(deletTaxi)

export default router