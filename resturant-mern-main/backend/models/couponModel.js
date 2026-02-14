import mongoose from "mongoose";

const CouponSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Coupon || mongoose.model("Coupon", CouponSchema);
