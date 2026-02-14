import express from "express";
import { getPayment, createPayment } from "../controllers/paymentController.js";
const router = express.Router();
router.get("/", getPayment);
router.post("/", createPayment);
export default router;
