
'use client'

import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface ProjectLinksProps {}

export default function ProjectLinks({}: ProjectLinksProps) {
  const links = [
    {
      title: 'Live Demo',
      description: 'Kunjungi aplikasi yang sudah live',
      icon: 'ExternalLink',
      href: 'https://example.com',
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'GitHub Repository',
      description: 'Lihat source code di GitHub',
      icon: 'Github',
      href: 'https://github.com',
      color: 'from-gray-600 to-gray-400',
    },
    {
      title: 'API Documentation',
      description: 'Dokumentasi lengkap REST API',
      icon: 'BookOpen',
      href: 'https://docs.example.com',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Case Study',
      description: 'Baca case study lengkap proyek ini',
      icon: 'FileText',
      href: 'https://example.com/case-study',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Akses Proyek</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jelajahi proyek lebih lanjut melalui berbagai sumber daya yang tersedia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <SafeIcon
                      name={link.icon}
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {link.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium pt-2">
                      <span>Buka</span>
                      <SafeIcon
                        name="ArrowRight"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
