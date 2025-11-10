import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ideaRouter from "./routes/ideaRoutes.js";
import authRouter from "./routes/authRoutes.js";
import { errroHandler } from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//connect to MongoDB
connectDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/ideas", ideaRouter);
app.use("/api/auth", authRouter);

//404 Fall Back
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);

  next(error);
});

app.use(errroHandler);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
