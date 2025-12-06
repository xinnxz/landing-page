
import { Button } from '@/components/ui/button'
import { type VariantProps } from 'class-variance-authority'
import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  glowIntensity?: 'low' | 'medium' | 'high'
  children: React.ReactNode
}

const GlowButton = forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'primary', glowIntensity = 'medium', children, ...props }, ref) => {
    const glowClasses = {
      low: 'hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]',
      medium: 'hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]',
      high: 'hover:shadow-[0_0_30px_rgba(34,211,238,0.7)]',
    }

    const variantClasses = {
      primary: 'bg-primary text-primary-foreground hover:bg-primary/90 border-primary/50',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/90 border-secondary/50',
      outline: 'bg-transparent text-primary border-primary hover:bg-primary/10',
    }

    return (
      <Button
        ref={ref}
        className={cn(
          'relative overflow-hidden border transition-all duration-300 hover:scale-105',
          variantClasses[variant],
          glowClasses[glowIntensity],
          className
        )}
        {...props}
>
        <span className="relative z-10 flex items-center">{children}</span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </Button>
    )
  }
)

GlowButton.displayName = 'GlowButton'

export default GlowButton
