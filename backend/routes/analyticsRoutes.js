import express from "express";
import { getAnalytics, createAnalytics } from "../controllers/analyticsController.js";
const router = express.Router();
router.get("/", getAnalytics);
router.post("/", createAnalytics);
export default router;
