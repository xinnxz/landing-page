import { motion } from 'framer-motion'
import GlowButton from '@/components/common/GlowButton'
import SafeIcon from '@/components/common/SafeIcon'

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function AboutCTA() {
  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl blur-3xl"></div>

          {/* Content */}
          <motion.div className="relative p-8 md:p-12 rounded-2xl glass-effect border border-primary/30 text-center space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Siap untuk <span className="gradient-text">Berkolaborasi?</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Saya selalu terbuka untuk diskusi tentang proyek baru, partnership, atau sekadar berbagi ide. Mari kita ciptakan sesuatu yang luar biasa bersama.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlowButton
                variant="primary"
                glowIntensity="high"
                onClick={() => window.location.href = './contact-and-social.html'}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Hubungi Saya
                  <SafeIcon name="ArrowRight" className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </GlowButton>
              <GlowButton
                variant="outline"
                glowIntensity="medium"
                onClick={() => window.location.href = './portfolio-showcase.html'}
                className="group"
              >
                <span className="flex items-center gap-2">
                  Lihat Portofolio
                  <SafeIcon name="ExternalLink" className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </span>
              </GlowButton>
            </div>

            {/* Additional Info */}
            <div className="pt-4 border-t border-primary/20 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <SafeIcon name="Clock" className="w-4 h-4 text-primary" />
                <span>Respons dalam 24 jam</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50"></div>
              <div className="flex items-center gap-2">
                <SafeIcon name="Globe" className="w-4 h-4 text-primary" />
                <span>Bekerja dengan klien global</span>
              </div>
              <div className="hidden sm:block w-1 h-1 rounded-full bg-primary/50"></div>
              <div className="flex items-center gap-2">
                <SafeIcon name="CheckCircle" className="w-4 h-4 text-primary" />
                <span>Konsultasi gratis</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}