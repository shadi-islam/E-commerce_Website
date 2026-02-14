import express from "express";
import { getWishlist, createWishlist } from "../controllers/wishlistController.js";
const router = express.Router();
router.get("/", getWishlist);
router.post("/", createWishlist);
export default router;
