import type { VercelRequest, VercelResponse } from "@vercel/node";
import mongoose from "mongoose";
import app from "../app/app";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.CONNECTION_STRING) {
  throw new Error("Missing CONNECTION_STRING!");
}

// Connect to MongoDB once (singleton)
if (mongoose.connection.readyState === 0) {
  mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("✅ Connected to MongoDB (Vercel)"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
}

// Export the Express app as Vercel serverless function
export default function handler(req: VercelRequest, res: VercelResponse) {
  app(req, res);
}
