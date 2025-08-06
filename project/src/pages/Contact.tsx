import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form and state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Get in touch with our beauty experts
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Let's Connect
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Have questions about our services? Want to schedule a consultation? 
                  We'd love to hear from you. Reach out to us through any of the channels below.
                </p>
              </div>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Our Salon</h3>
                    <p className="text-gray-600">
                      123 Beauty Avenue<br />
                      New York, NY 10001
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">Available 7 days a week</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">hello@luxebeauty.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Clock size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Opening Hours</h3>
                    <div className="text-gray-600 text-sm space-y-1">
                      <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow">
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      Fill out the form below and we'll respond as soon as possible
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                      >
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Name"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      </motion.div>
                      
                      <motion.div
                        whileFocus={{ scale: 1.02 }}
                      >
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Your Email"
                          className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                    >
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        placeholder="Subject"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                    >
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Your Message"
                        rows={6}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                      />
                    </motion.div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center justify-center space-x-2"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find Us
            </h2>
            <p className="text-gray-600 text-lg">
              We're conveniently located in the heart of the city
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center"
          >
            <p className="text-gray-600 text-lg">Interactive Map Placeholder</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;