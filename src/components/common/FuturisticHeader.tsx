
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'

interface FuturisticHeaderProps {
  currentPage?: string
}

export default function FuturisticHeader({ currentPage = 'landing_page' }: FuturisticHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navLinks = [
    { name: 'Beranda', href: './landing-page.html', id: 'landing_page' },
    { name: 'Tentang', href: './about-me.html', id: 'about_me' },
    { name: 'Keahlian', href: './skills-and-services.html', id: 'skills_and_services' },
    { name: 'Portofolio', href: './portfolio-showcase.html', id: 'portfolio_showcase' },
    { name: 'Kontak', href: './contact-and-social.html', id: 'contact_and_social' },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a 
            href="./landing-page.html" 
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all"></div>
              <SafeIcon 
                name="Code2" 
                className="relative w-8 h-8 text-primary group-hover:scale-110 transition-transform" 
              />
            </div>
            <span className="text-xl md:text-2xl font-bold gradient-text hidden sm:inline">
              Luthfi A. Fahmi
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  currentPage === link.id
                    ? 'text-primary glow-text'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/10'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <SafeIcon 
              name={isMobileMenuOpen ? 'X' : 'Menu'} 
              className="w-6 h-6" 
            />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-medium transition-all ${
                  currentPage === link.id
                    ? 'text-primary bg-primary/10 glow-border'
                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
