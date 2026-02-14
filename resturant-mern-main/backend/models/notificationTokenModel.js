import mongoose from "mongoose";

const NotificationtokenSchema = new mongoose.Schema({ name: String }, { timestamps: true });

export default mongoose.models.Notificationtoken || mongoose.model("Notificationtoken", NotificationtokenSchema);
