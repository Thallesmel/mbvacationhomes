import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full bg-white shadow-md fixed top-5 z-50'>
      <div className='flex items-center justify-between px-6 py-4 max-w-6xl mx-auto'>
        <Link to='/' className='text-2xl font-bold text-gray-800'>
          MB Vacation
        </Link>
        <button
          className='md:hidden font-bold text-white'
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <ul
          className={`md:flex md:items-center md:space-x-6 absolute md:static bg-white w-full md:w-auto left-0 top-16 md:top-auto shadow-md md:shadow-none transition-all ${
            open ? 'block' : 'hidden'
          }`}
        >
          <li>
            <Link
              to='/'
              className='block px-6 py-2 text-gray-500 hover:text-gray-800'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to='/about'
              className='block px-6 py-2 text-gray-500 hover:text-gray-800'
            >
              Sobre
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className='block px-6 py-2 text-gray-500 hover:text-gray-800'
            >
              Contato
            </Link>
          </li>
          <li>
            <Link
              to='/reserva'
              className='block px-6 py-2 text-gray-500 hover:text-gray-800'
            >
              Reserva
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
