
'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'

interface BenefitCard {
  icon: string
  title: string
  description: string
}

const headerVariants = {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

export default function CTABenefits() {
  const benefits: BenefitCard[] = [
    {
      icon: 'Rocket',
      title: 'Pengembangan Cepat',
      description: 'saya menggunakan teknologi terkini untuk memastikan proyek Anda selesai tepat waktu tanpa mengorbankan kualitas.',
    },
    {
      icon: 'Shield',
      title: 'Kode Berkualitas Tinggi',
      description: 'Setiap baris kode ditulis dengan standar industri terbaik, mudah dimaintain, dan scalable untuk pertumbuhan masa depan.',
    },
    {
      icon: 'Users',
      title: 'Komunikasi Transparan',
      description: 'Update reguler, feedback loop yang jelas, dan kolaborasi erat memastikan visi Anda terwujud dengan sempurna.',
    },
    {
      icon: 'Zap',
      title: 'Performa Optimal',
      description: 'Website dan aplikasi yang saya buat dioptimalkan untuk kecepatan, SEO, dan user experience terbaik.',
    },
    {
      icon: 'Lock',
      title: 'Keamanan Terjamin',
      description: 'Implementasi best practices keamanan untuk melindungi data dan aset digital Anda dari ancaman cyber.',
    },
    {
      icon: 'TrendingUp',
      title: 'Support Berkelanjutan',
      description: 'Dukungan purna jual yang responsif, maintenance rutin, dan update fitur sesuai kebutuhan bisnis Anda.',
    },
  ]

  return (
    <section className="relative container mx-auto px-4 py-20 md:py-32">
      <motion.div
        className="max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {/* Section Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="gradient-text">Mengapa Memilih Saya?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Saya menawarkan lebih dari sekadar coding. saya memberikan solusi komprehensif untuk kesuksesan digital Anda.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              variants={itemVariants}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 space-y-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <SafeIcon
                    name={benefit.icon}
                    className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Accent line */}
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
