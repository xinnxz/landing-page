
'use client'

import SafeIcon from '@/components/common/SafeIcon'

interface TechStackProps {}

export default function TechStack({}: TechStackProps) {
  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: 'Zap', color: 'from-blue-500 to-cyan-500' },
        { name: 'TypeScript', icon: 'Code', color: 'from-blue-600 to-blue-400' },
        { name: 'TailwindCSS', icon: 'Palette', color: 'from-cyan-500 to-blue-500' },
        { name: 'Next.js', icon: 'Rocket', color: 'from-gray-600 to-gray-400' },
      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: 'Server', color: 'from-green-600 to-green-400' },
        { name: 'Express.js', icon: 'Zap', color: 'from-yellow-600 to-yellow-400' },
        { name: 'PostgreSQL', icon: 'Database', color: 'from-blue-700 to-blue-500' },
        { name: 'Redis', icon: 'Zap', color: 'from-red-600 to-red-400' },
      ],
    },
    {
      category: 'DevOps & Tools',
      items: [
        { name: 'Docker', icon: 'Box', color: 'from-blue-500 to-cyan-500' },
        { name: 'Kubernetes', icon: 'Grid', color: 'from-blue-600 to-blue-400' },
        { name: 'GitHub Actions', icon: 'GitBranch', color: 'from-gray-700 to-gray-500' },
        { name: 'AWS', icon: 'Cloud', color: 'from-orange-600 to-orange-400' },
      ],
    },
  ]

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Teknologi yang Digunakan</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stack teknologi modern yang dipilih untuk memastikan skalabilitas, performa, dan maintainability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="space-y-4 animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                  {category.category}
                </h3>

                <div className="space-y-3">
                  {category.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="group p-4 rounded-lg glass-effect border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center`}>
                          <SafeIcon
                            name={tech.icon}
                            className="w-5 h-5 text-white"
                          />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {tech.name}
                          </p>
                        </div>
                        <SafeIcon
                          name="ArrowRight"
                          className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all group-hover:translate-x-1"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
