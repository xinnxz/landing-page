'use client'

import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface Stat {
  value: number
  label: string
  suffix: string
}

const stats: Stat[] = [
  { value: 5, label: 'Tahun Pengalaman', suffix: '+' },
  { value: 50, label: 'Proyek Selesai', suffix: '+' },
  { value: 30, label: 'Klien Puas', suffix: '+' },
  { value: 98, label: 'Tingkat Kepuasan', suffix: '%' },
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

const statItemVariants = {
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

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}
      <span className="text-3xl md:text-4xl">{suffix}</span>
    </div>
  )
}

export default function AnimatedStats() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

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
            <span className="gradient-text">Pencapaian & Pengalaman</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dengan dedikasi penuh, saya telah membantu ratusan klien mewujudkan visi digital mereka
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-effect p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              variants={statItemVariants}
            >
              <div className="space-y-4">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}