import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Luxe Beauty
            </div>
            <p className="text-gray-300">
              Transform your look with our premium hair and beauty services. 
              Experience luxury and elegance at its finest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/booking', label: 'Book Now' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-rose-400" />
                <span className="text-gray-300">(123) 456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-rose-400" />
                <span className="text-gray-300">hello@luxebeauty.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-rose-400 mt-1" />
                <span className="text-gray-300">
                  123 Beauty Avenue<br />
                  New York, NY 10001
                </span>
              </div>
            </div>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Working Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock size={16} className="text-rose-400" />
                <div className="text-gray-300">
                  <div>Mon - Fri: 9:00 AM - 8:00 PM</div>
                  <div>Saturday: 9:00 AM - 6:00 PM</div>
                  <div>Sunday: 10:00 AM - 5:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2025 Developed By Developer Pawan. Luxe Beauty Salon. All rights reserved. 
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;