import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'

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

export default function AboutHero() {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const fullText = 'Luthfi Alfaridz Fahmi'

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
    <section className="relative py-12 md:py-20 px-4 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
<motion.div className="space-y-2" variants={itemVariants}>
              <p className="text-primary font-semibold text-sm md:text-base">TENTANG SAYA</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{displayedText}</span>
                {isTyping && <span className="animate-pulse">|</span>}
              </h1>
            </motion.div>

            <motion.p className="text-lg text-muted-foreground leading-relaxed" variants={itemVariants}>
              Seorang freelance programmer berpengalaman dengan passion untuk menciptakan solusi teknologi yang inovatif dan berdampak. Saya mengkhususkan diri dalam pengembangan web modern dengan fokus pada user experience dan performa optimal.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 pt-4" variants={itemVariants}>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <SafeIcon name="Zap" className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">5+ Tahun Pengalaman</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/10 border border-secondary/30">
                <SafeIcon name="Award" className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">50+ Proyek Selesai</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30">
                <SafeIcon name="Users" className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">30+ Klien Puas</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Image */}
          <motion.div
            className="relative h-96 md:h-full min-h-96"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl animate-pulse"></div>
            <div className="relative h-full rounded-2xl overflow-hidden border border-primary/30 glass-effect flex items-center justify-center">
<img
                src="https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/12/5/71cb310e-cb7a-4458-81bb-ec479a1c4368.png"
                alt="Luthfi Alfaridz Fahmi"
                className="w-full h-full object-cover"
                id="ismwv"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}