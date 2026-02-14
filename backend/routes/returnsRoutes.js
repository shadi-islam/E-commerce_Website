import express from "express";
import { getReturns, createReturns } from "../controllers/returnsController.js";
const router = express.Router();
router.get("/", getReturns);
router.post("/", createReturns);
export default router;
