'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import TechBadge from './TechBadge'

interface ProjectDetailModalProps {
  project: {
    id: string
    title: string
    description: string
    longDescription: string
    image: string
    images: string[]
    technologies: string[]
    category: string
    demoUrl?: string
    githubUrl?: string
    year: number
  } | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  if (!project) return null

  const images = project.images && project.images.length > 0 ? project.images : [project.image]
  const currentImage = images[currentImageIndex]

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text">{project.title}</DialogTitle>
          <DialogClose />
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Images Gallery */}
          <div className="relative w-full">
            <div className="relative h-96 rounded-lg overflow-hidden bg-card">
              <img
                src={currentImage}
                alt={`${project.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all hover:shadow-lg"
                    aria-label="Previous image"
                  >
                    <SafeIcon name="ChevronLeft" className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background text-foreground p-2 rounded-full transition-all hover:shadow-lg"
                    aria-label="Next image"
                  >
                    <SafeIcon name="ChevronRight" className="w-5 h-5" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-primary w-6' : 'bg-primary/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary border border-primary/50 backdrop-blur-sm">
                  {project.category}
                </span>
              </div>
            </div>
          </div>

          {/* Project Meta */}
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-secondary/20 text-secondary border border-secondary/50">
              {project.year}
            </span>
            <span className="text-muted-foreground text-sm">
              {project.category}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">TENTANG PROYEK</h3>
            <p className="text-foreground leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Short Description */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-2">RINGKASAN</h3>
            <p className="text-foreground/80 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground mb-3">TEKNOLOGI</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>

{/* Action Links - Demo Only */}
          {project.demoUrl && (
            <div className="flex gap-3 pt-4 border-t border-border/50">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button
                  size="sm"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 transition-all"
                >
                  <SafeIcon name="ExternalLink" className="w-4 h-4 mr-2" />
                  Lihat Demo
                </Button>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}