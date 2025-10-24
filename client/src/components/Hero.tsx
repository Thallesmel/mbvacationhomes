import RatingBadge from './RatingBadge';
import heroVideo from '../assets/videos/video-casa.mp4';
import heroPoster from '../assets/images/PoolBar/piscina-home.jpg';

export default function Hero() {
  return (
    <section className='relative h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden'>
      <video
        className='absolute inset-0 w-full h-full object-cover -z-10'
        autoPlay
        muted
        loop
        playsInline
        preload='metadata'
        poster={heroPoster}
      >
        <source src={heroVideo} type='video/mp4' />
        Seu navegador não suporta o vídeo.
      </video>

      <div className='absolute inset-0 bg-black/40 -z-10'></div>

      <div className='px-4'>
        <h1 className='text-4xl md:text-6xl font-bold mb-4'>
          Sua viagem ao Paraíso
        </h1>
        <p className='text-lg md:text-xl text-white/90 mb-8'>
          Explore cada detalhe de Maragogi com a melhor experiência.
        </p>

        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='/reservar'
            className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 hover:border-gray-900 transition font-medium'
          >
            Reservar Agora
          </a>
          <a
            href='https://wa.me/5581999999999'
            target='_blank'
            rel='noopener noreferrer'
            className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-gray-900 hover:border-gray-900 transition font-medium'
          >
            Fale Conosco
          </a>
        </div>

        <div className='mt-80'>
          <RatingBadge />
        </div>
      </div>
    </section>
  );
}
