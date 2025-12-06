
import { motion } from 'framer-motion'
import GlowButton from '@/components/common/GlowButton'
import SafeIcon from '@/components/common/SafeIcon'

export default function CTASection() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="space-y-12">
        {/* Main CTA */}
        <motion.div
          className="glass-effect rounded-2xl p-8 md:p-12 border border-primary/30 relative overflow-hidden"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 opacity-50"></div>

          {/* Content */}
          <div className="relative z-10 text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              Siap Memulai Project Anda?
            </h2>
            <p className="text-lg text-muted-foreground">
              Hubungi saya sekarang untuk mendiskusikan kebutuhan project Anda dan dapatkan penawaran terbaik
            </p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GlowButton
                variant="primary"
                glowIntensity="high"
                onClick={() => {
                  window.location.href = './contact-and-social.html'
                }}
                className="group"
              >
                <SafeIcon
                  name="Mail"
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                />
                Hubungi Saya
              </GlowButton>
              <GlowButton
                variant="outline"
                glowIntensity="medium"
                onClick={() => {
                  window.location.href = './portfolio-showcase.html'
                }}
                className="group"
              >
                <SafeIcon
                  name="Briefcase"
                  className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform"
                />
                Lihat Portofolio
              </GlowButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Back to About */}
          <motion.a
            href="./about-me.html"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <SafeIcon
                name="ArrowLeft"
                className="w-5 h-5 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="font-bold text-foreground">Kembali ke Tentang</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Pelajari lebih lanjut tentang latar belakang dan filosofi kerja saya
            </p>
          </motion.a>

          {/* View Portfolio */}
          <motion.a
            href="./portfolio-showcase.html"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <SafeIcon
                name="Briefcase"
                className="w-5 h-5 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="font-bold text-foreground">Lihat Portofolio</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Jelajahi project-project terbaru dan hasil kerja saya
            </p>
          </motion.a>

          {/* Get Offer */}
          <motion.a
            href="./contact-and-social.html"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
            className="glass-effect rounded-xl p-6 hover:border-primary/50 transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <SafeIcon
                name="Zap"
                className="w-5 h-5 text-primary group-hover:scale-110 transition-transform"
              />
              <h3 className="font-bold text-foreground">Dapatkan Penawaran</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Hubungi saya untuk mendapatkan penawaran khusus untuk project Anda
            </p>
          </motion.a>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { label: 'Project Selesai', value: '50+' },
             { label: 'Klien Puas', value: '40+' },
             { label: 'Tahun Pengalaman', value: '5+' },
             { label: 'Teknologi', value: '20+' },
           ].map((stat, index) => (
             <motion.div
               key={stat.label}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.5, delay: 0.3 + index * 0.05, ease: 'easeOut' }}
               className="glass-effect rounded-lg p-4 text-center border border-border/50 hover:border-primary/50 transition-all"
             >
               <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                 {stat.value}
               </p>
               <p className="text-xs md:text-sm text-muted-foreground">
                 {stat.label}
               </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  )
}
