
'use client'

import { useEffect, useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface ProjectHeroProps {}

export default function ProjectHero({}: ProjectHeroProps) {
  const [isLoaded, setIsLoaded] = useState(true)

  // Mock project data
  const project = {
    title: 'E-Commerce Platform Modernization',
    subtitle: 'Transformasi Platform E-Commerce dengan Teknologi Modern',
    description: 'Proyek besar-besaran untuk memodernisasi platform e-commerce legacy dengan teknologi terkini, meningkatkan performa hingga 300% dan user experience yang luar biasa.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/7796a54d-d845-4fe8-9672-a7e2c228d075.png',
    status: 'Completed',
    duration: '6 months',
    team: '5 developers',
    metrics: [
      { label: 'Performance Improvement', value: '+300%' },
      { label: 'Load Time Reduction', value: '-75%' },
      { label: 'User Satisfaction', value: '4.8/5' },
    ],
  }

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm font-medium text-primary">{project.status}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">{project.title}</span>
              </h1>
              <p className="text-lg text-muted-foreground">{project.subtitle}</p>
            </div>

            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {project.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg glass-effect border border-primary/20 hover:border-primary/50 transition-all group"
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary group-hover:glow-text transition-all">
                    {metric.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm">
                <SafeIcon name="Clock" className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{project.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <SafeIcon name="Users" className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{project.team}</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative group animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <img
              src={project.image}
              alt={project.title}
              className="relative w-full h-auto rounded-2xl border border-primary/30 group-hover:border-primary/60 transition-all shadow-2xl object-cover"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <div className="flex items-center gap-2 text-primary">
                <SafeIcon name="Eye" className="w-5 h-5" />
                <span className="text-sm font-medium">Lihat Demo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
