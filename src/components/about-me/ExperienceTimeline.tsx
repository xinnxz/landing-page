import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'
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

const timelineLineVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: '100%',
    opacity: 1,
    transition: {
      duration: 5,
      ease: 'easeOut',
    },
  },
}

export default function ExperienceTimeline() {
  const isMobile = useIsMobile()
  const experiences = [
    {
      year: '2024 - Sekarang',
      title: 'Senior Freelance Developer',
      company: 'Self-Employed',
      description: 'Mengembangkan solusi web kompleks untuk klien enterprise dengan fokus pada scalability dan performance.'
    },
    {
      year: '2022 - 2024',
      title: 'Full Stack Developer',
      company: 'Tech Startup XYZ',
      description: 'Membangun platform SaaS dari nol dengan React, Node.js, dan PostgreSQL. Meningkatkan user base hingga 10,000 pengguna aktif.'
    },
    {
      year: '2020 - 2022',
      title: 'Frontend Developer',
      company: 'Digital Agency ABC',
      description: 'Mengembangkan website dan aplikasi web untuk berbagai klien korporat. Fokus pada responsive design dan user experience.'
    },
    {
      year: '2019 - 2020',
      title: 'Junior Developer',
      company: 'Web Development Studio',
      description: 'Memulai karir sebagai junior developer, belajar best practices dan mengerjakan proyek-proyek kecil hingga menengah.'
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
            <p className="text-primary font-semibold text-sm md:text-base">PENGALAMAN</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Perjalanan <span className="gradient-text">Profesional</span>
            </h2>
          </motion.div>

{/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            {isMobile ? (
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/50 md:transform md:-translate-x-1/2"></div>
            ) : (
              <motion.div
                className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-primary/50 md:transform md:-translate-x-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={timelineLineVariants}
                style={{
                  filter: 'drop-shadow(0 0 20px hsl(var(--primary) / 0.8)) drop-shadow(0 0 12px hsl(var(--secondary) / 0.6))',
                }}
              ></motion.div>
            )}

            {/* Timeline Items */}
            <motion.div
              className="space-y-8 md:space-y-12"
              variants={containerVariants}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  variants={itemVariants}
                >
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:flex md:flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`md:text-right ${index % 2 === 0 ? '' : 'md:text-left'}`}>
                      <div className="p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-300 group">
                        <p className="text-sm font-semibold text-primary mb-2">{experience.year}</p>
                        <h3 className="text-xl font-bold text-foreground mb-1">{experience.title}</h3>
                        <p className="text-sm text-secondary mb-3">{experience.company}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{experience.description}</p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden md:flex justify-center">
                      <div className="relative w-12 h-12 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-primary animate-pulse"></div>
                      </div>
                    </div>

                    {/* Mobile Timeline Dot */}
                    <div className="md:hidden absolute left-0 top-6 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center transform -translate-x-1/2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>

                    {/* Mobile Content Offset */}
                    <div className="md:hidden pl-8"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}