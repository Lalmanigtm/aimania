import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/auth", proxy(process.env.AUTH_SERVICES as string))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})