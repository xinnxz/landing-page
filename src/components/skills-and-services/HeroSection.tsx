'use client'

import { motion } from 'framer-motion'

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      delay: 0.1,
    },
  },
}

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <motion.div
        className="max-w-3xl mx-auto text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text">
          Skill & Layanan
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Teknologi terkini dan layanan profesional untuk mewujudkan visi digital
          Anda
        </p>
      </motion.div>
    </section>
  )
}