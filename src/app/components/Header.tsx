import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import logo from 'figma:asset/logo_transparent.png';

interface HeaderProps {
  onBookingClick?: () => void;
}

const navigationItems = [
  { label: 'HOME', href: '#home' },
  { label: 'SERVICES', href: '#services' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'ABOUT', href: '#about' },
  { label: 'CONTACT', href: '#contact' },
];

export default function Header({ onBookingClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const [showLogo, setShowLogo] = useState(true);

  // Gestion de la visibilité du logo au scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowLogo(false); // Cache le logo quand on descend
      } else {
        setShowLogo(true); // Affiche le logo quand on est en haut
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (label: string, href: string) => {
    setActiveLink(label);
    setIsMenuOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* --- LOGO AVEC DISPARITION AU SCROLL --- */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20, transition: { duration: 0.3 } }}
            transition={{ duration: 0.8 }}
            className="fixed top-6 left-6 z-[60]"
          >
            <div className="relative group">
              <img
                src={logo}
                alt="Bambu Beauty"
                className="h-32 md:h-40 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
                style={{ 
                  mixBlendMode: 'multiply',
                  filter: 'contrast(1.1)' 
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MENU HAMBURGER (TOUJOURS VISIBLE) --- */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-8 right-6 z-[60] h-12 w-12 flex items-center justify-center bg-black/20 backdrop-blur-xl rounded-full border border-white/10 shadow-xl"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </motion.button>

      {/* --- DRAWER MENU WITH GLASSMORPHISM --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/30 backdrop-blur-lg z-40"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] md:w-[400px] bg-white/10 backdrop-blur-xl border-l border-white/20 z-50 flex flex-col p-10 pt-32 shadow-2xl"
            >
              <nav className="flex flex-col space-y-10">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.label, item.href)}
                    className="group text-left flex items-baseline space-x-4"
                  >
                    <span className="text-[10px] font-bold text-[#D4AF37] tracking-tighter uppercase">
                      0{index + 1}
                    </span>
                    <span className={`text-2xl tracking-[0.25em] font-light transition-all ${
                      activeLink === item.label ? 'text-[#F0EFEF] translate-x-2' : 'text-[#A1A1A1] hover:text-[#F0EFEF]'
                    }`}>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                onClick={() => { onBookingClick?.(); setIsMenuOpen(false); }}
                className="mt-auto mb-10 w-full py-4 bg-[#BE2025] hover:bg-[#D4242A] text-white text-xs font-bold tracking-[0.3em] uppercase rounded-sm flex items-center justify-center space-x-2 active:scale-95 transition-all duration-300"
                style={{
                  boxShadow: '0 0 20px rgba(190, 32, 37, 0.4), 0 4px 20px rgba(190, 32, 37, 0.3)'
                }}
              >
                <Calendar className="w-4 h-4" />
                <span>RÉSERVER</span>
              </motion.button> */}

              {/* <div className="border-t border-white/10 pt-6 text-[#A1A1A1] text-[10px] tracking-[0.2em] uppercase">
                <p className="text-[#D4AF37] font-semibold mb-2"></p>
              </div> */}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}