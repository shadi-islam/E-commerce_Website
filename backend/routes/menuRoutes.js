import express from "express";
import { getMenu, createMenu } from "../controllers/menuController.js";
const router = express.Router();
router.get("/", getMenu);
router.post("/", createMenu);
export default router;
