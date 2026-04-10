import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from 'figma:asset/44083d477defdf9b384af0c1b5613c21e2a2f687.png';

interface HeaderProps {
  onBookingClick?: () => void;
}

const navigationItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header({ onBookingClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Detect scroll direction and position for show/hide behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down AND scrolled past 100px - hide navbar
        setIsVisible(false);
      } else if (currentScrollY <= 100) {
        // Near top - always show
        setIsVisible(true);
      }

      // Enhanced scroll effect
      setIsScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
    
    // Handle smooth scroll if it's an internal link
    if (href.startsWith('#')) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleBookingClick = () => {
    setIsMenuOpen(false);
    onBookingClick?.();
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -150,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/50 backdrop-blur-2xl shadow-2xl border-b border-white/10'
          : 'bg-black/20 backdrop-blur-lg border-b border-white/5'
      }`}
    >
      {/* Enhanced gradient overlay for premium text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-28 sm:h-36 lg:h-40">
          {/* Enhanced Logo Container - Premium & Visible */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              {/* Logo glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-red-500/10 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-110" />
              
              {/* Logo with minimal container */}
              <div className="relative p-3 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 transition-all duration-300">
                <img
                  src={logo}
                  alt="Bambu Beauty - Premium Nail Salon Dubai"
                  className="h-20 sm:h-28 lg:h-32 w-auto object-contain drop-shadow-xl filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navigationItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`relative font-semibold text-sm uppercase tracking-wide transition-all duration-200 ${
                  activeLink === item.label
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                } drop-shadow-lg hover:drop-shadow-xl`}
              >
                {item.label}
                {activeLink === item.label && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1.5 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-400 rounded-full drop-shadow-md"
                    transition={{ duration: 0.3 }}
                  />
                )}
                {/* Hover effect underline */}
                {activeLink !== item.label && (
                  <motion.div
                    className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-to-r from-white/40 to-white/0 rounded-full opacity-0 group-hover:opacity-100"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* CTA Button and Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Desktop CTA Button - Premium Style */}
            {/* <motion.button
              whileHover={{ scale: 1.1, boxShadow: '0 20px 50px rgba(220, 38, 38, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookingClick}
              className="hidden sm:block px-8 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full font-bold text-sm transition-all duration-300 shadow-2xl hover:shadow-3xl border border-red-400/50 drop-shadow-lg"
            >
              Book Now
            </motion.button> */}

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2.5 text-white hover:bg-white/10 rounded-lg transition-colors drop-shadow-md"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <nav className="px-2 py-4 space-y-2 border-t border-white/10 backdrop-blur-sm bg-black/20">
            {navigationItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={`w-full text-left px-4 py-3 rounded-lg font-semibold text-sm transition-all duration-200 ${
                  activeLink === item.label
                    ? 'bg-red-500/40 text-white'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile CTA Button */}
            {/* <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleBookingClick}
              className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-full font-bold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl border border-red-400/50"
            >
              Book Now
            </motion.button> */}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
