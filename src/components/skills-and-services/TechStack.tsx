
import SafeIcon from '@/components/common/SafeIcon'

interface Technology {
  name: string
  icon: string
  category: string
}

const technologies: Technology[] = [
  // Frontend
  { name: 'React', icon: 'Zap', category: 'Frontend' },
  { name: 'Vue', icon: 'Zap', category: 'Frontend' },
  { name: 'TypeScript', icon: 'Code', category: 'Frontend' },
  { name: 'Tailwind', icon: 'Palette', category: 'Frontend' },
  { name: 'Next.js', icon: 'Layers', category: 'Frontend' },
  { name: 'Astro', icon: 'Rocket', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: 'Server', category: 'Backend' },
  { name: 'Express', icon: 'Zap', category: 'Backend' },
  { name: 'Python', icon: 'Code', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'Database', category: 'Backend' },
  { name: 'MongoDB', icon: 'Database', category: 'Backend' },
  { name: 'GraphQL', icon: 'Network', category: 'Backend' },

  // DevOps
  { name: 'Docker', icon: 'Box', category: 'DevOps' },
  { name: 'Git', icon: 'GitBranch', category: 'DevOps' },
  { name: 'AWS', icon: 'Cloud', category: 'DevOps' },
  { name: 'Linux', icon: 'Terminal', category: 'DevOps' },
]

export default function TechStack() {
  return (
    <section className="container mx-auto px-4 py-12 md:py-20">
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Teknologi dan tools yang saya gunakan untuk membangun solusi berkualitas tinggi
          </p>
        </div>

        {/* Tech Grid with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group relative"
              style={{ animationDelay: `${index * 30}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Card */}
              <div className="relative glass-effect rounded-xl p-4 flex flex-col items-center justify-center gap-3 h-full hover:border-primary/50 transition-all duration-300 group-hover:scale-110 animate-slide-up">
                <SafeIcon
                  name={tech.icon}
                  className="w-8 h-8 text-primary group-hover:scale-125 transition-transform"
                />
                <span className="text-sm font-medium text-center text-foreground">
                  {tech.name}
                </span>
                <span className="text-xs text-muted-foreground">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Floating particles effect */}
        <div className="relative h-20 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary rounded-full animate-float"
                style={{
                  left: `${20 + i * 15}%`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0.3 + i * 0.1,
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
