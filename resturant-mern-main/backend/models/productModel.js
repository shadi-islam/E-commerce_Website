import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  price: { type: Number, required: true },
  images: [String],
  category: String,
  stock: { type: Number, default: 0 },
  rating: { type: Number, default: 0 }
}, { timestamps: true });
export default mongoose.models.Product || mongoose.model("Product", productSchema);
