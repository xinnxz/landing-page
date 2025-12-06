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

export default function WorkPhilosophy() {
  const philosophies = [
    {
      number: '01',
      title: 'Kualitas Pertama',
      description: 'Setiap baris kode ditulis dengan standar kualitas tertinggi. Saya percaya bahwa kode yang baik adalah investasi jangka panjang.'
    },
    {
      number: '02',
      title: 'Komunikasi Jelas',
      description: 'Transparansi dan komunikasi terbuka adalah kunci kesuksesan proyek. Saya selalu update klien tentang progress dan challenges.'
    },
    {
      number: '03',
      title: 'Inovasi Berkelanjutan',
      description: 'Teknologi terus berkembang. Saya selalu mencari cara baru dan lebih baik untuk menyelesaikan masalah dengan efisien.'
    },
    {
      number: '04',
      title: 'Kepuasan Klien',
      description: 'Kesuksesan Anda adalah kesuksesan saya. Saya berkomitmen untuk memberikan hasil yang melebihi ekspektasi.'
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
            <p className="text-primary font-semibold text-sm md:text-base">FILOSOFI KERJA</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Prinsip yang Memandu <span className="gradient-text">Setiap Proyek</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Filosofi kerja saya dibangun atas fondasi kualitas, integritas, dan dedikasi terhadap kesuksesan klien.
            </p>
          </motion.div>

          {/* Philosophy Cards */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6" variants={containerVariants}>
            {philosophies.map((philosophy, index) => (
              <motion.div
                key={index}
                className="relative p-8 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all duration-500 group overflow-hidden"
                variants={itemVariants}
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-foreground flex-1">{philosophy.title}</h3>
                    <span className="text-4xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors">
                      {philosophy.number}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{philosophy.description}</p>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}