
import { useEffect, useState } from 'react'

export default function ContactHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="container mx-auto px-4 mb-16 md:mb-24">
      <div className={`text-center space-y-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="inline-block">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full"></div>
            <h1 className="relative text-4xl md:text-6xl font-bold gradient-text">
              Mari Terhubung
            </h1>
          </div>
        </div>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Saya selalu terbuka untuk peluang baru, kolaborasi, dan pertanyaan. 
          Hubungi saya melalui berbagai saluran di bawah ini atau gunakan formulir kontak untuk pesan langsung.
        </p>

<div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            href="./contact-form.html"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 hover:scale-105"
          >
            Buka Formulir Kontak
          </a>
          <a 
            href="./call-to-action.html"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105"
          >
            Mulai Proyek
          </a>
          <a 
            href="./landing-page.html"
            className="px-8 py-3 rounded-lg border border-primary/50 text-primary font-semibold hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all duration-300 hover:scale-105"
          >
            Kembali ke Beranda
          </a>
        </div>
      </div>
    </section>
  )
}
