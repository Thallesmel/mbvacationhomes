import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
// Configure CORS for specific origins and methods
const corsOptions = {
  origin: ["https://your-allowed-origin.com"], // Replace with your allowed origins
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

const PORT = process.env.PORT || 4000;
const logger = {
  info: (message: string, ...meta: any[]) => console.log(message, ...meta),
  warn: (message: string, ...meta: any[]) => console.warn(message, ...meta),
  error: (message: string, ...meta: any[]) => console.error(message, ...meta),
};

app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
