export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className='bg-gray-50 text-gray-700'>
      <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div>
          <h4 className='font-bold mb-2'>MB Vacation Homes</h4>
          <p className='text-sm text-gray-600'>
            Casas de luxo em Maragogi — contato@mbvacationhomes.com.br
          </p>
        </div>
        <div className='flex gap-4'>
          <ul className='space-y-2'>
            <li>
              <a href='#sobre' className='hover:text-emerald-600'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#contato' className='hover:text-emerald-600'>
                Contato
              </a>
            </li>
            <li>
              <a href='#termos' className='hover:text-emerald-600'>
                Termos
              </a>
            </li>
          </ul>
        </div>
        <div className='text-sm text-gray-600'>
          © {year} MB Vacation Homes. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
