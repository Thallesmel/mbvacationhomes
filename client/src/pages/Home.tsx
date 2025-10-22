// src/pages/Home.tsx
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />
      <BookingForm />
      <Gallery />
      <Footer />
    </div>
  );
}
