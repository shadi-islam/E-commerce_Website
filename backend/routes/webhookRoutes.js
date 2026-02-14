import express from "express";
import { getWebhook, createWebhook } from "../controllers/webhookController.js";
const router = express.Router();
router.get("/", getWebhook);
router.post("/", createWebhook);
export default router;
