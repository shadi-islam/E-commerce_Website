import express from "express";
import { addToCart, getCart } from "../controllers/cartController.js";
import { protect } from "../middlewares/authMiddlewares.js";
const router = express.Router();
router.get("/", protect, getCart);
router.post("/items", protect, addToCart);
export default router;
