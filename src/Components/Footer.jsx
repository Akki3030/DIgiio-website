import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaDribbble,
  FaGithub,
  FaArrowUp,
  FaPaperPlane,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: '3D Visualization', href: '#services' },
        { name: 'AI Integration', href: '#services' },
        { name: 'Mobile Apps', href: '#services' },
        { name: 'Web3 Development', href: '#services' },
        { name: 'Immersive Apps', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Work', href: '#work' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [

        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'Cookie Policy', href: '#' },
      ],
    },
  ]

  const socialLinks = [
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedinIn />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: '#', label: 'Instagram' },
    { icon: <FaDribbble />, href: '#', label: 'Dribbble' },

  ]

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: 'New Delhi, India' },
    { icon: <FaEnvelope />, text: 'hello@digiio.agency' },
    { icon: <FaPhoneAlt />, text: '+91 98765 43210' },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <footer className="relative overflow-hidden">
      {/* ─── Decorative Top Gradient Line ─── */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />

      {/* ─── Decorative Background Orbs ─── */}
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      {/* ═══════════ CTA / Newsletter Banner ═══════════ */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-6xl mx-auto px-6 -mb-2 pt-16"
      >
        <div className="glass-card rounded-2xl px-8 py-10 md:py-12 md:px-14 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="text-center md:text-left max-w-md">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Ready to{' '}
              <span className="gradient-text">Transform</span> your brand?
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Subscribe to our newsletter and get the latest insights, trends,
              and exclusive offers delivered straight to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <form
            onSubmit={handleSubscribe}
            className="flex w-full md:w-auto items-center gap-0 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden focus-within:border-accent/50 transition-colors duration-300"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="bg-transparent px-5 py-3 text-sm text-white placeholder-gray-500 outline-none flex-1 min-w-0"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent text-white px-6 py-3 text-sm font-semibold flex items-center gap-2 cursor-pointer whitespace-nowrap transition-colors duration-300 hover:bg-accent/80"
            >
              {subscribed ? (
                'Subscribed ✓'
              ) : (
                <>
                  Subscribe <FaPaperPlane className="text-xs" />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.section>

      {/* ═══════════ Main Footer Grid ═══════════ */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="max-w-6xl mx-auto px-6 pt-20 pb-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* ── Column 1 : Brand ── */}
          <motion.div variants={itemVariants} className="lg:col-span-2 space-y-5">
            <a href="#" className="inline-block">
              <span className="text-3xl font-bold gradient-text">Digiio</span>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Pushing the boundaries of digital innovation to create transformative experiences.
            </p>

            {/* Contact Info */}
            <ul className="space-y-3 pt-2">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-400 text-sm group">
                  <span className="text-accent group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  {item.text}
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── Columns 2-4 : Link Groups ── */}
          {footerLinks.map((group, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <h4 className="text-white font-semibold mb-4 tracking-wide text-sm uppercase">
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link, i) => (
                  <li key={i}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 text-sm hover:text-accent transition-colors duration-300 inline-block"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ═══════════ Bottom Bar ═══════════ */}
      <div className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Digiio. All rights reserved. Crafted
            with ❤️ in India.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.15, y: -3 }}
            whileTap={{ scale: 0.9 }}
            className="group flex items-center gap-2 text-gray-500 hover:text-accent text-xs font-medium cursor-pointer transition-colors duration-300"
          >
            Back to top
            <span className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center group-hover:border-accent/50 group-hover:bg-accent/10 transition-all duration-300">
              <FaArrowUp className="text-[10px]" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
