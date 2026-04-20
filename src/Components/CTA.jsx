import React from 'react'
import { motion } from 'framer-motion';

const CTA = () => {

  const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

  return (
    <motion.div
      className='py-20 relative'
      variants={containerVariants}
      initial="hidden"
      animate="show"
      viewport={{once:false, amount:0.3}}
    >
      <div className='text-center mb-20 mx-auto max-w-5xl px-6'>
        <motion.div 
        className='glass-card rounded-3xl p-10'
         variants={itemVariants}>
          <motion.span 
          variants={itemVariants}
          className='text-accent font-medium uppercase tracking-wider text-sm'>Ready to Begin?</motion.span>

          <motion.h2 
          variants={itemVariants}
          className='text-4xl md:text-5xl font-bold mt-4 text-white mb-6'>Let's Build Something Extraordinary Together</motion.h2>

          <motion.p 
          variants={itemVariants}
          className='text-xl text-gray-200 mb-10 max-w-2xl mx-auto'>Schedule a consultation with our team to discuss your project vision and requirements.</motion.p>

          <motion.a href="#Contact" 
          variants={itemVariants}
          className='inline-block  border border-accent text-white hover:font-bold py-3 px-8 rounded-full hover:bg-accent transition duration-300'>
            Get in Touch
          </motion.a>

        </motion.div>
      </div>
    </motion.div>
  )
}

export default CTA
