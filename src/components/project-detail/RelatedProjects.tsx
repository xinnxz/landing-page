
'use client'

import SafeIcon from '@/components/common/SafeIcon'

interface RelatedProjectsProps {}

export default function RelatedProjects({}: RelatedProjectsProps) {
  const relatedProjects = [
    {
      title: 'Mobile App Development',
      description: 'Aplikasi mobile cross-platform dengan React Native',
      image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/6fc78b24-8724-489c-975d-ef3f0254855e.png',
      tags: ['React Native', 'Firebase', 'UI/UX'],
    },
    {
      title: 'SaaS Dashboard',
      description: 'Platform SaaS dengan analytics dan reporting',
      image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/8ca5e69f-9988-4f28-8e66-1478fa3d6ccb.png',
      tags: ['Next.js', 'PostgreSQL', 'Chart.js'],
    },
    {
      title: 'Real-time Chat App',
      description: 'Aplikasi chat dengan fitur real-time dan enkripsi',
      image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/d0e8e0dc-279c-45a1-b196-a0753577aed3.png',
      tags: ['Socket.io', 'Node.js', 'MongoDB'],
    },
  ]

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Proyek Terkait</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat proyek-proyek lain yang mungkin menarik bagi Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProjects.map((project, index) => (
              <a
                key={index}
                href="./project-detail.html"
                className="group rounded-xl overflow-hidden glass-effect border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <div className="flex items-center gap-2 text-primary">
                      <span className="text-sm font-medium">Lihat Detail</span>
                      <SafeIcon
                        name="ArrowRight"
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30 group-hover:border-primary/60 transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* View All Button */}
          <div className="flex justify-center pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href="./portfolio-showcase.html"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary/50 text-primary hover:bg-primary/10 transition-all group"
            >
              <span className="font-medium">Lihat Semua Proyek</span>
              <SafeIcon
                name="ArrowRight"
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
