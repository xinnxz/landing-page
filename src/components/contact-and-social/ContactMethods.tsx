
import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface ContactMethod {
  title: string
  icon: string
  content: string
  subtext: string
  action?: {
    label: string
    href: string
  }
}

export default function ContactMethods() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const contactMethods: ContactMethod[] = [
    {
      title: 'Email',
      icon: 'Mail',
      content: 'luthfi@example.com',
      subtext: 'Respons dalam 24 jam',
      action: {
        label: 'Kirim Email',
        href: 'mailto:luthfi@example.com',
      },
    },
    {
      title: 'Telepon',
      icon: 'Phone',
      content: '+62 812 3456 7890',
      subtext: 'Tersedia untuk konsultasi',
      action: {
        label: 'Hubungi',
        href: 'tel:+6281234567890',
      },
    },
    {
      title: 'Lokasi',
      icon: 'MapPin',
      content: 'Indonesia',
      subtext: 'Bekerja secara remote',
      action: {
        label: 'Lihat Peta',
        href: 'https://maps.google.com',
      },
    },
    {
      title: 'Jam Kerja',
      icon: 'Clock',
      content: 'Senin - Jumat',
      subtext: '09:00 - 18:00 WIB',
      action: {
        label: 'Jadwalkan Panggilan',
        href: './contact-form.html',
      },
    },
  ]

  return (
    <section className="container mx-auto px-4 mb-16 md:mb-24">
<div className="text-center mb-12">
         <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
           Kontak
         </h2>
       </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {contactMethods.map((method, index) => (
          <div
            key={method.title}
            className="group relative p-6 rounded-xl border border-border/50 glass-effect hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300">
                <SafeIcon 
                  name={method.icon} 
                  className="w-6 h-6 text-primary" 
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-primary font-semibold mb-1">
                  {method.content}
                </p>
                <p className="text-sm text-muted-foreground">
                  {method.subtext}
                </p>
              </div>

              {method.action && (
                <a
                  href={method.action.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors pt-2"
                >
                  {method.action.label}
                  <SafeIcon name="ArrowRight" className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
