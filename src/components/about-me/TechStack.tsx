import { motion } from 'framer-motion'
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

const headerVariants = {
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

export default function TechStack() {
  const techCategories = [
    {
      category: 'Frontend',
      icon: 'Palette',
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'Vue.js', 'Astro']
    },
    {
      category: 'Backend',
      icon: 'Server',
      technologies: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase']
    },
    {
      category: 'Tools & DevOps',
      icon: 'Wrench',
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Linux']
    },
    {
      category: 'Mobile',
      icon: 'Smartphone',
      technologies: ['React Native', 'Flutter', 'Expo', 'Swift', 'Kotlin']
    }
  ]

  return (
    <section className="relative py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div className="text-center space-y-4" variants={headerVariants}>
            <p className="text-primary font-semibold text-sm md:text-base">KEAHLIAN TEKNIS</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Teknologi yang Saya <span className="gradient-text">Kuasai</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Saya terus belajar dan mengikuti perkembangan teknologi terbaru untuk memberikan solusi terdepan.
            </p>
          </motion.div>

          {/* Tech Categories Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-500 group"
                variants={itemVariants}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <SafeIcon name={category.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.category}</h3>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}