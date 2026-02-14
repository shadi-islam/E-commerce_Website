import express from "express";
import { getRefund, createRefund } from "../controllers/refundController.js";
const router = express.Router();
router.get("/", getRefund);
router.post("/", createRefund);
export default router;
