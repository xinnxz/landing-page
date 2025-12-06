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

export default function AboutBio() {
const highlights = [
    {
      icon: 'Code',
      title: 'Full Stack Developer',
      description: 'Menguasai frontend dan backend dengan teknologi terkini untuk solusi end-to-end.'
    },
    {
      icon: 'Palette',
      title: 'UI/UX Focused',
      description: 'Menciptakan interface yang indah dan intuitif dengan perhatian detail tinggi.'
    },
    {
      icon: 'Rocket',
      title: 'Performance Oriented',
      description: 'Mengoptimalkan setiap aspek aplikasi untuk kecepatan dan efisiensi maksimal.'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovative Solutions',
      description: 'Menciptakan solusi kreatif dan inovatif yang mengutamakan pemikiran out-of-the-box.'
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
{/* Bio Text */}
<motion.div className="max-w-3xl mx-auto space-y-6" variants={itemVariants}>
            <p id="iylmkg" className="text-lg text-muted-foreground leading-relaxed">
              Perjalanan saya di dunia programming dimulai dengan rasa penasaran yang mendalam tentang bagaimana teknologi dapat mengubah cara orang bekerja dan berinteraksi. Sejak hari pertama, saya berkomitmen untuk terus belajar dan berkembang mengikuti perkembangan industri yang dinamis.
            </p>
            <p id="ivt1rl" className="text-lg text-muted-foreground leading-relaxed">
              Sebagai freelancer, saya telah bekerja dengan berbagai klien dari startup hingga perusahaan established, membantu mereka mewujudkan visi digital mereka. Setiap proyek adalah kesempatan untuk menciptakan sesuatu yang bermakna dan memberikan nilai tambah nyata.
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-lg group cursor-default"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <SafeIcon name={highlight.icon} className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}