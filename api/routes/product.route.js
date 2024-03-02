import express from "express"
import { add } from "../controllers/product.controller.js"

const router = express.Router()
router.get('/add-product', add)