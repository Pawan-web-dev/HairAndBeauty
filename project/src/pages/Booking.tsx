import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Phone, Mail, Check } from 'lucide-react';
import { services } from '../data/services';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
    '6:00 PM', '6:30 PM', '7:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        notes: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check size={40} className="text-white" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for choosing Luxe Beauty. We'll send you a confirmation email shortly with all the details.
          </p>
          <p className="text-sm text-gray-500">
            Redirecting back to booking form...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative h-80 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Booking"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Schedule your transformation today
          </p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Reserve Your Spot
                </h2>
                <p className="text-gray-600 text-lg">
                  Fill out the form below and we'll confirm your appointment within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <User className="mr-2 text-rose-500" size={20} />
                      Personal Information
                    </h3>
                    
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Full Name"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email Address"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Phone Number"
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </motion.div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <Calendar className="mr-2 text-rose-500" size={20} />
                      Appointment Details
                    </h3>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select Service</option>
                        {services.map((service) => (
                          <option key={service.id} value={service.name}>
                            {service.name} - {service.price}
                          </option>
                        ))}
                      </select>
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="relative"
                    >
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all appearance-none"
                      >
                        <option value="">Select Time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </motion.div>
                  </div>
                </div>

                {/* Additional Notes */}
                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any special requests or notes? (Optional)"
                    rows={4}
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all resize-none"
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-rose-500 to-purple-600 text-white py-4 rounded-xl text-lg font-semibold hover:shadow-2xl transition-shadow"
                >
                  Book My Appointment
                </motion.button>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div className="flex flex-col items-center">
                    <Phone className="text-rose-500 mb-2" size={24} />
                    <p className="font-medium text-gray-900">Call Us</p>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Mail className="text-rose-500 mb-2" size={24} />
                    <p className="font-medium text-gray-900">Email Us</p>
                    <p className="text-gray-600">hello@luxebeauty.com</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <Clock className="text-rose-500 mb-2" size={24} />
                    <p className="font-medium text-gray-900">Hours</p>
                    <p className="text-gray-600">Mon-Sun: 9AM-8PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Booking;