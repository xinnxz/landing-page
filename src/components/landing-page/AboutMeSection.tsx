'use client'

import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'
import { PROFILE_DATA } from '@/data/profile'
import { TECHNICAL_SKILLS } from '@/data/skills_services'

const imageVariants = {
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

const contentVariants = {
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const skillItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function AboutMeSection() {
  const topSkills = TECHNICAL_SKILLS.slice(0, 6)

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

<div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Profile Image */}
<motion.div
             id="ig1lfz"
             className="relative h-96 lg:h-full min-h-96 flex items-center justify-center"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true, amount: 0.3 }}
             variants={imageVariants}
           >
            {/* Glowing Border Circle */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-50 animate-pulse"></div>

{/* Image Container */}
            <div id="ipnydn" className="relative w-full h-full flex items-center justify-center">
<div id="ig97zh" className="relative rounded-2xl border-2 border-primary/30 glow-border overflow-hidden w-full max-w-sm lg:max-w-md aspect-[5/5.5]">
<img
                   src={PROFILE_DATA.profileImageUrl}
                   alt={PROFILE_DATA.name}
                   className="w-full h-full object-cover"
                   id="ibfe3r"
                 />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Text & Skills */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Section Title */}
            <motion.div className="space-y-4" variants={contentVariants}>
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Tentang Saya</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">{PROFILE_DATA.bio}</p>
            </motion.div>

            {/* Main Skills Highlight */}
            <motion.div className="space-y-4" variants={itemVariants}>
              <h3 className="text-xl font-semibold">Skill Utama</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {topSkills.map((skill, index) => (
                  <motion.div
                    key={skill.id}
                    className="p-4 rounded-lg glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group cursor-default relative overflow-hidden"
                    variants={skillItemVariants}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                    <div className="flex flex-col items-center gap-2 text-center">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                        <SafeIcon name={skill.iconName} className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground group-hover:glow-text transition-all duration-300">{skill.name}</p>
                        <p className="text-xs text-muted-foreground">{skill.level}%</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}