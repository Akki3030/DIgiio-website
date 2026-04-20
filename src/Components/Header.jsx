import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ isDarkMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = ['Home', 'Services', 'Work', 'About', 'Contact'];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='fixed top-0 left-0 w-full z-50 backdrop-blur-2xl bg-black/10 dark:bg-black/40 border-b border-gray-500/10 shadow-sm'
    >
      <div className='max-w-[1440px] mx-auto px-6 lg:px-12 py-4 lg:py-5 flex justify-between items-center'>
        
        {/* Logo */}
        <motion.a
          href="#"
          className='text-primary gradient-text text-3xl font-bold flex-shrink-0'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          Digiio
        </motion.a>

        {/* Desktop Navigation */}
        <nav className='hidden lg:flex items-center space-x-10'>
          {navItems.map((nav, index) => (
            <motion.a
              key={index}
              href={nav === 'Home' ? '#' : `#${nav.toLowerCase()}`}
              className='text-base font-medium text-gray-300 hover:text-accent transition-colors relative group py-2'
              whileHover={{ y: -2 }}
            >
              {nav}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Desktop Right Side (CTA + Theme Toggle) */}
        <div className='hidden lg:flex items-center space-x-6'>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='text-2xl text-gray-300 hover:text-accent transition-colors'
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.a
            href="#contact"
            className='bg-accent text-white px-8 py-2.5 rounded-full font-medium shadow-xl hover:shadow-accent/40 hover:bg-opacity-90 transition-all shadow-accent/20'
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile Right Side (Theme Toggle + Hamburger) */}
        <div className='flex lg:hidden items-center space-x-5'>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9, rotate: -15 }}
            className='text-2xl text-gray-300'
            onClick={toggleTheme}
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className='text-2xl text-gray-300 focus:outline-none'
            onClick={toggleMenu}
            aria-label="Toggle Mobile Menu"
          >
            <FaBars />
          </motion.button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='fixed inset-0 h-[100dvh] w-full bg-black/95 flex flex-col items-center justify-center space-y-8 z-[60] lg:hidden backdrop-blur-3xl'
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className='absolute top-6 right-6 text-4xl text-gray-400 hover:text-accent transition-colors'
              onClick={toggleMenu}
            >
              <FaTimes />
            </motion.button>

            {/* Nav Links */}
            {navItems.map((nav, index) => (
              <motion.a
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                href={nav === 'Home' ? '#' : `#${nav.toLowerCase()}`}
                className='text-3xl font-semibold text-gray-200 hover:text-accent transition-colors tracking-wide'
                whileHover={{ scale: 1.1 }}
                onClick={toggleMenu}
              >
                {nav}
              </motion.a>
            ))}

            {/* Mobile CTA */}
            <motion.a
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: navItems.length * 0.1 }}
              href="#contact"
              className='mt-8 bg-accent text-white px-10 py-4 rounded-full font-bold text-xl shadow-[0_0_20px_rgba(255,45,117,0.4)] border border-accent/50'
              whileTap={{ scale: 0.95 }}
              onClick={toggleMenu}
            >
              Get Started
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header
