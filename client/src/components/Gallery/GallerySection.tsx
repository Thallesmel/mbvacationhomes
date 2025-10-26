const images = [
  '../assets/piscina-home.jpg',
  '/images/foto2.jpg',
  '/images/foto3.jpg',
  '/images/foto4.jpg',
];

export default function GallerySection() {
  return (
    <section className='py-12 bg-white'>
      <h2 className='text-3xl text-center font-semibold mb-8'>Galeria</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6'>
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Foto ${i + 1}`}
            className='rounded-2xl shadow-md hover:scale-105 transition'
          />
        ))}
      </div>
    </section>
  );
}
