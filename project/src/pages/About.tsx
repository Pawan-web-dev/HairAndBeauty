import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Heart, Star } from 'lucide-react';

const About: React.FC = () => {
  const team = [
    {
      name: "Sarah Mitchell",
      role: "Master Stylist & Owner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Bridal Styling", "Color Correction", "Extensions"]
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Hair Colorist",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Balayage", "Fashion Colors", "Highlights"]
    },
    {
      name: "Maria Chen",
      role: "Spa & Skincare Specialist",
      image: "https://images.pexels.com/photos/1848565/pexels-photo-1848565.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Facials", "Anti-Aging", "Skin Analysis"]
    },
    {
      name: "Jessica Taylor",
      role: "Makeup Artist",
      image: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=300",
      specialties: ["Bridal Makeup", "Special Events", "Beauty Consultation"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Salon Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white max-w-3xl mx-auto px-4"
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4">About Luxe Beauty</h1>
          <p className="text-xl lg:text-2xl text-gray-200">
            Where elegance meets expertise
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2015, Luxe Beauty began as a dream to create a sanctuary where beauty and wellness converge. 
                Our founder, Sarah Mitchell, envisioned a space that would not only transform appearances but also uplift spirits 
                and boost confidence.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Today, we're proud to be one of the city's premier beauty destinations, serving hundreds of satisfied clients 
                who trust us with their most important moments. From everyday elegance to bridal perfection, we're here to 
                make every visit an exceptional experience.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">4.9</div>
                  <div className="text-gray-600">Rating</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Salon Interior"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-purple-600/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything we do is guided by these core principles
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We never compromise on quality. From our products to our techniques, we use only the best to deliver outstanding results."
              },
              {
                icon: Users,
                title: "Community",
                description: "We believe in building lasting relationships with our clients and being an active part of our local community."
              },
              {
                icon: Heart,
                title: "Care",
                description: "Every client is treated with genuine care and respect. Your comfort and satisfaction are our top priorities."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full mb-6">
                  <value.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our talented professionals are passionate about bringing out your natural beauty
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-rose-600 font-medium mb-4">
                    {member.role}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-rose-50 text-rose-600 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Recognition & Awards
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Star className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Best Salon 2024</h3>
                <p className="text-gray-600 text-sm">City Beauty Awards</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Excellence Award</h3>
                <p className="text-gray-600 text-sm">Professional Beauty Association</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Client Choice</h3>
                <p className="text-gray-600 text-sm">Local Business Awards</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;