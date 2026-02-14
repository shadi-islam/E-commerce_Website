import mongoose from "mongoose";

const RefundSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Refund || mongoose.model("Refund", RefundSchema);
