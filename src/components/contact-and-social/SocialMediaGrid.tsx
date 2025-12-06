
import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface SocialLink {
  name: string
  icon: string
  href: string
  description: string
  color: string
}

export default function SocialMediaGrid() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      icon: 'Github',
      href: 'https://github.com',
      description: 'Lihat proyek dan kontribusi saya',
      color: 'hover:border-[#ffffff] hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]',
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      href: 'https://linkedin.com',
      description: 'Terhubung secara profesional',
      color: 'hover:border-[#0A66C2] hover:shadow-[0_0_20px_rgba(10,102,194,0.3)]',
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      href: 'https://twitter.com',
      description: 'Ikuti pembaruan dan pemikiran saya',
      color: 'hover:border-[#1DA1F2] hover:shadow-[0_0_20px_rgba(29,161,242,0.3)]',
    },
    {
      name: 'Email',
      icon: 'Mail',
      href: 'mailto:luthfi@example.com',
      description: 'Kirim email langsung',
      color: 'hover:border-primary hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
    },
  ]

  return (
<section className="container mx-auto px-4 mb-16 md:mb-24">
       <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-6 rounded-xl border border-border/50 glass-effect transition-all duration-300 hover:scale-105 ${social.color}`}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <SafeIcon 
                  name={social.icon} 
                  className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" 
                />
              </div>

              <div className="text-left">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {social.name}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {social.description}
                </p>
              </div>

              <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Kunjungi</span>
                <SafeIcon name="ArrowRight" className="w-4 h-4" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
