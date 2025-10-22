// src/pages/Reservar.tsx
import BookingForm from '../components/BookingForm';

export default function Reservar() {
  return (
    <main className='min-h-screen bg-gray-50'>
      <section className='py-12 text-center'>
        <h1 className='text-4xl font-bold mb-4'>Reserve sua estadia</h1>
        <p className='text-gray-600 mb-8'>
          Escolha as datas e finalize o pagamento com segurança.
        </p>
        <BookingForm />
      </section>
    </main>
  );
}
