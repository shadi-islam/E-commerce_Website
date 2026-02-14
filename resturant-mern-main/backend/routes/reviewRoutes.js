import express from "express";
import { getReview, createReview } from "../controllers/reviewController.js";
const router = express.Router();
router.get("/", getReview);
router.post("/", createReview);
export default router;
