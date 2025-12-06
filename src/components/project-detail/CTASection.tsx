
'use client'

import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface CTASectionProps {}

export default function CTASection({}: CTASectionProps) {
  return (
    <section className="relative py-12 md:py-20">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl glass-effect border border-primary/30 space-y-6 animate-slide-up">
            {/* Content */}
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="gradient-text">Tertarik Memulai Proyek Serupa?</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Saya siap membantu Anda mewujudkan ide-ide inovatif dengan teknologi terkini dan solusi yang scalable.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <SafeIcon name="CheckCircle" className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Konsultasi Gratis</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <SafeIcon name="CheckCircle" className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Timeline Fleksibel</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <SafeIcon name="CheckCircle" className="w-4 h-4 text-primary" />
                </div>
                <span className="text-foreground">Support Penuh</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a href="./contact-and-social.html">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50 group"
                >
                  <span>Hubungi Saya Sekarang</span>
                  <SafeIcon
                    name="ArrowRight"
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
              <a href="./portfolio-showcase.html">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 group"
                >
                  <span>Lihat Proyek Lain</span>
                  <SafeIcon
                    name="ArrowRight"
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </a>
            </div>

            {/* Contact Info */}
            <div className="pt-4 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
              <a
                href="mailto:luthfi@example.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <SafeIcon name="Mail" className="w-4 h-4" />
                <span>luthfi@example.com</span>
              </a>
              <div className="hidden sm:block w-px h-4 bg-border"></div>
              <a
                href="https://wa.me/6281234567890"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <SafeIcon name="MessageCircle" className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
