import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import express from "express";
import authRoutes from "./routes/authRoutes.js";

export const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();
connectDB();

app.use("/api/v1/auth", authRoutes);
