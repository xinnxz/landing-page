
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'

interface Skill {
  name: string
  category: string
  proficiency: number
  icon: string
  description: string
}

const skillsData: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    proficiency: 95,
    icon: 'Zap',
    description: 'Library JavaScript untuk UI interaktif',
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    proficiency: 90,
    icon: 'Code',
    description: 'Bahasa pemrograman yang type-safe',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    proficiency: 95,
    icon: 'Palette',
    description: 'Framework CSS utility-first',
  },
  {
    name: 'Next.js',
    category: 'Frontend',
    proficiency: 90,
    icon: 'Layers',
    description: 'Framework React untuk produksi',
  },
  {
    name: 'Vue.js',
    category: 'Frontend',
    proficiency: 85,
    icon: 'Zap',
    description: 'Framework JavaScript progresif',
  },
  {
    name: 'Astro',
    category: 'Frontend',
    proficiency: 88,
    icon: 'Rocket',
    description: 'Static site generator modern',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    proficiency: 92,
    icon: 'Server',
    description: 'Runtime JavaScript di server',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    proficiency: 90,
    icon: 'Zap',
    description: 'Framework web minimalis',
  },
  {
    name: 'Python',
    category: 'Backend',
    proficiency: 85,
    icon: 'Code',
    description: 'Bahasa pemrograman versatile',
  },
  {
    name: 'PostgreSQL',
    category: 'Backend',
    proficiency: 88,
    icon: 'Database',
    description: 'Database relasional powerful',
  },
  {
    name: 'MongoDB',
    category: 'Backend',
    proficiency: 85,
    icon: 'Database',
    description: 'Database NoSQL fleksibel',
  },
  {
    name: 'REST API',
    category: 'Backend',
    proficiency: 92,
    icon: 'Network',
    description: 'Arsitektur API modern',
  },

  // DevOps & Tools
  {
    name: 'Git',
    category: 'DevOps',
    proficiency: 95,
    icon: 'GitBranch',
    description: 'Version control system',
  },
  {
    name: 'Docker',
    category: 'DevOps',
    proficiency: 85,
    icon: 'Box',
    description: 'Containerization platform',
  },
  {
    name: 'AWS',
    category: 'DevOps',
    proficiency: 80,
    icon: 'Cloud',
    description: 'Cloud computing services',
  },
  {
    name: 'CI/CD',
    category: 'DevOps',
    proficiency: 85,
    icon: 'Zap',
    description: 'Continuous integration & deployment',
  },
]

const categories = ['Frontend', 'Backend', 'DevOps']

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

export default function SkillsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredSkills = selectedCategory
    ? skillsData.filter((skill) => skill.category === selectedCategory)
    : skillsData

return (
    <section className="container mx-auto px-4 py-12 md:py-20">
<div className="space-y-12">
        {/* Category Filter */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          <motion.button
            onClick={() => setSelectedCategory(null)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: 0.15, ease: 'easeOut' }}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground glow-border'
                : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
            }`}
          >
            Semua
          </motion.button>
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05, ease: 'easeOut' }}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground glow-border'
                  : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
              className="group glass-effect rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <SafeIcon
                    name={skill.icon}
                    className="w-6 h-6 text-primary"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{skill.name}</h3>
                  <p className="text-xs text-muted-foreground">{skill.category}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4">
                {skill.description}
              </p>

              {/* Proficiency Bar */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-medium text-muted-foreground">
                    Profisiensi
                  </span>
                  <span className="text-xs font-bold text-primary">
                    {skill.proficiency}%
                  </span>
                </div>
                <div className="w-full h-2 bg-card rounded-full overflow-hidden border border-border/50">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
</div>
            </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
