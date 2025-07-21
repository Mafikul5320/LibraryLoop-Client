import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Globe, Award, Target, Star, Heart, Shield, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-teal-50 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl text-black md:text-6xl font-bold mb-6">About LibraryLoop</h1>
            <p className="text-xl max-w-4xl text-gray-500 mx-auto leading-relaxed">
              We're on a mission to transform library management through innovative technology,
              making knowledge more accessible and library operations more efficient for
              educational institutions worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: <BookOpen className="h-8 w-8" />,
              value: '50,000+',
              label: 'Books Managed'
            }, {
              icon: <Users className="h-8 w-8" />,
              value: '15,000+',
              label: 'Active Users'
            }, {
              icon: <Globe className="h-8 w-8" />,
              value: '120+',
              label: 'Institutions'
            }, {
              icon: <Award className="h-8 w-8" />,
              value: '25+',
              label: 'Awards Won'
            }].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Target className="h-8 w-8 text-[#114a44] mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To democratize access to knowledge by providing cutting-edge library management
                  solutions that empower educational institutions to efficiently organize, manage,
                  and share their collections with students and faculty worldwide.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe that every student deserves easy access to quality educational resources,
                  and every librarian deserves tools that make their work more impactful and less burdensome.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center mb-6">
                  <Star className="h-8 w-8 text-[#114a44] mr-3" />
                  <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  To become the world's leading platform for library management, fostering a
                  global community where knowledge flows freely and educational institutions
                  can focus on what matters most - education.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where technology seamlessly connects learners with the
                  resources they need, breaking down barriers and creating opportunities for
                  discovery and growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
