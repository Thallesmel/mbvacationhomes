import { useState } from 'react';
import ReserveButton from '../Buttons/ReserveButton';
import GalleryButton from '../Buttons/GalleryButton';

const images = [
  import.meta.glob('../../assets/images/poolBar/*.jpg', {
    eager: true,
    as: 'url',
  }),
  import.meta.glob('../../assets/images/Rooms/*.jpg', {
    eager: true,
    as: 'url',
  }),
];

const allImages = Object.values(images).flatMap(Object.values).slice(0, 6);

export default function GalleryPreview() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className='py-12 bg-white text-center'>
      <h2 className='text-3xl font-bold mb-6 pb-20'>Galeria</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 px-4 md:px-12'>
        {allImages.map((src, index) => (
          <img
            key={src as string}
            src={src as string}
            alt={`Foto ${index + 1}`}
            loading='lazy'
            onLoad={() => setLoaded(true)}
            className={`rounded-2xl object-cover aspect-square transition-transform duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            } hover:scale-105`}
          />
        ))}
      </div>
      <div className='mt-8 flex flex-col sm:flex-row gap-4 justify-center align-middle w-full'>
        <GalleryButton />
        <ReserveButton />
      </div>
    </section>
  );
}
