import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import clientRouter from "./routes/client.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
  origin: [
    'https://mern-auth-4-ui.vercel.app',
    'http://localhost:5173'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use("/ping", (req, res) => {
  res.send("PONG");  
});

app.use("/api/clients", clientRouter)

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
