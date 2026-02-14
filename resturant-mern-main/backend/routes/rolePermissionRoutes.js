import express from "express";
import { getRolepermission, createRolepermission } from "../controllers/rolePermissionController.js";
const router = express.Router();
router.get("/", getRolepermission);
router.post("/", createRolepermission);
export default router;
