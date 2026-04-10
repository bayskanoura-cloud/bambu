import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Sparkles, Heart, Star, Instagram, Phone, MapPin } from 'lucide-react';
import Header from './components/Header';

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
  {
    url: 'https://images.unsplash.com/photo-1773808605530-17926a0463e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Silver nail art design',
  },
  {
    url: 'https://images.unsplash.com/photo-1754799670312-8e7da8e40ad7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Navy and gold nail art',
  },
  {
    url: 'https://images.unsplash.com/photo-1604654894611-6973b376cbde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Black manicure',
  },
  {
    url: 'https://images.unsplash.com/photo-1581296679262-bb96b7b7bb47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Elegant hands with jewelry',
  },
  {
    url: 'https://images.unsplash.com/photo-1672813319961-61a83471e77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'White nail art',
  },
  {
    url: 'https://images.unsplash.com/photo-1773808493698-5683196246c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Black decorated nails',
  },
];

const testimonials = [
  {
    name: 'Sarah Al-Mansoori',
    text: 'An exceptional experience! The nail art is perfect and the atmosphere is incredibly relaxing.',
    rating: 5,
  },
  {
    name: 'Layla Hassan',
    text: 'The best nail spa in Dubai. Impeccable service and beautiful results.',
    rating: 5,
  },
  {
    name: 'Amira Khalil',
    text: 'I have been a loyal customer for 2 years. Always satisfied, never disappointed!',
    rating: 5,
  },
];

const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'];

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showBooking, setShowBooking] = useState(false);

  const scrollToBooking = () => {
    setShowBooking(true);
    setTimeout(() => {
      document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedService && selectedDate && selectedTime) {
      alert(`Booking confirmed!\n\nService: ${selectedService}\nDate: ${selectedDate}\nTime: ${selectedTime}\n\nYou will receive a confirmation email.`);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] overflow-x-hidden">
      {/* Modern Header */}
      <Header onBookingClick={scrollToBooking} />

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-20 sm:pt-24 lg:pt-28"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1775811091644-69162fa36ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
            alt="Luxury spa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#F9FAFB]" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-2xl mt-20">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Elegance. Beauty. Perfection.
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-white/90 mb-10"
          >
            A premium nail spa experience in Dubai
          </motion.p>

          {/* <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToBooking}
            className="px-10 py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-[#DC2626]/50 transition-all"
          >
            Book Now
          </motion.button> */}
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-[#F9FAFB] to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Our Services
            </h2>
            <p className="text-lg text-[#6B7280]">Premium care for perfect nails</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(26, 26, 26, 0.15)' }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      {service.name}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-[#6B7280] mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#DC2626] font-bold text-lg">{service.price}</p>
                    <div className="w-10 h-10 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wave Separator */}
      <div className="relative w-full h-24 bg-gradient-to-b from-white to-[#F9FAFB]">
        <svg
          className="absolute bottom-0 w-full h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 C300,100 500,0 600,50 C700,100 900,0 1200,50 L1200,120 L0,120 Z"
            fill="#F9FAFB"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              About Bambu Beauty
            </h2>
            <p className="text-lg text-[#1A1A1A] leading-relaxed mb-8">
              Bambu Beauty offers a premium nail care experience, combining luxury, relaxation and precision in the heart of Dubai.
              Our team of expert technicians uses only premium products to guarantee impeccable results in a zen and refined atmosphere.
            </p>
            <img
              src="https://images.unsplash.com/photo-1775811091644-69162fa36ea1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
              alt="Spa ambiance"
              className="w-full rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Gallery
            </h2>
            <p className="text-lg text-[#6B7280]">Discover our creations</p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-[#F9FAFB]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Customer Reviews
            </h2>
            <p className="text-lg text-[#6B7280]">What our customers say about us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#DC2626] fill-[#DC2626]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] mb-4 italic">"{testimonial.text}"</p>
                <p className="text-[#DC2626] font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-6 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Online Booking
            </h2>
            <p className="text-lg text-[#6B7280]">Book and pay directly online</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleBooking}
            className="bg-gradient-to-br from-[#F9FAFB] to-white rounded-2xl p-8 shadow-2xl border border-gray-200"
          >
            {/* Service Selection */}
            <div className="mb-6">
              <label className="block text-[#1A1A1A] font-semibold mb-3">Service</label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#DC2626] focus:outline-none transition-colors"
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} - {service.price}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className="mb-6">
              <label className="block text-[#1A1A1A] font-semibold mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#DC2626]" />
                Date
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-[#DC2626] focus:outline-none transition-colors"
              />
            </div>

            {/* Time Selection */}
            <div className="mb-8">
              <label className="block text-[#1A1A1A] font-semibold mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#DC2626]" />
                Time
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-xl font-semibold transition-all ${
                      selectedTime === time
                        ? 'bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white shadow-lg scale-105'
                        : 'bg-white text-[#1A1A1A] border-2 border-gray-200 hover:border-[#DC2626]'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(220, 38, 38, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Book & Pay Online
            </motion.button>

            <p className="text-center text-sm text-[#6B7280] mt-4">
              Secure online payment
            </p>
          </motion.form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#1A1A1A] to-[#2D2D2D]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            Ready for perfect nails?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Treat yourself to an exceptional experience at Bambu Beauty
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(220, 38, 38, 0.6)' }}
            whileTap={{ scale: 0.98 }}
            onClick={scrollToBooking}
            className="px-10 py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-full font-bold text-lg shadow-2xl transition-all"
          >
            Book Now
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#DC2626]" style={{ fontFamily: 'var(--font-heading)' }}>
                Bambu Beauty
              </h3>
              <p className="text-white/70">Your premium nail spa destination in Dubai</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#DC2626]">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#DC2626]" />
                  <span className="text-white/70">Dubaï, UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#DC2626]" />
                  <span className="text-white/70">+971 XX XXX XXXX</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-[#DC2626]">Hours</h4>
              <p className="text-white/70 mb-2">Monday - Saturday: 10am - 8pm</p>
              <p className="text-white/70 mb-4">Sunday: 11am - 7pm</p>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#DC2626] hover:text-[#EF4444] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                @bambubeauty
              </a>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-white/50">
            <p>&copy; 2026 Bambu Beauty. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky Booking Button */}
      <motion.button
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(220, 38, 38, 0.6)' }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToBooking}
        className="fixed bottom-6 right-6 z-50 px-8 py-4 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white rounded-full font-bold shadow-2xl hover:shadow-[#DC2626]/50 transition-all flex items-center gap-2"
      >
        <Calendar className="w-5 h-5" />
        Book
      </motion.button>
    </div>
  );
}
