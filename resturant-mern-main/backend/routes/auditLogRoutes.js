import express from "express";
import { getAuditlog, createAuditlog } from "../controllers/auditLogController.js";
const router = express.Router();
router.get("/", getAuditlog);
router.post("/", createAuditlog);
export default router;
