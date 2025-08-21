import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import errorHandler from "./middlewares/unifiedErrorHandler.js";

dotenv.config();
const app = express();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// API Routes
app.use("/auth", authRoutes);


// Error handler
app.use(errorHandler);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
