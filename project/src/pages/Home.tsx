import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Users, Award, Clock } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: "Expert Stylists",
      description: "Our certified professionals bring years of experience and artistic vision"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "We use only the finest products and latest techniques for outstanding results"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Open 7 days a week with extended hours to fit your busy schedule"
    },
    {
      icon: Sparkles,
      title: "Luxury Experience",
      description: "Relax in our elegant salon with complimentary refreshments and Wi-Fi"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Hair Salon"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transform Your
            <span className="bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent block">
              Natural Beauty
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed"
          >
            Experience luxury hair and beauty services with our expert team. 
            From stunning cuts to radiant skin, we bring out your best self.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow flex items-center space-x-2"
              >
                <span>Book Appointment</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all"
              >
                Explore Services
              </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Luxe Beauty?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're committed to providing exceptional beauty services that exceed your expectations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-rose-50 to-purple-50 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mb-4">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-gray-600 text-lg">
              Discover our most popular treatments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Signature Hair Cut & Style",
                description: "Complete transformation with wash, cut, and styling",
                price: "$65",
                image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                title: "Bridal Beauty Package",
                description: "Hair and makeup for your special day",
                price: "$200",
                image: "https://images.pexels.com/photos/1447302/pexels-photo-1447302.jpeg?auto=compress&cs=tinysrgb&w=500"
              },
              {
                title: "Luxury Spa Facial",
                description: "Rejuvenating treatment for glowing skin",
                price: "$85",
                image: "https://images.pexels.com/photos/3985341/pexels-photo-3985341.jpeg?auto=compress&cs=tinysrgb&w=500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full font-semibold">
                    {service.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link to="/booking">
                    <button className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
                      Book Now
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-500 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready for Your Transformation?
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Book your appointment today and experience the luxury you deserve
            </p>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-rose-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-shadow"
              >
                Schedule Your Visit
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;