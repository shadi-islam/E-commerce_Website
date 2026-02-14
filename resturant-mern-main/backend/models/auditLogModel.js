import mongoose from "mongoose";

const AuditlogSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Auditlog || mongoose.model("Auditlog", AuditlogSchema);
