
'use client'

import SafeIcon from '@/components/common/SafeIcon'

interface TechBadgeProps {
  name: string
  size?: 'sm' | 'md'
}

const TECH_ICONS: Record<string, string> = {
  'React': 'Zap',
  'Node.js': 'Server',
  'MongoDB': 'Database',
  'Stripe': 'CreditCard',
  'TailwindCSS': 'Palette',
  'Firebase': 'Flame',
  'WebSocket': 'Wifi',
  'Redux': 'Layers',
  'Material-UI': 'Layout',
  'Python': 'Code',
  'FastAPI': 'Zap',
  'OpenAI': 'Brain',
  'PostgreSQL': 'Database',
  'D3.js': 'BarChart3',
  'React Native': 'Smartphone',
  'TypeScript': 'Code',
  'Prisma': 'Database',
  'AWS': 'Cloud',
  'Next.js': 'Zap',
}

export default function TechBadge({ name, size = 'sm' }: TechBadgeProps) {
  const iconName = TECH_ICONS[name] || 'Code'
  const sizeClasses = size === 'sm' ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-sm'

  return (
    <span className={`inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium transition-all hover:bg-primary/20 hover:border-primary/50 ${sizeClasses}`}>
      <SafeIcon name={iconName} className="w-3 h-3" />
      {name}
    </span>
  )
}
