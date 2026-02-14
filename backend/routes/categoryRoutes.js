import express from "express";
import { getCategory, createCategory } from "../controllers/categoryController.js";
const router = express.Router();
router.get("/", getCategory);
router.post("/", createCategory);
export default router;
