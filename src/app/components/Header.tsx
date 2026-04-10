import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY <= 100) {
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > 30);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
    
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
        y: isVisible ? 0 : -100,
        opacity: isVisible ? 1 : 0
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-xl border-b border-white/15 shadow-xl'
          : 'bg-black/30 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24 gap-4">
          
          {/* Logo - Optimized Size & Alignment */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 group cursor-pointer"
          >
            <div className="relative">
              {/* Subtle glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 to-white/5 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Logo Container - Minimal & elegant */}
              <div className="relative p-1.5 sm:p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                <img
                  src={logo}
                  alt="Bambu Beauty - Premium Nail Salon Dubai"
                  className="h-12 sm:h-14 lg:h-16 w-auto object-contain drop-shadow-lg filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                />
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navigationItems.map((item) => (
              <motion.button
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative px-4 py-2 font-medium text-xs uppercase tracking-wider transition-all duration-200 rounded-lg ${
                  activeLink === item.label
                    ? 'text-white'
                    : 'text-white/65 hover:text-white hover:bg-white/8'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                
                {/* Active indicator - bottom accent line */}
                {activeLink === item.label && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-rose-400 to-red-500 rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {/* Right Side - CTA & Mobile Menu */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Desktop CTA Button */}
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBookingClick}
              className="hidden lg:block px-6 py-2 bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-500 hover:to-red-600 text-white rounded-full font-semibold text-xs uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl border border-rose-300/30 drop-shadow-lg whitespace-nowrap"
            >
              Book Now
            </motion.button> */}

            {/* Mobile Menu Button - Premium Style */}
            <motion.button
              whileTap={{ scale: 0.88 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2.5 rounded-lg transition-all duration-300 ${
                isMenuOpen
                  ? 'bg-white/15 text-white'
                  : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
              }`}
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Modern Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden border-t border-white/10"
            >
              <nav className="px-3 py-4 space-y-1 bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.label, item.href)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                      activeLink === item.label
                        ? 'bg-gradient-to-r from-rose-400/30 to-red-500/20 text-white border border-rose-400/40'
                        : 'text-white/75 hover:text-white hover:bg-white/8 border border-transparent'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}

                {/* Mobile CTA Button */}
                {/* <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navigationItems.length * 0.05 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleBookingClick}
                  className="w-full mt-3 px-4 py-3 bg-gradient-to-r from-rose-400 to-red-500 hover:from-rose-500 hover:to-red-600 text-white rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl border border-rose-300/30"
                >
                  Book Now
                </motion.button> */}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
