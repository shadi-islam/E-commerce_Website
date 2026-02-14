import mongoose from "mongoose";

const BrandingSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Branding || mongoose.model("Branding", BrandingSchema);
