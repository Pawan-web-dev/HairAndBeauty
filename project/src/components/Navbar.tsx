import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Instagram, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/booking', label: 'Booking' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-600 bg-clip-text text-transparent"
            >
              Luxe Beauty
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-2 transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-rose-500 font-medium'
                    : scrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-300'
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-rose-500"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1234567890" className={`flex items-center space-x-2 ${scrolled ? 'text-gray-700' : 'text-white'}`}>
              <Phone size={16} />
              <span className="text-sm font-medium">(123) 456-7890</span>
            </a>
            <div className="flex space-x-2">
              <a href="#" className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-300'}`}>
                <Instagram size={16} />
              </a>
              <a href="#" className={`p-2 rounded-full transition-colors ${scrolled ? 'text-gray-700 hover:text-rose-500' : 'text-white hover:text-rose-300'}`}>
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-4 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-rose-50 text-rose-600 font-medium'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              
              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+1234567890" className="flex items-center space-x-2 py-2 px-4 text-gray-700">
                  <Phone size={16} />
                  <span>(123) 456-7890</span>
                </a>
                <div className="flex space-x-4 px-4 pt-2">
                  <a href="#" className="text-gray-700 hover:text-rose-500">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-gray-700 hover:text-rose-500">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;