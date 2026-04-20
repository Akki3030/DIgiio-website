import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../assets/assets'
import { FaStarHalfAlt, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Auto-scroll that pauses on hover
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-400 text-sm" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />);
    }

    const renderEmptyStars = 5 - stars.length;

    for (let i = 0; i < renderEmptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-600 text-sm" />);
    }

    return stars;
  };

  const getVisibleTestimonials = () => {
    return [
      testimonials[currentIndex % testimonials.length],
      testimonials[(currentIndex + 1) % testimonials.length],
      testimonials[(currentIndex + 2) % testimonials.length]
    ];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className='py-28 relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='text-center mb-16'>
          <span className='text-accent font-medium uppercase tracking-wider text-sm'>Client Testimonials</span>
          <h2 className='text-4xl md:text-5xl mt-4 mb-6 font-bold '>Trusted by Visionaries</h2>
        </div>

        {/* Carousel Container */}
        <div
          className='relative w-full flex flex-col md:flex-row items-center gap-4'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <button
            onClick={prevTestimonial}
            className='hidden md:flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-white/10 hover:border-accent transition group z-10 flex-shrink-0'
            aria-label="Previous Testimonials"
          >
            <FaChevronLeft className='text-gray-300 group-hover:text-accent transition-colors' />
          </button>

          <div className='w-full overflow-hidden'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className='w-full px-2 grid grid-cols-1 md:grid-cols-3 gap-6'
              >
                {visibleTestimonials.map((testimonial, idx) => (
                  <div key={idx} className='glass-card rounded-2xl p-6 w-full flex flex-col items-center text-center'>
                    <div className='mb-4'>
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className='w-14 h-14 rounded-full object-cover mx-auto ring-2 ring-accent/30'
                      />
                    </div>
                    <div className='mb-4 flex-grow'>
                      <div className='flex justify-center mb-3'>{renderStars(testimonial.rating)}</div>
                      <p className='text-sm tracking-wide mb-4 text-gray-300 leading-relaxed'>
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div>
                      <h4 className='font-bold text-base text-white'>{testimonial.name}</h4>
                      <p className='text-accent text-xs uppercase tracking-widest mt-1'>{testimonial.position}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={nextTestimonial}
            className='hidden md:flex items-center justify-center w-12 h-12 rounded-full glass-card hover:bg-white/10 hover:border-accent transition group z-10 flex-shrink-0'
            aria-label="Next Testimonials"
          >
            <FaChevronRight className='text-gray-300 group-hover:text-accent transition-colors' />
          </button>

        </div>

        {/* Mobile Controls & Dots */}
        <div className='flex items-center justify-center mt-10 gap-6'>

          <button onClick={prevTestimonial} className='md:hidden p-3 rounded-full glass-card text-gray-300'>
            <FaChevronLeft />
          </button>

          <div className='flex gap-3'>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-accent w-8' : 'glass-card hover:bg-gray-400 w-2.5'}`}
                aria-label={`Go to testimonial group ${idx + 1}`}
              />
            ))}
          </div>

          <button onClick={nextTestimonial} className='md:hidden p-3 rounded-full glass-card text-gray-300'>
            <FaChevronRight />
          </button>

        </div>

      </div>
    </div>
  )
}

export default Testimonials;
