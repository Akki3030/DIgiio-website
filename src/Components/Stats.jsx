import React from 'react'
import { motion, scale } from 'framer-motion';
import { stats } from '../assets/assets';

const Stats = () => {

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

  return (
    <div className='py-20 relative'>
      <div className='max-w-5xl mx-auto px-6'>

      <motion.div className='glass-card rounded-3xl p-12'
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      >
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
{stats.map((stat, index) => (
  <motion.div
    key={index}
    variants={itemVariants}
    className='p-6'>
    <h3 className={`text-4xl font-bold ${stat.color}`}>{stat.number}</h3>
    <p className='text-gray-100 uppercase tracking-wider text-sm'>{stat.label}</p>
  </motion.div>
))}
        </div>
      </motion.div>
      </div>
    </div>
  )
}

export default Stats
