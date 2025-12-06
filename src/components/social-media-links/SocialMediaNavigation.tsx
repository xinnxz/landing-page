
'use client'

import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import GlowButton from '@/components/common/GlowButton'

export default function SocialMediaNavigation() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      {/* Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Back to Contact */}
        <a
          href="./contact-and-social.html"
          className="group relative overflow-hidden rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/60 transition-all">
              <SafeIcon name="ArrowLeft" className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                Kembali ke Kontak
              </h3>
              <p className="text-sm text-muted-foreground">
                Lihat semua cara untuk menghubungi saya
              </p>
            </div>
          </div>
        </a>

        {/* View Portfolio */}
        <a
          href="./portfolio-showcase.html"
          className="group relative overflow-hidden rounded-xl p-6 md:p-8 transition-all duration-300 hover:scale-105"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-card to-card/50 border border-border/50 rounded-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center group-hover:border-secondary/60 transition-all">
              <SafeIcon name="Briefcase" className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground group-hover:text-secondary transition-colors">
                Lihat Portofolio
              </h3>
              <p className="text-sm text-muted-foreground">
                Jelajahi proyek-proyek terbaru saya
              </p>
            </div>
          </div>
        </a>
      </div>

      {/* CTA Section */}
      <div className="max-w-2xl mx-auto text-center space-y-6 p-8 md:p-12 rounded-xl glass-effect border border-border/50">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="gradient-text">Siap untuk Berkolaborasi?</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Hubungi saya melalui platform pilihan Anda dan mari kita ciptakan sesuatu yang luar biasa bersama.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <GlowButton
            variant="primary"
            glowIntensity="high"
            onClick={() => {
              window.location.href = './contact-form.html'
            }}
            className="flex items-center gap-2"
          >
            <SafeIcon name="Mail" className="w-5 h-5" />
            Kirim Pesan
          </GlowButton>

          <GlowButton
            variant="outline"
            glowIntensity="medium"
            onClick={() => {
              window.location.href = './landing-page.html'
            }}
            className="flex items-center gap-2"
          >
            <SafeIcon name="Home" className="w-5 h-5" />
            Kembali ke Beranda
          </GlowButton>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[
          { label: 'Platform Aktif', value: '6+' },
          { label: 'Response Time', value: '< 24h' },
          { label: 'Proyek Selesai', value: '50+' },
          { label: 'Klien Puas', value: '100%' },
        ].map((stat, index) => (
          <div
            key={index}
            className="p-4 md:p-6 rounded-lg glass-effect border border-border/50 text-center hover:border-primary/50 transition-all duration-300 hover:scale-105"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
