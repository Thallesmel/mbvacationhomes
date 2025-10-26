import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

import calendarRouter from "./routes/calendar.js"; // .js ok com ts-node-dev transpile
import authRouter from "./routes/auth.js";
import bookingRouter from "./routes/booking.js";

const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/ical", calendarRouter);
app.use("/auth", authRouter);
app.use("/bookings", bookingRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server listening on http://localhost:${PORT}`));
