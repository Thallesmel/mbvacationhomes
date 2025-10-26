import type { BookingEvent } from "./types";

export function filterAvailableDates(events: BookingEvent[], date: string): boolean {
  return !events.some((event) => date >= event.start && date <= (event.end || event.start));
}
