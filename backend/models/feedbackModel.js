import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Feedback || mongoose.model("Feedback", FeedbackSchema);
