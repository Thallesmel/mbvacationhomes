export default function BookingForm() {
  return (
    <section className='bg-black py-12 px-6'>
      <form className='max-w-xl mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4'>
        <div>
          <label htmlFor='fullName' className='block text-gray-700 mb-1'>
            Nome completo
          </label>
          <input
            id='fullName'
            type='text'
            className='w-full border-gray-300 rounded-lg'
            required
          />
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div>
            <label htmlFor='checkIn' className='block text-gray-700 mb-1'>
              Check-in
            </label>
            <input
              id='checkIn'
              type='date'
              className='w-full border-gray-300 rounded-lg'
              required
            />
          </div>
          <div>
            <label htmlFor='checkOut' className='block text-gray-700 mb-1'>
              Check-out
            </label>
            <input
              id='checkOut'
              type='date'
              className='w-full border-gray-300 rounded-lg'
              required
            />
          </div>
        </div>
        <button className='bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg w-full'>
          Verificar disponibilidade
        </button>
      </form>
    </section>
  );
}
