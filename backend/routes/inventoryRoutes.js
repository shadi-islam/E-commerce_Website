import express from "express";
import { getInventory, createInventory } from "../controllers/inventoryController.js";
const router = express.Router();
router.get("/", getInventory);
router.post("/", createInventory);
export default router;
