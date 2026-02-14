import express from "express";
import { getCoupon, createCoupon } from "../controllers/couponController.js";
const router = express.Router();
router.get("/", getCoupon);
router.post("/", createCoupon);
export default router;
