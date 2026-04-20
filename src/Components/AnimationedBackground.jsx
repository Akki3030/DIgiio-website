import React from 'react'
import { motion } from 'framer-motion'

const AnimationedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* ── Primary gradient blobs ── */}

      {/* Top-left — Electric Blue */}
      <motion.div
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,26,255,0.35) 0%, rgba(0,26,255,0) 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Bottom-right — Accent Pink */}
      <motion.div
        className="absolute -bottom-32 -right-20 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,45,117,0.3) 0%, rgba(255,45,117,0) 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          y: [0, 50, 0],
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Center — Cyan / Teal */}
      <motion.div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[450px] h-[450px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(26,235,250,0.2) 0%, rgba(26,235,250,0) 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Top-right — Purple */}
      <motion.div
        className="absolute -top-10 right-1/4 w-[350px] h-[350px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(139,92,246,0.25) 0%, rgba(139,92,246,0) 70%)',
          filter: 'blur(80px)',
        }}
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 3,
        }}
      />

      {/* Bottom-left — Deep Blue */}
      <motion.div
        className="absolute bottom-1/4 -left-10 w-[400px] h-[400px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(0,26,255,0.2) 0%, rgba(0,26,255,0) 70%)',
          filter: 'blur(90px)',
        }}
        animate={{
          y: [0, -25, 0],
          x: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 4,
        }}
      />

      {/* ── Subtle grid overlay for tech feel ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* ── Floating particles ── */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-white/20"
          style={{
            top: `${15 + i * 15}%`,
            left: `${10 + i * 16}%`,
          }}
          animate={{
            y: [0, -60, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: 5 + i * 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  )
}

export default AnimationedBackground
