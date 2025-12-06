
'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'

interface ProcessStep {
  number: string
  title: string
  description: string
  icon: string
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
      staggerChildren: 0.12,
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

export default function CTAProcess() {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Konsultasi Awal',
      description: 'Kami mendengarkan visi Anda, memahami kebutuhan bisnis, dan merencanakan strategi terbaik untuk proyek Anda.',
      icon: 'MessageSquare',
    },
    {
      number: '02',
      title: 'Desain & Planning',
      description: 'Tim kami membuat wireframe, mockup, dan technical specification yang detail untuk memastikan semua pihak aligned.',
      icon: 'Palette',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Kami mulai mengembangkan dengan metodologi agile, memberikan update berkala dan melibatkan Anda dalam setiap tahap.',
      icon: 'Code2',
    },
    {
      number: '04',
      title: 'Testing & Launch',
      description: 'Quality assurance menyeluruh, testing di berbagai device, dan deployment yang smooth ke production environment.',
      icon: 'CheckCircle2',
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
            <span className="gradient-text">Proses Kerja Kami</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari ide pertama hingga peluncuran sukses, kami mengikuti proses yang terstruktur dan transparan.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20"></div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="relative group"
                variants={itemVariants}
              >
                {/* Step Card */}
                <div className="relative z-10 space-y-4">
                  {/* Number Circle */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 border-2 border-primary/50 flex items-center justify-center group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/30 transition-all">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-6 right-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <SafeIcon
                      name={step.icon}
                      className="w-6 h-6 text-primary group-hover:scale-110 transition-transform"
                    />
                  </div>

                  {/* Content */}
                  <div className="pt-4 space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Timeline info for mobile */}
        <motion.div
          className="lg:hidden mt-12 space-y-4"
          variants={itemVariants}
        >
          <p className="text-center text-sm text-muted-foreground">
            Setiap tahap dirancang untuk memastikan hasil terbaik dengan komunikasi yang jelas dan transparan.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
