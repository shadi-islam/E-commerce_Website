import express from "express";
import { getCheckout, createCheckout } from "../controllers/checkoutController.js";
const router = express.Router();
router.get("/", getCheckout);
router.post("/", createCheckout);
export default router;
