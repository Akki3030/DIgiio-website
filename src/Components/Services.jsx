import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { services } from '../assets/assets';

const Services = () => {

//  motion Variables

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

  return (


    <div id='services' className='py-28 relative z-10'>
      <div className='max-w-5xl mx-auto px-6'>
<div className='text-center'>
  <span className='text-accent font-medium uppercase tracking-wider text-sm'>Our Expertise</span>
  <h2 className='text-4xl md:text-5xl mt-4 mb-6 font-bold '>Premium Digital Services</h2>
  <p className='max-w-2xl mx-auto text-xl text-gray-400 '>We deliver exceptional results through our specialized service offerings.</p>
</div>
<motion.div
      className="grid grid-cols-1 md:grid-cols-3 mt-12 lg:grid-cols-3 gap-8 "
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, }}
    >
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          className="border-2 border-gray-600 p-8 rounded-2xl service-card transition duration-300 hover:border-accent hover:border-opacity-50 hover:-translate-y-2 cursor-pointer"
        >
          <div className={`text-5xl mb-6 text-${service.Color}`}>
            <service.icon />
          </div>
          <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
          <p className="text-gray-400 mb-6">{service.description}</p>
          <a href="#" className={`${service.linkColor} font-bold flex items-center group`}>
            Explore services
          <FaArrowRight className='ml-3 group-hover:ml-4 transition-all ' />
          </a>
        </motion.div>
      ))}
    </motion.div>
      </div>
    </div>
  )
}

export default Services
