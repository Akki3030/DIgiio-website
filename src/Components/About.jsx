import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const features = [
    { text: 'Innovative Design Strategies', icon: <FaLightbulb className="text-accent" /> },
    { text: 'Client-Centric Development', icon: <FaUsers className="text-accent" /> },
    { text: 'High Performance & Scale', icon: <FaRocket className="text-accent" /> },
    { text: '24/7 Dedicated Support', icon: <FaCheckCircle className="text-accent" /> }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden z-10 w-full">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Side: Images/Graphics */}
          <motion.div variants={itemVariants} className="relative w-full h-[500px] hidden md:block">
            {/* Primary Image Box */}
            <div className="absolute top-0 right-10 w-3/4 h-[80%] rounded-3xl overflow-hidden shadow-2xl glass-card p-2 z-10">
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black/20 rounded-2xl relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Team working" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            
            {/* Secondary Floating Image Box */}
            <div className="absolute bottom-0 left-0 w-2/3 h-[50%] rounded-3xl overflow-hidden shadow-2xl glass-card p-2 z-20 animate-float">
              <div className="w-full h-full bg-gradient-to-tl from-accent/20 to-primary/80 rounded-2xl relative overflow-hidden backdrop-blur-sm">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Creative Design" 
                  className="w-full h-full object-cover mix-blend-overlay hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/30 rounded-full blur-[80px] -z-10"></div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-700 bg-gray-900/50 backdrop-blur-md mb-6 w-fit">
              <span className="text-accent font-medium uppercase tracking-widest text-xs">Who We Are</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Crafting <span className="gradient-text">Digital Excellence</span> Since Day
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We are a collective of digital craftsmen, visionary designers, and innovative engineers. Our mission is to transform complex challenges into elegant, highly performant solutions that propel your business forward in the digital age.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-2xl glass-card transition-colors hover:border-accent/40 group cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-gray-200 font-medium text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>

            {/* <button className="bg-white text-black hover:bg-accent hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 w-fit hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,45,117,0.3)]">
              Discover Our Story
            </button> */}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
