import { Link } from "react-router-dom";

export default function GalleryButton() {
  return (
    <div className='flex flex-wrap gap-4 justify-center mt-6'>
      <Link
        to='/reservar'
        className='px-6 py-3 rounded-full bg-gray-600 text-white font-semibold shadow-md hover:bg-gray-900 hover:shadow-lg transition duration-300 inline-block text-center'
      >
        Ver Galeria Completa
      </Link>
    </div>
  );
}
