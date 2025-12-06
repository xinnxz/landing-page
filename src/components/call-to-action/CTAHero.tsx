
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import GlowButton from '@/components/common/GlowButton'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
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

export default function CTAHero() {
  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1s' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all"
          variants={itemVariants}
        >
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-medium text-primary">Siap untuk Memulai?</span>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="space-y-4"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">Wujudkan Visi Digital Anda</span>
            <br />
            <span className="text-foreground">Bersama Saya</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dari konsep hingga peluncuran, kami siap mengubah ide Anda menjadi solusi teknologi yang powerful dan inovatif. Mari kita ciptakan sesuatu yang luar biasa bersama.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          variants={itemVariants}
        >
          <GlowButton
            variant="primary"
            glowIntensity="high"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold"
            onClick={() => window.location.href = './contact-form.html'}
          >
            <SafeIcon name="Zap" className="w-5 h-5 mr-2 inline" />
            Hubungi Saya Sekarang
          </GlowButton>
          
          <Button
            variant="outline"
            className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-primary/50 hover:border-primary hover:bg-primary/10"
            onClick={() => window.location.href = './skills-and-services.html'}
          >
            <SafeIcon name="ArrowRight" className="w-5 h-5 mr-2 inline" />
            Lihat Layanan Saya
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-primary/20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="space-y-2" variants={statItemVariants}>
            <div className="text-3xl md:text-4xl font-bold gradient-text">50+</div>
            <p className="text-sm text-muted-foreground">Proyek Selesai</p>
          </motion.div>
          <motion.div className="space-y-2" variants={statItemVariants}>
            <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
            <p className="text-sm text-muted-foreground">Kepuasan Klien</p>
          </motion.div>
          <motion.div className="space-y-2" variants={statItemVariants}>
            <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
            <p className="text-sm text-muted-foreground">Tahun Pengalaman</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
