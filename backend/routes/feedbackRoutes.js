import express from "express";
import { getFeedback, createFeedback } from "../controllers/feedbackController.js";
const router = express.Router();
router.get("/", getFeedback);
router.post("/", createFeedback);
export default router;
