'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import TechBadge from './TechBadge'

interface ProjectCardProps {
  project: {
    id: string
    title: string
    description: string
    image: string
    images: string[]
    technologies: string[]
    category: string
    demoUrl?: string
    githubUrl?: string
    year: number
  }
  onDetailClick?: (project: any) => void
}

export default function ProjectCard({ project, onDetailClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative h-full rounded-xl overflow-hidden glass-effect border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
{/* Image Container - Clickable */}
      <div 
        className="relative h-48 overflow-hidden bg-card cursor-pointer"
        onClick={() => onDetailClick?.(project)}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/50 backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Year Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/50 backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {project.description}
        </p>

      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
    </div>
  )
}