import React from 'react'
import { projects } from '../assets/assets';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Work = () => {

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 0.5, transition: { staggerChildren: 0.3 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

  return (
    <div id='work' className='py-28 relative overflow-hidden'>
      <div className='max-w-5xl mx-auto px-6'>
<div className='text-center mb-20'>
  <span className='text-accent font-bold uppercase tracking-widest text-sm '>Our Portfolio</span>
  <h2 className='text-4xl font-extrabold md:text-5xl'>Selected Case Studies</h2>
  <p className='text-gray-400 text-lg mb-8'>Explore our award-winning projects that push the boundaries of digital innovation.</p>
</div>

<motion.div
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.3 }}
>
  {projects.map((project, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className='group relative rounded-3xl overflow-hidden h-96 lg:h-96'
    >
      <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-60'></div>

      <img
        src={project.image}
        alt={project.title}
        className='w-full h-full object-cover group-hover:scale-105 transition duration-300'
      />

      <div className='absolute bottom-0 left-0 p-10 z-20'>
        <span className={`${project.typeColor} font-bold`}>
          {project.type}
        </span>

        <h3 className='text-3xl font-bold mt-2 mb-4'>
          {project.title}
        </h3>

        <p className='text-gray-300 mb-6'>
          {project.description}
        </p>

        <a href="#" className={`${project.linkColor} font-bold flex items-center group`}>
          View case study
          <FaArrowRight className='ml-3 group-hover:ml-4 transition-all' />
        </a>
      </div>
    </motion.div>
  ))}
</motion.div>
<div className='mt-10 text-center'>
  <a href="" className="text-accent inline-flex group px-6 py-3 border-2 border-accent rounded-full font-bold flex items-center group">
    View All Projects
    <FaArrowRight className='ml-3 group-hover:ml-4 transition-all' />
  </a>
</div>

      </div>
    </div>
  )
}

export default Work
