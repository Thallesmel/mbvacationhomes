// src/pages/Home.tsx
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GalleryPreview from '../components/Gallery/GalleryPreview';


export default function Home() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <Hero />  
      <BookingForm />
      <GalleryPreview />
      <Footer />
    </div>
  );
}
