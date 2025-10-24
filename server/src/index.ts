import express from "express";
import cors from "cors";
import calendarRouter from "./routes/calendar.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ical", calendarRouter);

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));
