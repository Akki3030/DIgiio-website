import { motion } from 'framer-motion';
import React from 'react'
import { FaMap, FaMapMarked, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  const [fromData, setFormData] = React.useState({
    name: "",
    email: "",
    message: ""
  }); const handleChange = (e) => {
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', fromData);
    alert('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: "", email: "", message: "" });
  };


  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };


  return (
    <motion.div
      id='contact'
      className='py-28 relative'
      variants={containerVariants}
      initial="hidden"
      animate="show"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className='mb-20 mx-auto max-w-5xl px-6'>

        <div className='flex  flex-col lg:flex-row'>
          {/* {Left section} */}
          <motion.div
           variants={itemVariants}
           className='lg:w-1/2 mb-16 lg:mb-0 lg:pr-12'>
            <motion.span
            variants={itemVariants}
            className='text-accent font-medium uppercase tracking-wider text-sm'>
              Contact Us
            </motion.span>
            <motion.h2
            variants={itemVariants}
            className='text-4xl md:text-5xl font-bold mt-4 text-white mb-6'>Get In Touch</motion.h2>
            <motion.p 
            variants={itemVariants}
            className='text-base text-gray-200 mb-10'>Have a project in mind or want to learn more about our services? Reach out to our team.
            </motion.p>


            <motion.div 
            variants={itemVariants}
            className='space-y-8'>
              <motion.div 
              variants={itemVariants}
              className='flex items-start'>
                <div className='bg-primary-light/20 bg-opacity-20 p-4 rounded-xl mr-6'>
                  <FaMapMarkerAlt className='text-primary-light text-xl' />
                </div>
                <div>
                  <h4 className='font-bold tet-xl mb-2'>Our Headquarters</h4>
                  <p className='text-gray-500'>123 Business Avenue, Suite 100<br />City, State 12345</p>
                </div>
              </motion.div >

              <motion.div 
              variants={itemVariants}
              className='flex items-start'>
                <div className='bg-primary-light/20 bg-opacity-20 p-4 rounded-xl mr-6'>
                  <FaMapMarkerAlt className='text-primary-light text-xl' />
                </div>
                <div>
                  <h4 className='font-bold tet-xl mb-2'>Email Us
                  </h4>
                  <p className='text-gray-500'>contact@digiio.com<br />support@digiio.digital
                  </p>
                </div>
              </motion.div >


              <motion.div 
              variants={itemVariants}
              className='flex items-start'>
                <div className='bg-primary-light/20 bg-opacity-20 p-4 rounded-xl mr-6'>
                  <FaMapMarkerAlt className='text-primary-light text-xl' />
                </div>
                <div>
                  <h4 className='font-bold tet-xl mb-2'>Call Us</h4>
                  <p className='text-gray-500'>+91 123-789-0123<br />Mon-Fri, 9am-6pm PST</p>
                </div>
              </motion.div >


            </motion.div>
          </motion.div>
          {/* {Right section} */}

          <motion.form
          variants={itemVariants}
            className='lg:w-1/2 glass-card p-10 rounded-2xl'
            onSubmit={handleSubmit}
          >
            <motion.div
             variants={itemVariants}
             className='grid grid-cols-1 gap-6 mb-6 md:grid-cols-2'>
              <div>
                <label htmlFor="name" className='block text-gray-300 font-medium mb-2'>Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={fromData.name}
                  onChange={handleChange}
                  className='w-full bg-gray-800 border border-gray-600 px-5 py-3 rounded-lg focus:outline-none placeholder:text-sm'
                  placeholder='Enter your name'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-gray-300 font-medium mb-2'>Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={fromData.email}
                  onChange={handleChange}
                  className='w-full bg-gray-800 border border-gray-600 px-5 py-3 rounded-lg focus:outline-none placeholder:text-sm'
                  placeholder='Enter your email'
                />
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className='mb-6'>
              <label htmlFor="service" className='block text-gray-300 font-medium mb-2 '>Service of Interest</label>
              <select
                id="service"
                name="service"
                value={fromData.services}
                onChange={handleChange}
                className='w-full bg-gray-800 border border-gray-600 px-5 py-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent placeholder:text-sm'
              >
                <option value="">Select a service</option>
                <option value="3d-visualization">3D Visualization</option>
                <option value="ai-integration">AI Integration</option>
                <option value="web-development">Web Development</option>
                <option value="mobile-apps">Mobile Apps</option>
                <option value="immersive-apps">Immersive Apps</option>
                <option value="data-visualization">Data Visualization</option>
                <option value="automation-systems">Automation Systems</option>
              </select>
            </motion.div>

            <motion.div
             variants={itemVariants} className='mb-6'>
              <label htmlFor="message" className='block text-gray-300 font-medium mb-2'>Your Message</label>
              <textarea
                id="message"
                name="message"
                value={fromData.message}
                onChange={handleChange}
                className='w-full bg-gray-800 border border-gray-600 px-5 py-3 rounded-lg focus:outline-none placeholder:text-sm'
                placeholder='Tell us about your project....'
                rows="5"
                required
              />
            </motion.div>
            <motion.button
            variants={itemVariants}
              type="submit"
              className='mt-6 w-full inline-block border border-accent text-white hover:font-bold py-3 px-8 rounded-full hover:bg-accent transition duration-300 cursor-pointer'
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </motion.div>
  )
}

export default Contact
