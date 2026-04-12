import { motion } from 'framer-motion';
import { Calendar, Sparkles, Heart, Star, Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';
import Header from './components/Header';

// --- LIENS EXTERNES (À REMPLACER PAR LES TIENS) ---
const FRESHA_URL = "https://www.fresha.com/a/ton-salon-dubai"; 
const WHATSAPP_NUMBER = "971501234567"; // Sans le +, juste l'indicatif et le numéro

const services = [
  {
    name: 'Manicure',
    description: 'Complete hand care with premium polish',
    price: 'From 120 AED',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Pedicure',
    description: 'Relaxing foot care with massage',
    price: 'From 150 AED',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Nail Art',
    description: 'Custom designs and unique creations',
    price: 'From 180 AED',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1773808605530-17926a0463e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Gel & Acrylic',
    description: 'Long-lasting extensions and reinforcement',
    price: 'From 200 AED',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1753285311550-154917dab783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    name: 'Spa Treatment',
    description: 'Complete relaxation and wellness experience',
    price: 'From 250 AED',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1696841212541-449ca29397cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1773808605530-17926a0463e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Silver nail art design' },
  { url: 'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Navy and gold nail art' },
  { url: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Black manicure' },
  { url: 'https://images.unsplash.com/photo-1581296679262-bb96b7b7bb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Elegant hands with jewelry' },
  { url: 'https://images.unsplash.com/photo-1672813319961-61a83471e77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'White nail art' },
  { url: 'https://images.unsplash.com/photo-1773808493698-5683196246c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800', alt: 'Black decorated nails' },
];

const testimonials = [
  { name: 'Sarah Al-Mansoori', text: 'An exceptional experience! The nail art is perfect and the atmosphere is incredibly relaxing.', rating: 5 },
  { name: 'Layla Hassan', text: 'The best nail spa in Dubai. Impeccable service and beautiful results.', rating: 5 },
  { name: 'Amira Khalil', text: 'I have been a loyal customer for 2 years. Always satisfied, never disappointed!', rating: 5 },
];

export default function App() {
  
  // Fonction pour ouvrir Fresha dans un nouvel onglet
  const handleBooking = () => {
    window.open(FRESHA_URL, '_blank');
  };

  // Fonction pour ouvrir WhatsApp
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      {/* Modern Header */}
      <Header onBookingClick={handleBooking} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/7754858/7754858-hd_1080_1920_30fps.mp4" type="video/mp4" />
            <img src="https://images.unsplash.com/photo-1775811091644-69162fa36ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" alt="Luxury spa" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#F5F5DC] mb-6 leading-tight"
          >
            Elegance. Beauty. Perfection.
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="text-[clamp(1rem,5vw,1.25rem)] text-[#F5F5DC]/90 mb-8"
          >
            A premium nail spa experience in Dubai
          </motion.p>

          <motion.button
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(190, 32, 37, 0.6)' }} whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="px-12 py-4 bg-[#BE2025] text-[#F5F5DC] rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#BE2025]/50 transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Book now</span>
          </motion.button>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F5F5DC]/70 cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F0EFEF] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Services</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#A1A1A1]">Premier care for perfect nails</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group cursor-pointer"
                onClick={handleBooking} // Rendre la carte cliquable vers Fresha
              >
                <div className="relative h-64 overflow-hidden rounded-lg shadow-2xl">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-3xl font-bold text-[#F0EFEF] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>{service.name}</h3>
                    <p className="text-[#D4AF37] text-lg font-semibold">{service.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-[#A1A1A1] text-center mb-4 leading-relaxed">{service.description}</p>
                  <div className="flex items-center justify-center group/link">
                    <span className="text-[#D4AF37] font-semibold text-sm tracking-widest transition-transform group-hover/link:translate-x-1">BOOK THIS SERVICE</span>
                    <span className="ml-2 text-[#D4AF37] text-lg transition-transform group-hover/link:translate-x-1">→</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative w-full h-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,50 C300,100 500,0 600,50 C700,100 900,0 1200,50 L1200,120 L0,120 Z" fill="#F9FAFB" opacity="0.5" />
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>About Bambu Beauty</h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              Bambu Beauty offers a premium nail care experience, combining luxury, relaxation and precision in the heart of Dubai.
              Our team of expert technicians uses only premium products to guarantee impeccable results in a zen and refined atmosphere.
            </p>
            <img src="https://images.unsplash.com/photo-1775811091644-69162fa36ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" alt="Spa ambiance" className="w-full rounded-2xl shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 px-6 bg-[#F0EFEF]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-[#0F0F0F] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Our Creations</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#A1A1A1]">Discover our artistic nail designs</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-max">
            {galleryImages.map((image, index) => {
              const sizes = ['md:col-span-2 md:row-span-2', 'md:col-span-1 md:row-span-1', 'md:col-span-1 md:row-span-2', 'md:col-span-2 md:row-span-1', 'md:col-span-1 md:row-span-1', 'md:col-span-2 md:row-span-1'];
              const sizeClass = sizes[index % sizes.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -8 }}
                  className={`relative overflow-hidden rounded-xl shadow-lg cursor-pointer group ${sizeClass} h-56 md:h-auto`}
                >
                  <img src={image.url} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end" />
                  <motion.div initial={{ opacity: 0, y: 10 }} whileHover={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-[#D4AF37] text-sm font-semibold tracking-widest">{image.alt}</p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F0EFEF] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>Customer Reviews</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#A1A1A1]">What our customers say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#F0EFEF] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#D4AF37] font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Ready for perfect nails?</h2>
          <p className="text-xl text-white/80 mb-8">Treat yourself to an exceptional experience at Bambu Beauty</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' }} whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="px-10 py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-full font-bold text-lg shadow-2xl transition-all"
          >
            Book now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#DC2626]" style={{ fontFamily: 'var(--font-heading)' }}>Bambu Beauty</h3>
              <p className="text-white/70">Your premium nail spa destination in Dubai
            Beauty care . hair .nail .lashes .</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#DC2626]">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#DC2626]" />
                  <span className="text-white/70">AZIZI RIVIERA 21 – RETAIL 08
Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#DC2626]" />
                  <span className="text-white/70">+971 50 337 0430</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#DC2626]">Hours</h4>
              <p className="text-white/70 mb-2">Monday - Saturday: 10am - 8pm</p>
              <p className="text-white/70 mb-4">Sunday: 11am - 7pm</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#DC2626] hover:text-[#EF4444] transition-colors">
                <Instagram className="w-5 h-5" />
                @bambubeauty
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2026 Bambu Beauty. All rights reserved.</p>
                        <p>&copy; Developed By skander Bey.</p>

          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button (Replaces the obtrusive Book button) */}
      <motion.button
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(37, 211, 102, 0.4)' }} whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] text-white rounded-full shadow-2xl transition-all flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    </div>
  );
}