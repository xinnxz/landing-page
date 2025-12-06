
import SafeIcon from '@/components/common/SafeIcon'

interface FuturisticFooterProps {
  variant?: 'simple' | 'extended'
}

export default function FuturisticFooter({ variant = 'simple' }: FuturisticFooterProps) {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', icon: 'Github', href: 'https://github.com' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com' },
    { name: 'Email', icon: 'Mail', href: 'mailto:luthfi@example.com' },
  ]

  const quickLinks = [
    { name: 'Tentang', href: './about-me.html' },
    { name: 'Keahlian', href: './skills-and-services.html' },
    { name: 'Portofolio', href: './portfolio-showcase.html' },
    { name: 'Kontak', href: './contact-and-social.html' },
  ]

  return (
    <footer className="relative mt-auto border-t border-primary/20">
      {/* Glowing top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        {variant === 'extended' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* About Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold gradient-text">Luthfi Alfaridz Fahmi</h3>
              <p className="text-sm text-muted-foreground">
                Freelance Programmer yang berfokus pada pengembangan web modern dan solusi teknologi inovatif.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Tautan Cepat</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Terhubung</h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                    aria-label={social.name}
                  >
                    <SafeIcon 
                      name={social.icon} 
                      className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group"
                  aria-label={social.name}
                >
                  <SafeIcon 
                    name={social.icon} 
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
                  />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="pt-6 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Luthfi Alfaridz Fahmi. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
