import React from 'react'
import { motion } from 'framer-motion';


const Client = () => {


const clients = ['NVIDIA', 'ADIDAS', 'TESLA', 'GOOGLE', 'INSTAGRAM' , 'MICROSOFT', 'SONY', 'APPLE', 'AMAZON', 'META'];
 
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

  return (
    <div className='py-16 relative z-10'>
      <div className='container mx-auto px-6'>
<p className='text-xl text-center text-gray-300 tracking-wider mb-10'>Trusted by innovative brands worldwide</p>
<motion.div
className='flex flex-wrap justify-center items-center gap-6 mg:gap-12'
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false }}
>
  {clients.map((client, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className='text-xl h-8 font-bold text-gray-300'
    >
      {client}
    </motion.div>
  ))}
</motion.div>
      </div>
    </div>
  )
}

export default Client
