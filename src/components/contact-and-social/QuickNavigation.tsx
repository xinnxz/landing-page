
import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface NavItem {
  title: string
  description: string
  icon: string
  href: string
  color: string
}

export default function QuickNavigation() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const navItems: NavItem[] = [
    {
      title: 'Jelajahi Portofolio',
      description: 'Lihat proyek-proyek terbaru saya',
      icon: 'Briefcase',
      href: './portfolio-showcase.html',
      color: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Lihat Skill',
      description: 'Pelajari teknologi yang saya kuasai',
      icon: 'Zap',
      href: './skills-and-services.html',
      color: 'from-purple-500/20 to-pink-500/20',
    },
    {
      title: 'Tentang Saya',
      description: 'Ketahui lebih lanjut tentang saya',
      icon: 'User',
      href: './about-me.html',
      color: 'from-green-500/20 to-emerald-500/20',
    },
    {
      title: 'Kembali ke Beranda',
      description: 'Kembali ke halaman utama',
      icon: 'Home',
      href: './landing-page.html',
      color: 'from-orange-500/20 to-red-500/20',
    },
  ]

  return (
    <section className="container mx-auto px-4 mb-16">
<div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
           Navigasi
         </h2>
       </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {navItems.map((item, index) => (
          <a
            key={item.title}
            href={item.href}
            className="group relative overflow-hidden rounded-xl border border-border/50 glass-effect p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Gradient background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

            {/* Content */}
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                <SafeIcon 
                  name={item.icon} 
                  className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" 
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors">
                  {item.description}
                </p>
              </div>

              <SafeIcon 
                name="ArrowRight" 
                className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 mt-1" 
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
