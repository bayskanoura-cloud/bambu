import { motion } from 'framer-motion';
import { Calendar, Sparkles, Heart, Star, Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';
import Header from './components/Header';

// --- LIENS EXTERNES ---
const FRESHA_URL = "https://www.fresha.com/a/ton-salon-dubai";
const WHATSAPP_NUMBER = "971503370430";

const services = [
  {
    name: 'Nail Art & Care',
    description: 'Premium manicures, pedicures and custom artistic designs.',
    price: 'From 120 AED',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=800',
  },
  {
    name: 'Lashes & Brows',
    description: 'Enhance your gaze with professional extensions and lifting.',
    price: 'From 200 AED',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800',
  },
  {
    name: 'Hair Styling',
    description: 'Expert cuts, coloring and luxury hair treatments.',
    price: 'From 180 AED',
    icon: Star,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800',
  },
  {
    name: 'Beauty Care',
    description: 'Rejuvenating facials and professional skin treatments.',
    price: 'From 250 AED',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800',
  },
  {
    name: 'Spa Experience',
    description: 'Complete relaxation with luxury body treatments.',
    price: 'From 300 AED',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=800',
  }
];

const galleryImages = [
  { url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=800', alt: 'Hair Styling' },
  { url: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&q=80&w=800', alt: 'Lashes Design' },
  { url: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?q=80&w=800', alt: 'Nail Art' },
  { url: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800', alt: 'Beauty Treatment' },
  { url: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=800', alt: 'Hair Care' },
  { url: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800', alt: 'Skin Care' },
];

const testimonials = [
  { name: 'Sarah Al-Mansoori', text: 'An exceptional experience! The nail art is perfect and the atmosphere is incredibly relaxing.', rating: 5 },
  { name: 'Layla Hassan', text: 'The best multi-service spa in Dubai. Impeccable hair and nail results.', rating: 5 },
  { name: 'Amira Khalil', text: 'I love their lash extensions. Always satisfied, never disappointed!', rating: 5 },
];

export default function App() {

  const handleBooking = () => {
    window.open(FRESHA_URL, '_blank');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      <Header onBookingClick={handleBooking} />

      {/* Hero Section */}
      <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover">
            <source src="https://videos.pexels.com/video-files/7754858/7754858-hd_1080_1920_30fps.mp4" type="video/mp4" />
            <img src="https://images.unsplash.com/photo-1775811091644-69162fa36ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200" alt="Luxury spa" className="w-full h-full object-cover" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        </div>

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
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }} whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full font-bold text-lg shadow-2xl transition-all"
          >
            Book now
          </motion.button>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#F5F5DC]/70 cursor-pointer"
          onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 13L12 18L17 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 bg-[#0F0F0F] font-['Poppins',sans-serif]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#F0EFEF] mb-6 tracking-tight">
              Our Services
            </h2>
            <div className="h-1.5 w-20 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
            <p className="text-lg md:text-xl text-[#A1A1A1] max-w-2xl mx-auto font-light leading-relaxed">
              Experience the pinnacle of beauty with our bespoke treatments for hair, nails, and skin.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group relative flex flex-col"
                onClick={handleBooking}
              >
                <div className="relative h-80 overflow-hidden rounded-2xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] border border-white/5 group-hover:border-[#D4AF37]/50">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/20 to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">
                      {service.name}
                    </h3>
                    <p className="text-[#D4AF37] text-lg font-medium">
                      {service.price}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="px-6 py-2 bg-[#D4AF37] text-black font-bold rounded-full text-sm">
                      BOOK NOW
                    </span>
                  </div>
                </div>

                <div className="mt-8 px-2">
                  <p className="text-[#A1A1A1] text-center text-sm md:text-base font-light leading-relaxed mb-6 h-12 overflow-hidden">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-[#D4AF37] group-hover:text-white transition-colors duration-300">
                    <span className="text-[12px] font-bold tracking-[0.2em] uppercase">Discover More</span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="text-lg"
                    >
                      →
                    </motion.span>
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
      {/* About Section - Matching Design Style */}
<section id="about" className="py-24 md:py-32 px-6 bg-[#FDFCFB] font-['Poppins',sans-serif]">
  <div className="max-w-7xl mx-auto">
    
    {/* Titre & Sous-titre Style Identique à "Our Services" */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="text-center mb-16 md:mb-24"
    >
      <h2 className="text-5xl md:text-6xl font-serif text-[#0F0F0F] mb-4">
        The Bambu Experience
      </h2>
      {/* La barre dorée signature */}
      <div className="h-1 w-20 bg-[#D4AF37] mx-auto mb-8 rounded-full" />
      <p className="text-lg md:text-xl text-[#A1A1A1] max-w-2xl mx-auto font-light leading-relaxed">
        Redefining premium care through technical mastery and artistic precision.
      </p>
    </motion.div>

    <div className="flex flex-col lg:flex-row items-center gap-16">
      {/* Image avec le même style de coins arrondis */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=1200&auto=format&fit=crop"
            alt="Luxury Salon Interior"
            className="w-full h-[450px] md:h-[550px] object-cover"
          />
        </div>
      </motion.div>

      {/* Contenu textuel aligné */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full lg:w-1/2 text-left"
      >
        <div className="space-y-8">
          <p className="text-xl text-[#1A1A1A] leading-relaxed">
            Located in the prestigious heart of Dubai, <span className="font-semibold text-[#D4AF37]">Bambu Beauty</span> offers a complete luxury experience.
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            Our elite team specializes in a holistic approach to beauty, offering everything from couture hair styling and avant-garde nail art to medical-grade skin therapies. 
          </p>
          <p className="text-lg text-gray-500 font-light leading-relaxed">
            We use only premium products to guarantee impeccable results in a zen and refined atmosphere, ensuring every visit is a journey of transformation.
          </p>
          
          <div className="pt-6">
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-[#D4AF37] font-bold tracking-widest uppercase text-sm"
            >
              Discover our expertise 
              <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
 <section id="gallery" className="py-32 px-6 bg-[#F0EFEF]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#0F0F0F] mb-4">Our Creations</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D4AF37] to-transparent mx-auto mb-6" />
            <p className="text-xl text-[#A1A1A1]">Explore our Hair, Lash and Nail portfolio</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group h-80"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center" />
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <p className="text-white text-2xl font-light tracking-[0.2em] uppercase border-b border-white/40 pb-2">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-32 px-6 bg-[#0F0F0F]">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-bold text-[#F0EFEF] mb-4">Customer Reviews</h2>
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready for a makeover?</h2>
          <p className="text-xl text-white/80 mb-8">Treat yourself to an exceptional experience at Bambu Beauty</p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }} whileTap={{ scale: 0.98 }}
            onClick={handleBooking}
            className="px-10 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full font-bold text-lg shadow-2xl transition-all"
          >
            Book now
          </motion.button>
        </motion.div>
      </section>
      {/* Map Section */}


      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#D4AF37]">Bambu Beauty</h3>
              <p className="text-white/70">Premium Beauty, Hair, Nails & Lashes <br /> in the heart of Dubai.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#D4AF37]">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white/70">AZIZI RIVIERA 21 – RETAIL 08 Dubai, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-white/70">+971 50 337 0430</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-[#D4AF37]">Hours</h4>
              <p className="text-white/70 mb-2">Monday - Saturday: 10am - 8pm</p>
              <p className="text-white/70 mb-4">Sunday: 11am - 7pm</p>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#B8860B] transition-colors">
                <Instagram className="w-5 h-5" />
                @bambubeauty
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
            <p>&copy; 2026 Bambu Beauty. All rights reserved.</p>
            <p>Developed By Skander Bey.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <motion.button
        initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.1, boxShadow: '0 0 30px rgba(212, 175, 55, 0.4)' }} whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 z-50 p-4 bg-[#D4AF37] text-white rounded-full shadow-2xl transition-all flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </motion.button>
    </div>
  );
}