
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import GlowButton from '@/components/common/GlowButton'

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

const industryVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.4,
    },
  },
}

const industryItemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function CTAFinal() {
  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: '1.5s' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      ></motion.div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={itemVariants}
      >
        {/* Main Card */}
        <motion.div
          className="glass-effect border border-primary/30 rounded-2xl p-8 md:p-16 space-y-8 hover:border-primary/60 transition-all duration-300"
          variants={itemVariants}
        >
          {/* Content */}
          <motion.div
            className="space-y-6 text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              <span className="gradient-text">Jangan Tunda Lagi</span>
              <br />
              <span className="text-foreground">Mulai Proyek Anda Hari Ini</span>
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Setiap hari yang berlalu adalah kesempatan yang hilang untuk mengembangkan bisnis Anda. Mari kita mulai perjalanan transformasi digital Anda sekarang juga. Hubungi kami untuk konsultasi gratis dan dapatkan proposal yang disesuaikan dengan kebutuhan Anda.
            </p>

            {/* Urgency Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/30"
              variants={itemVariants}
            >
              <div className="w-2 h-2 rounded-full bg-destructive animate-pulse"></div>
              <span className="text-sm font-medium text-destructive">Penawaran Terbatas - Hubungi Sekarang</span>
            </motion.div>
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
              <SafeIcon name="Mail" className="w-5 h-5 mr-2 inline" />
              Hubungi Saya Sekarang
            </GlowButton>

            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold border-primary/50 hover:border-primary hover:bg-primary/10"
              onClick={() => window.location.href = './contact-and-social.html'}
            >
              <SafeIcon name="ArrowLeft" className="w-5 h-5 mr-2 inline" />
              Kembali ke Kontak
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="pt-8 border-t border-primary/20 space-y-4"
            variants={itemVariants}
          >
            <p className="text-sm text-muted-foreground text-center">Dipercaya oleh klien dari berbagai industri</p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              variants={industryVariants}
            >
              {['Startup', 'E-Commerce', 'Corporate', 'Agency', 'SaaS'].map((industry) => (
                <motion.div
                  key={industry}
                  className="px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-foreground/80"
                  variants={industryItemVariants}
                >
                  {industry}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center space-y-4"
          variants={itemVariants}
        >
          <p className="text-muted-foreground">
            Atau jelajahi lebih lanjut tentang keahlian dan layanan kami
          </p>
          <Button
            variant="ghost"
            className="text-primary hover:text-primary hover:bg-primary/10"
            onClick={() => window.location.href = './skills-and-services.html'}
          >
            <SafeIcon name="ChevronDown" className="w-5 h-5 mr-2 inline" />
            Lihat Layanan Lengkap
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
