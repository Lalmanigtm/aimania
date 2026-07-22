import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/auth.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", router)

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World! from auth service" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
