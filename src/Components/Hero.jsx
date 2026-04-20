import React from 'react'
import { easeOut, motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { FaTrophy } from 'react-icons/fa'
const Hero = () => {

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, },
};

  return (
    <div id='home' className='relative pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-screen flex items-center overflow-hidden'>
      <div className='max-w-5xl mx-auto px-6 mx-auto flex flex-col items-center relative z-10'>

{/* {Text sections} */}

<motion.div className='w-full text-center mb-16'
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  whileInView={{opacity: 1, y:0}}
  viewport={{once:false, amount:0.3}}
  transition={{duration:0.6, ease:easeOut}}
>

{/* {Title} */}
<motion.h1 
  className='text-5xl md:text-6xlm lg:text-7xl font-extrabold leading-tight mb-6'
  initial={{ opacity: 0, y: 50 }}
  whileInView={{opacity: 1, y:0}}
  transition={{duration:0.6, ease:easeOut, delay:0.2}}
>
  <span className='text-stroke'>WE BUILD</span> <br />
  <span className='gradient-text'>DIGITAL FUTURES</span>
</motion.h1>
<motion.p
  className='text-xl mx-auto  text-gray-300 max-w-3xl mb-8'
  initial={{ opacity: 0, y: 50 }}
  whileInView={{opacity: 1, y:0}}
  transition={{duration:0.6, ease:easeOut, delay:0.3}}
>
  Nexa transforms businesses through cutting-edge digital solutions that blend innovative design with advanced technology.
</motion.p>


{/* {Call to Action Button} */}
<motion.div
  className='flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6'
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, }}
>
  <motion.a 
  href='#contact'
  className='bg-accent text-dark px-8 py-4 rounded-full font-bold tet-lg text-center hover:bg-opacity-80 transition-all hove:scale-105 duration-300 '
  variants={buttonVariants}>
    Start Your Project
  </motion.a>

  <motion.a 
  href='#works'
  className='border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-bold tet-lg text-center hover:bg-gray-300 hover:text-dark transition-all hove:scale-105 duration-300 '
  variants={buttonVariants}>
    View Your Project
  </motion.a>
</motion.div>
</motion.div>

{/* {Image section} */}
 <div className='w-full flex justfiy-center'>
  <div className='realtive w-full max-w-5xl'>
  <motion.img src={assets.heroImg} alt="Digital Innovation" 
  className='rounded-2xl shadow-2xl w-full'
  initial={{ opacity: 0, y: 50 }}
  whileInView={{opacity: 1, y:0}}
  transition={{duration:0.6, delay:0.8}}
  />

  { /* floating award box */}

<motion.div className='absolute -bottom-6 -right-6 bg-dark p-6 rounded-2xl shadow-xl border border-gray-800 w-3/4'
  initial={{ opacity: 0, y: 50 }}
  whileInView={{opacity: 1, y:0}}
  transition={{duration:0.6, delay:1}}
>
  <div className='flex items-center  '>
<div className='bg-accent/70 bg-opacity-20 p-3 rounded-lg mr-4'>
  <FaTrophy  />
</div>
<div className=''>
  <h3 className='text-xl font-bold'>Award Winning</h3>
  <p className='text-sm text-gray-300'>Recognized by THEABHISHEKCODES 2025</p>
</div>
  </div>
</motion.div>

  </div>
 </div>


      </div>      
    </div>
  )
}

export default Hero
