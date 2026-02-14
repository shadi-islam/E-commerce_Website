import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Address || mongoose.model("Address", AddressSchema);
