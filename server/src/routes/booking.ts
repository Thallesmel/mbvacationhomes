import express from "express";
import prisma from "../prisma.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const { userId, start, end, property } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { userId, start: new Date(start), end: new Date(end), property }
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "db_error" });
  }
});

router.get("/", async (req, res) => {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: "desc" }});
  res.json(bookings);
});

export default router;
