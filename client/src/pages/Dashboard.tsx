// src/pages/Dashboard.tsx
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

export default function Dashboard() {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-semibold mb-6">Reservas — Calendário</h2>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Reserva Airbnb', start: '2025-10-22', end: '2025-10-25' },
        ]}
      />
    </section>
  )
}
