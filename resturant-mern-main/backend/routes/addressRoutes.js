import express from "express";
import { getAddress, createAddress } from "../controllers/addressController.js";
const router = express.Router();
router.get("/", getAddress);
router.post("/", createAddress);
export default router;
