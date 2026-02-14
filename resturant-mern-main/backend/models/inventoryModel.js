import mongoose from "mongoose";

const InventorySchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Inventory || mongoose.model("Inventory", InventorySchema);
