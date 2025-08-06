import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="bg-gradient-to-br from-rose-50 to-purple-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Real stories from our beautiful transformations
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12"
            >
              <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src={currentTestimonial.image}
                    alt={currentTestimonial.name}
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover border-4 border-rose-200"
                  />
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-gray-700 text-lg lg:text-xl italic mb-4 leading-relaxed">
                    "{currentTestimonial.review}"
                  </blockquote>
                  
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {currentTestimonial.name}
                    </div>
                    <div className="text-rose-600 font-medium">
                      {currentTestimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-rose-50 transition-colors"
          >
            <ChevronLeft size={20} className="text-gray-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-rose-50 transition-colors"
          >
            <ChevronRight size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-rose-500' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;