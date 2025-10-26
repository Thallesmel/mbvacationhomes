import GalleryButton from '../Buttons/GalleryButton';
import ReserveButton from '../Buttons/ReserveButton';

const gallerySections = [
  {
    title: 'Piscina',
    images: [
      'https://imagedelivery.net/abcd1234/piscina1/public',
      'https://imagedelivery.net/abcd1234/piscina2/public',
    ],
  },
  {
    title: 'Sala',
    images: [
      'https://imagedelivery.net/abcd1234/sala1/public',
      'https://imagedelivery.net/abcd1234/sala2/public',
    ],
  },
];

export default function GalleryFull() {
  return (
    <section className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4'>
        {gallerySections.map((section) => (
          <div key={section.title} className='mb-12'>
            <h3 className='text-2xl font-semibold mb-6'>{section.title}</h3>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
              {section.images.map((src, index) => (
                <img
                  key={src}
                  src={`${src}?width=800&quality=80&format=webp`} //Cloudflare
                  alt={`${section.title} ${index + 1}`}
                  loading='lazy'
                  className='rounded-2xl shadow hover:scale-105 transition-transform'
                />
              ))}
            </div>
          </div>
        ))}
        <div className='flex justify-center mt-10'>
          <GalleryButton />
          <ReserveButton />
        </div>
      </div>
    </section>
  );
}
