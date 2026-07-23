import express from "express";
import dotenv from "dotenv";
import proxy from "express-http-proxy"
dotenv.config();
import cors from "cors";
import cookieParser from "cookie-parser";
const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
app.use(cookieParser())


app.use("/auth", proxy(process.env.AUTH_SERVICES as string))

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World!" });
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})