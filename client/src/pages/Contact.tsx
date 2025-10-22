export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-linear-to-b from-blue-50 to-white'>
      <h1 className='text-4xl font-bold text-blue-600 mb-4'>
        Bem-vindo à MB Vacation Homes
      </h1>
      <p className='text-gray-600 text-center max-w-xl'>
        Contact Route. Explore as propriedades, veja disponibilidade e reserve
        com segurança.
      </p>
      <a
        href='/reserva'
        className='mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all'
      >
        Fazer Reserva
      </a>
    </div>
  );
}
