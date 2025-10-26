import { Link } from "react-router-dom";

export default function ReserveButton() {
  return (
    <div className='flex flex-wrap gap-4 justify-center mt-6'>
      <Link
        to='/reservar'
        className='px-6 py-3 rounded-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 hover:shadow-lg transition duration-300 inline-block text-center'
      >
        Reservar Agora
      </Link>
    </div>
  );
}
