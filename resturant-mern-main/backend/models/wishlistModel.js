import mongoose from "mongoose";

const WishlistSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Wishlist || mongoose.model("Wishlist", WishlistSchema);
