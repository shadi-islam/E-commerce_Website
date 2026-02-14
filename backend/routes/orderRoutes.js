import express from "express";
import { listMyOrders, placeOrder } from "../controllers/orderController.js";
import { protect } from "../middlewares/authMiddlewares.js";
const router = express.Router();
router.get("/my", protect, listMyOrders);
router.post("/", protect, placeOrder);
export default router;
