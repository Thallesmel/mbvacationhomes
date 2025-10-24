// src/pages/Reservar.tsx
import BookingForm from "../components/BookingForm";
import { BookingCalendar } from "../components/Calendar/BookingCalendar";

export default function Reservar() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 flex flex-col items-center gap-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
        Reserve sua Estadia
      </h1>
      <section className="grid lg:grid-cols-2 gap-10 w-full max-w-6xl">
        {/* Formulário */}
        <BookingForm />
        {/* Calendário */}
        <BookingCalendar />
      </section>
    </main>
  );
}
