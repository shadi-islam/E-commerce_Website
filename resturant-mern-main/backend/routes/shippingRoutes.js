import express from "express";
import { getShipping, createShipping } from "../controllers/shippingController.js";
const router = express.Router();
router.get("/", getShipping);
router.post("/", createShipping);
export default router;
