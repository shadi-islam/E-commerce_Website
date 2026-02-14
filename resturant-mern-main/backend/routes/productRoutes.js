import express from "express";
import { createProduct, getProduct, listProducts } from "../controllers/productController.js";
import { adminOnly, protect } from "../middlewares/authMiddlewares.js";
const router = express.Router();
router.get("/", listProducts);
router.get("/:id", getProduct);
router.post("/", protect, adminOnly, createProduct);
export default router;
