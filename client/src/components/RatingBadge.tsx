export default function RatingBadge() {
  return (
    <div className='inline-block bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-lg'>
      <div className='flex flex-col items-center'>
        <div className='flex mb-1'>
          {[...new Array(5)].map((_, i) => (
            <svg
              key={i}
              className='w-5 h-5 text-yellow-400'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95h4.149c.969 0 1.372 1.24.588 1.81l-3.36 2.443 1.287 3.951c.3.921-.755 1.688-1.54 1.118L10 13.348l-3.36 2.443c-.785.57-1.84-.197-1.54-1.118l1.287-3.951-3.36-2.443c-.784-.57-.38-1.81.588-1.81h4.149l1.285-3.95z' />
            </svg>
          ))}
        </div>
        <p className='text-2xl font-bold'>5.0</p>
        <p className='text-sm text-gray-500'>
          Guest favorite — avaliações e confiabilidade
        </p>
      </div>
    </div>
  );
}
