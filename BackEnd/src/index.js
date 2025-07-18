import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import callRoutes from "./routes/callRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import translationRoutes from "./routes/translateRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;

app.use("api/auth", authRoutes);
app.use("api/call", callRoutes);
app.use("api/translation", translationRoutes);
app.use("api/users", userRoutes);

app.listen(PORT, () => {
	console.log("Server Is Running On Port: " + PORT);
	connectDB();
});
