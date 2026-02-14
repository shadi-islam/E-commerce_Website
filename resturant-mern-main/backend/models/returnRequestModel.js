import mongoose from "mongoose";

const ReturnrequestSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Returnrequest || mongoose.model("Returnrequest", ReturnrequestSchema);
