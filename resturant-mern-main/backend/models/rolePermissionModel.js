import mongoose from "mongoose";

const RolepermissionSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Rolepermission || mongoose.model("Rolepermission", RolepermissionSchema);
