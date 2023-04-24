import express  from 'express';
import {getProducts, getProduct, cretaeProduct, updateProduct, deletProduct } from '../controllers/ProductController.js';

const router = express.Router()

// router.get("/", getProducts)
// router.get("/:id", getProduct)
// router.put("/:id",updateProduct)
// router.post("/", cretaeProduct)
// router.delete("/:id", deletProduct)
//forma 2 de las rutas
router.route("/").get(getProducts).post(cretaeProduct)
router.route("/:id").get(getProduct).put(updateProduct).delete(deletProduct)

export default router