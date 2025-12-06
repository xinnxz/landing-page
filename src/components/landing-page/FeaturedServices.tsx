'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'
import GlowButton from '@/components/common/GlowButton'

interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

const services: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Membangun situs web modern, responsif, dan performa tinggi dengan teknologi terkini untuk bisnis Anda',
    icon: 'Code2',
    features: ['React', 'Next.js', 'TypeScript', 'Full-Stack'],
  },
  {
    id: 'game-dev',
    title: 'Game Development',
    description: 'Mengembangkan game 2D dan 3D menggunakan Unity dengan gameplay yang engaging dan grafis memukau',
    icon: 'Gamepad2',
    features: ['Unity 2D', 'Unity 3D', 'C#', 'Game Design'],
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Merancang antarmuka yang intuitif, menarik, dan user-friendly untuk pengalaman pengguna terbaik',
    icon: 'Palette',
    features: ['Figma', 'Responsive', 'User Research', 'Interactive'],
  },
  {
    id: 'mobile-dev',
    title: 'Mobile Development',
    description: 'Mengembangkan aplikasi mobile native dan cross-platform untuk iOS dan Android yang performan',
    icon: 'Smartphone',
    features: ['React Native', 'Flutter', 'Native', 'Cross-Platform'],
  },
  {
    id: 'api-backend',
    title: 'API & Backend Development',
    description: 'Membangun backend scalable, API robust, dan infrastruktur cloud untuk mendukung aplikasi Anda',
    icon: 'Server',
    features: ['Node.js', 'Express', 'Database', 'API Design'],
  },
  {
    id: 'consulting',
    title: 'Tech Consulting',
    description: 'Konsultasi teknologi untuk memilih stack, arsitektur, dan strategi pengembangan yang tepat',
    icon: 'Lightbulb',
    features: ['Architecture', 'Strategy', 'Best Practices', 'Support'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
}

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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const ctaVariants = {
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

export default function FeaturedServices() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 -translate-y-1/2"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Layanan Unggulan</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Solusi komprehensif untuk semua kebutuhan digital Anda</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group glass-effect p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 hover:scale-105 relative overflow-hidden"
              variants={cardVariants}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-20"></div>

              {/* Icon */}
              <div className="mb-6 inline-flex p-4 rounded-lg bg-primary/10 group-hover:bg-primary/25 transition-all duration-300 group-hover:scale-125 group-hover:shadow-lg group-hover:shadow-primary/40">
                <SafeIcon name={service.icon} className="w-8 h-8 text-primary group-hover:glow-text transition-all duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:glow-text transition-all duration-300">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">{service.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, featureIndex) => (
                  <span
                    key={feature}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/30 group-hover:border-primary/50 transition-all duration-300 group-hover:shadow-md group-hover:shadow-primary/20"
                    style={{ transitionDelay: `${featureIndex * 30}ms` }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            <GlowButton
              variant="primary"
              glowIntensity="high"
              onClick={() => {
                window.location.href = './skills-and-services.html'
              }}
              className="px-8 py-6 text-lg font-semibold group-hover:shadow-[0_0_40px_rgba(34,211,238,0.6)]"
            >
              <SafeIcon name="ArrowRight" className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Lihat Semua Layanan
            </GlowButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}