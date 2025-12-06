
'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'

interface Service {
  title: string
  description: string
  icon: string
  features: string[]
  price: string
}

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Pengembangan website modern dan responsif dengan teknologi terkini',
    icon: 'Globe',
    features: [
      'Responsive Design',
      'SEO Optimized',
      'Performance Focused',
      'Modern Stack',
    ],
    price: 'Mulai dari Rp 5jt',
  },
  {
    title: 'Full Stack Development',
    description: 'Solusi lengkap dari frontend hingga backend dengan database integration',
    icon: 'Layers',
    features: [
      'Frontend & Backend',
      'Database Design',
      'API Development',
      'Deployment',
    ],
    price: 'Mulai dari Rp 10jt',
  },
  {
    title: 'Mobile Web App',
    description: 'Aplikasi web yang berfungsi seperti aplikasi native di mobile',
    icon: 'Smartphone',
    features: [
      'PWA Technology',
      'Offline Support',
      'Push Notifications',
      'App-like Experience',
    ],
    price: 'Mulai dari Rp 8jt',
  },
  {
    title: 'API Development',
    description: 'Pembuatan REST API atau GraphQL yang scalable dan secure',
    icon: 'Network',
    features: [
      'RESTful Architecture',
      'Authentication',
      'Rate Limiting',
      'Documentation',
    ],
    price: 'Mulai dari Rp 3jt',
  },
  {
    title: 'Website Optimization',
    description: 'Optimasi performa dan SEO untuk website yang sudah ada',
    icon: 'Zap',
    features: [
      'Performance Audit',
      'SEO Optimization',
      'Security Hardening',
      'Monitoring Setup',
    ],
    price: 'Mulai dari Rp 2jt',
  },
  {
    title: 'Consulting & Support',
    description: 'Konsultasi teknis dan dukungan berkelanjutan untuk project Anda',
    icon: 'MessageSquare',
    features: [
      'Technical Advice',
      'Code Review',
      'Architecture Design',
      'Ongoing Support',
    ],
price: 'Mulai dari Rp 1jt/bulan',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
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

export default function ServicesSection() {
return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="space-y-12">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Layanan Profesional
          </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
             Berbagai layanan freelance yang dapat disesuaikan dengan kebutuhan project Anda
           </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="group glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                <SafeIcon
                  name={service.icon}
                  className="w-7 h-7 text-primary"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <SafeIcon
                      name="Check"
                      className="w-4 h-4 text-primary flex-shrink-0"
                    />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="pt-4 border-t border-border/50">
                <p className="text-lg font-bold text-primary">{service.price}</p>
</div>
            </motion.div>
           ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="glass-effect rounded-xl p-8 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-2">
              <SafeIcon
                name="Clock"
                className="w-8 h-8 text-primary mx-auto"
              />
              <h4 className="font-bold text-foreground">Fleksibel</h4>
              <p className="text-sm text-muted-foreground">
                Jadwal kerja yang dapat disesuaikan dengan kebutuhan Anda
              </p>
            </div>
            <div className="text-center space-y-2">
              <SafeIcon
                name="Shield"
                className="w-8 h-8 text-primary mx-auto"
              />
              <h4 className="font-bold text-foreground">Terpercaya</h4>
              <p className="text-sm text-muted-foreground">
                Komitmen penuh terhadap kualitas dan deadline project
              </p>
            </div>
            <div className="text-center space-y-2">
              <SafeIcon
                name="Zap"
                className="w-8 h-8 text-primary mx-auto"
              />
              <h4 className="font-bold text-foreground">Cepat</h4>
              <p className="text-sm text-muted-foreground">
                Delivery yang efisien tanpa mengorbankan kualitas
              </p>
            </div>
</div>
        </motion.div>
      </div>
    </section>
  )
}
