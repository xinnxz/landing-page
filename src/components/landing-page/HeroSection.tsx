'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'
import AnimatedBackground from '@/components/common/AnimatedBackground'
import GlowButton from '@/components/common/GlowButton'
import { PROFILE_DATA } from '@/data/profile'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function HeroSection() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = PROFILE_DATA.headline

  useEffect(() => {
    if (!isTyping || displayedText.length >= fullText.length) {
      setIsTyping(false)
      return
    }

    const timer = setTimeout(() => {
      setDisplayedText(fullText.slice(0, displayedText.length + 1))
    }, 50)

    return () => clearTimeout(timer)
  }, [displayedText, isTyping, fullText])

  return (
<section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-visible">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 grid-pattern pointer-events-none"></div>

      {/* Radial Gradient Overlays */}
      <motion.div
        id="i7f09"
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-20 animate-pulse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

{/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Tagline */}
            <motion.div
              id="ioanl"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 w-fit"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-medium text-primary">{PROFILE_DATA.tagline}</span>
            </motion.div>

            {/* Main Headline with Typewriter Effect */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{displayedText}</span>
                {isTyping && <span className="animate-pulse">|</span>}
              </h1>
              <p id="ivk21" className="text-lg text-muted-foreground max-w-xl"></p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              variants={itemVariants}
            >
              <GlowButton
                variant="primary"
                glowIntensity="high"
                onClick={() => {
                  window.location.href = './about-me.html'
                }}
                className="px-8 py-6 text-lg font-semibold"
              >
                <SafeIcon name="ArrowRight" className="w-5 h-5 mr-2" />
                Pelajari Lebih Lanjut
              </GlowButton>
              <GlowButton
                variant="outline"
                glowIntensity="medium"
                onClick={() => {
                  window.location.href = './contact-and-social.html'
                }}
                className="px-8 py-6 text-lg font-semibold"
              >
                <SafeIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                Hubungi Saya
              </GlowButton>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              className="flex gap-8 pt-8 border-t border-border/50"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="space-y-1 group cursor-default hover:translate-y-[-4px] transition-transform duration-300"
                variants={statItemVariants}
              >
                <p className="text-2xl font-bold text-primary group-hover:glow-text">5+</p>
                <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
              </motion.div>
              <motion.div
                className="space-y-1 group cursor-default hover:translate-y-[-4px] transition-transform duration-300"
                variants={statItemVariants}
              >
                <p className="text-2xl font-bold text-primary group-hover:glow-text">50+</p>
                <p className="text-sm text-muted-foreground">Proyek Selesai</p>
              </motion.div>
              <motion.div
                className="space-y-1 group cursor-default hover:translate-y-[-4px] transition-transform duration-300"
                variants={statItemVariants}
              >
                <p className="text-2xl font-bold text-primary group-hover:glow-text">30+</p>
                <p className="text-sm text-muted-foreground">Klien Puas</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            {/* Glowing Border Circle */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-50 animate-pulse"></div>

            {/* Image Container */}
            <div id="ih57q" className="relative w-full h-full max-w-md max-h-[550px]">
              <div
                id="iv8qi"
                className="absolute inset-0 rounded-2xl border-2 border-primary/30 glow-border overflow-hidden"
                style={{ height: '550px' }}
              >
                <img
                  id="iemqr"
                  src="https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/12/3/0710cc90-db09-43bf-ae88-5652f59824e9.png"
                  alt={PROFILE_DATA.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay Gradient */}
                <div
                  id="it26g"
                  className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"
                  style={{ display: 'none !important' }}
                ></div>
                {/* Tech Badge */}
                <motion.div
                  id="ilzi9d"
                  className="absolute bottom-8 left-8 glass-effect px-4 py-3 rounded-lg backdrop-blur-md border border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-sm font-semibold text-primary">Luthfi Alfaridz Fahmi</p>
                  <p className="text-xs text-muted-foreground">CEO & Founder ReonTech</p>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-float-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float-fast"></div>
              <div
                className="absolute top-1/4 right-1/4 w-20 h-20 bg-primary/15 rounded-full blur-2xl animate-pulse-glow"
                style={{ animationDelay: '0.5s' }}
              ></div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SafeIcon name="ChevronDown" className="w-6 h-6 text-primary" />
        </motion.div>
      </div>
    </section>
  )
}