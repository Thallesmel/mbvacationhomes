import { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import iCalendarPlugin from "@fullcalendar/icalendar";
import { CalendarHeader } from "./CalendarHeader";
import type { BookingEvent } from "./types";

export function BookingCalendar() {
  const [events, setEvents] = useState<BookingEvent[]>([]);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
  fetch("http://localhost:5000/ical")
    .then((res) => res.json())
    .then(setEvents)
    .catch(console.error);
}, []);


  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <CalendarHeader selectedDate={selectedDate} />
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, iCalendarPlugin]}
        initialView="dayGridMonth"
        locale="pt-br"
        selectable
        dateClick={handleDateClick}
        events={events}
        height="auto"
        headerToolbar={false}
        eventColor="#f43f5e"
      />
      {selectedDate && (
        <div className="mt-6 text-center">
          <button
            onClick={() => alert(`Reservar data: ${selectedDate}`)}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Reservar {selectedDate}
          </button>
        </div>
      )}
    </div>
  );
}
