import React from 'react';
import { motion } from 'framer-motion';
import { Clock, DollarSign } from 'lucide-react';
import { Service } from '../data/services';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-rose-600 transition-colors">
          {service.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-2">
          {service.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-rose-600">
              <DollarSign size={16} />
              <span className="font-semibold">{service.price}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-500">
              <Clock size={16} />
              <span className="text-sm">{service.duration}</span>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;