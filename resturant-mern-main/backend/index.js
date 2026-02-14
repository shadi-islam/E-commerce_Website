import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import routes from "./routes/index.js";

dotenv.config();
const app = express();
connectDB();
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());
app.use(morgan("dev"));
app.get("/api/health", (_, res) => res.json({ status: "ok" }));
app.use("/api", routes);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on ${port}`));
