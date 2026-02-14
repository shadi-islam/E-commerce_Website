import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Menu || mongoose.model("Menu", MenuSchema);
