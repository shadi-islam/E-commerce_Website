import mongoose from "mongoose";

const ShippingruleSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Shippingrule || mongoose.model("Shippingrule", ShippingruleSchema);
