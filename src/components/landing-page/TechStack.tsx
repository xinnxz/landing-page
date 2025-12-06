'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'
import { TECHNICAL_SKILLS } from '@/data/skills_services'

const categories = [
  { id: 'Frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { id: 'Backend', label: 'Backend', color: 'from-purple-500 to-pink-500' },
  { id: 'Database', label: 'Database', color: 'from-orange-500 to-red-500' },
  { id: 'DevOps', label: 'DevOps & Tools', color: 'from-green-500 to-emerald-500' },
  { id: 'Lainnya', label: 'Lainnya', color: 'from-indigo-500 to-violet-500' },
]

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

const categoryVariants = {
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

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

const ctaVariants = {
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

export default function TechStack() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

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
            <span className="gradient-text">Tech Stack & Tools</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Teknologi modern yang saya gunakan untuk membangun solusi terbaik</p>
        </motion.div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={categoryVariants}
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${category.color}`}></div>
                {category.label}
              </h3>

{/* Tech Grid */}
               <motion.div
                 className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.06,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
{TECHNICAL_SKILLS
                   .filter((tech) => tech.category === category.id)
                   .map((tech, index) => (
                     <motion.div
                       key={tech.id}
                       className="group glass-effect p-4 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:shadow-primary/30 relative overflow-hidden"
                       variants={techItemVariants}
                     >
                       {/* Background glow on hover */}
                       <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400 -z-10"></div>

                       {/* Outer glow ring */}
                       <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-60 blur-md transition-opacity duration-400 -z-20"></div>

                       <SafeIcon
                         name={tech.iconName}
                         className="w-6 h-6 text-primary group-hover:text-primary group-hover:scale-125 group-hover:glow-text transition-all duration-300"
                       />
                       <span className="text-sm font-medium text-center text-foreground group-hover:glow-text transition-all duration-300">{tech.name}</span>
                       <div className="w-full h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     </motion.div>
                   ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center p-8 glass-effect rounded-xl border border-primary/20 group relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ctaVariants}
        >
          {/* Background animation */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-500 -z-20"></div>

          <h3 className="text-2xl font-bold mb-4 group-hover:glow-text transition-all duration-300">Siap untuk Proyek Berikutnya?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto group-hover:text-foreground/80 transition-colors duration-300">
            Mari kita ciptakan sesuatu yang luar biasa bersama. Hubungi saya untuk memulai perjalanan digital Anda.
          </p>
          <button
            onClick={() => {
              window.location.href = './contact-and-social.html'
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] group/btn"
          >
            <SafeIcon name="MessageSquare" className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
            Hubungi Saya Sekarang
          </button>
        </motion.div>
      </div>
    </section>
  )
}