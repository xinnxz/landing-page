'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '@/components/common/SafeIcon'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog'

interface Certificate {
  title: string
  issuer: string
  year: string
  icon: string
  description: string
  imageUrl: string
  externalLink: string
}

const certificates: Certificate[] = [
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    year: '2024',
    icon: 'Award',
    description: 'Professional level certification for designing distributed systems on AWS',
    imageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/5/ffea0855-f696-4808-9340-acd92f7cfa10.png',
    externalLink: 'https://aws.amazon.com/certification',
  },
  {
    title: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    year: '2024',
    icon: 'Award',
    description: 'Certification demonstrating expertise in developing applications on Google Cloud Platform',
    imageUrl: 'https://images.unsplash.com/photo-1573220606811-bb3dce8a99ba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3MjkzNDZ8MHwxfHNlYXJjaHwxfHxGb3IlMjBhJTIwcHJvZmVzc2lvbmFsJTIwcG9ydGZvbGlvJTIwYW5kJTIwc2tpbGxzJTIwc2hvd2Nhc2UlMjB3ZWJzaXRlJTJDJTIwYSUyMGNlcnRpZmljYXRpb24lMjBiYWRnZSUyMGRpc3BsYXklMjBzaG93aW5nJTIwR29vZ2xlJTIwQ2xvdWQlMjBQcm9mZXNzaW9uYWwlMjBEZXZlbG9wZXIlMjBjZXJ0aWZpY2F0aW9uJTJDJTIwd2l0aCUyMEdvb2dsZSUyMENsb3VkJTIwb2ZmaWNpYWwlMjBicmFuZGluZyUyQyUyMGJsdWUlMjBhbmQlMjBtdWx0aWNvbG9yJTIwZGVzaWduJTJDJTIwcHJvZmVzc2lvbmFsJTIwY2VydGlmaWNhdGUlMjBhcHBlYXJhbmNlJTIwZm9yJTIwY2xvdWQlMjBlbmdpbmVlcnMlMjBhbmQlMjBkZXZlbG9wZXJzLnxlbnwwfHx8fDE3NjQ5NjMyODF8MA&ixlib=rb-4.1.0&q=80&w=400&h=300',
    externalLink: 'https://cloud.google.com/certification',
  },
  {
    title: 'Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    year: '2023',
    icon: 'Award',
    description: 'Certified proficiency in building and deploying containerized applications',
    imageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/5/9c164270-71c1-480b-9ca4-89272556cd21.png',
    externalLink: 'https://www.cncf.io/certification/ckad',
  },
  {
    title: 'React Advanced Patterns',
    issuer: 'Frontend Masters',
    year: '2023',
    icon: 'Award',
    description: 'Advanced React development patterns and best practices certification',
    imageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/5/7a439631-eabc-4936-940f-36da4b08d1fb.png',
    externalLink: 'https://frontendmasters.com',
  },
  {
    title: 'Full Stack JavaScript Developer',
    issuer: 'The Odin Project',
    year: '2023',
    icon: 'Award',
    description: 'Comprehensive full stack development with JavaScript and Node.js',
    imageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/5/d6b70046-4bbd-4418-a069-e25ea7a33e5d.png',
    externalLink: 'https://www.theodinproject.com',
  },
  {
    title: 'TypeScript Professional',
    issuer: 'Scrimba',
    year: '2023',
    icon: 'Award',
    description: 'Professional level TypeScript certification for type-safe development',
    imageUrl: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/5/db4fa91c-9039-43df-9faf-7b0e254f0dab.png',
    externalLink: 'https://scrimba.com',
},
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export default function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCertificateClick = (cert: Certificate) => {
    setSelectedCert(cert)
    setIsModalOpen(true)
  }

  return (
    <>
<section className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-12">
{/* Header */}
           <motion.div
             className="text-center space-y-4 mb-16"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-100px' }}
             transition={{ duration: 0.6, ease: 'easeOut' }}
           >
             <h2 className="text-3xl md:text-4xl font-bold gradient-text">
               Sertifikasi
             </h2>
 <p className="text-muted-foreground max-w-2xl mx-auto">
                Sertifikasi profesional yang memvalidasi keahlian dan komitmen saya terhadap pembelajaran berkelanjutan
              </p>
           </motion.div>

           {/* Certificates Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
             {certificates.map((cert, index) => (
               <motion.button
                 key={cert.title}
                 onClick={() => handleCertificateClick(cert)}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, margin: '-100px' }}
                 transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                 className="group glass-effect rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:scale-105 flex flex-col h-full text-left cursor-pointer"
               >
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden bg-card">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div className="mb-4 w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                    <SafeIcon
                      name={cert.icon}
                      className="w-6 h-6 text-primary"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer and Year */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/50">
                    <span className="text-sm font-medium text-primary">{cert.issuer}</span>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground flex-1">
                    {cert.description}
                  </p>

                  {/* Verified Badge */}
                  <div className="mt-4 flex items-center gap-2 text-xs text-primary">
                    <SafeIcon
                      name="Check"
                      className="w-4 h-4"
                    />
                    <span>Verified</span>
                  </div>
</div>
               </motion.button>
              ))}
           </div>

           {/* Additional Info */}
           <motion.div
             className="glass-effect rounded-xl p-8 border border-primary/20"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: '-100px' }}
             transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
           >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SafeIcon
                    name="Target"
                    className="w-6 h-6 text-primary"
                  />
                  <h4 className="font-bold text-foreground">Komitmen Pembelajaran</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Saya terus mengupdate skill dan mengejar sertifikasi baru untuk tetap relevan dengan perkembangan industri teknologi
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <SafeIcon
                    name="Zap"
                    className="w-6 h-6 text-primary"
                  />
                  <h4 className="font-bold text-foreground">Praktik Langsung</h4>
                </div>
                <p className="text-sm text-muted-foreground">
                  Setiap sertifikasi didukung oleh pengalaman praktis dalam mengimplementasikan teknologi tersebut di project nyata
                </p>
              </div>
</div>
          </motion.div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{selectedCert.title}</DialogTitle>
              <DialogClose />
            </DialogHeader>
            <div className="space-y-6">
              {/* Large Certificate Image */}
              <div className="w-full">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>

              {/* Certificate Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Issuer</h3>
                  <p className="text-lg font-bold text-foreground">{selectedCert.issuer}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Year</h3>
                  <p className="text-lg font-bold text-foreground">{selectedCert.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground mb-1">Description</h3>
                  <p className="text-foreground">{selectedCert.description}</p>
                </div>
              </div>

              {/* Certificate Link Button */}
              <a
                href={selectedCert.externalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Lihat Sertifikat
              </a>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}