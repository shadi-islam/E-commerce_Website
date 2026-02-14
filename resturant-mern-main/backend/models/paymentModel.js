import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
