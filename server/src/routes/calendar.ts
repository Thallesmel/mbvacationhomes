import express from "express";
import ical from "node-ical";
const router = express.Router();

const SOURCES = [
  process.env.ICal_AIRBNB || "https://www.airbnb.com/calendar/ical/1295831330345776010.ics?s=0a8d48a286f3d1088677be6bff129a38",
  process.env.ICal_BOOKING || "https://ical.booking.com/v1/export?t=41ce29ce-adc8-48fe-94a6-8ff754d25733"
].filter(Boolean);

router.get("/", async (_, res) => {
  try {
    const events: any[] = [];
    for (const url of SOURCES) {
      const data = await ical.async.fromURL(url);
      Object.values(data).forEach((ev: any) => {
        if (ev.type === "VEVENT") {
          events.push({ title: ev.summary, start: ev.start, end: ev.end });
        }
      });
    }
    return res.json(events);
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: "ical_error" });
  }
});

export default router;
