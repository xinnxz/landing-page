'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import SafeIcon from '@/components/common/SafeIcon'
import ProjectCard from './ProjectCard'
import TechBadge from './TechBadge'
import ProjectDetailModal from './ProjectDetailModal'

interface Project {
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
}

const MOCK_PROJECTS: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description: 'Platform e-commerce modern dengan fitur pembayaran terintegrasi dan dashboard admin yang powerful.',
    longDescription: 'Membangun platform e-commerce lengkap dengan sistem manajemen inventori, pembayaran gateway terintegrasi, dan dashboard analytics real-time untuk tracking penjualan. Platform ini dirancang untuk mendukung ribuan transaksi harian dengan performa optimal dan user experience yang seamless.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/5c82be4e-edd4-4b3a-b079-051789738a1a.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/5c82be4e-edd4-4b3a-b079-051789738a1a.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/76e9fafd-0e64-45d8-8978-f6006052ea30.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/afc3bd5f-f882-486a-afbb-704646fbc169.png',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
    category: 'Web Application',
    demoUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/luthfi/ecommerce',
    year: 2024,
  },
{
    id: 'project-2',
    title: 'Task Management App',
    description: 'Aplikasi manajemen tugas dengan kolaborasi real-time dan notifikasi push untuk tim yang produktif.',
    longDescription: 'Aplikasi task management dengan fitur kolaborasi real-time menggunakan WebSocket, sistem notifikasi push, dan integrasi dengan berbagai platform komunikasi. Fitur unggulannya termasuk shared kanban boards, real-time commenting, dan automated workflow untuk meningkatkan produktivitas tim.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/3ebf280e-4a2e-404e-adc1-19979e49542f.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/3ebf280e-4a2e-404e-adc1-19979e49542f.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/ba642ddf-8016-4b69-ab88-63c4398d818e.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/14efb422-3ea5-433c-b96e-f6579b7e6a12.png',
    ],
    technologies: ['React', 'Firebase', 'WebSocket', 'Redux', 'Material-UI'],
    category: 'Web Application',
    demoUrl: 'https://example.com/taskapp',
    githubUrl: 'https://github.com/luthfi/taskapp',
    year: 2024,
  },
{
    id: 'project-3',
    title: 'AI Content Generator',
    description: 'Tool AI untuk generate konten marketing dengan NLP dan machine learning yang canggih.',
    longDescription: 'Mengintegrasikan OpenAI API untuk membuat tool generator konten otomatis dengan kemampuan customization tinggi dan template library yang ekstensif. Tool ini dapat menghasilkan berbagai jenis konten mulai dari artikel blog, social media posts, hingga email marketing campaigns.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/0122abe6-e990-4ce2-9e11-930e38aabf7d.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/0122abe6-e990-4ce2-9e11-930e38aabf7d.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/03c20792-f509-41e5-ab64-146089a2ac4a.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/5f0ebe46-effd-42b7-8276-96deee68867c.png',
    ],
    technologies: ['Python', 'FastAPI', 'OpenAI', 'React', 'PostgreSQL'],
    category: 'AI/ML',
    demoUrl: 'https://example.com/aicontentgen',
    githubUrl: 'https://github.com/luthfi/aicontentgen',
    year: 2023,
  },
{
    id: 'project-4',
    title: 'Real-time Analytics Dashboard',
    description: 'Dashboard analytics real-time dengan visualisasi data interaktif dan reporting otomatis.',
    longDescription: 'Dashboard analytics komprehensif dengan real-time data streaming, custom chart builder, dan automated report generation untuk business intelligence. Mendukung integrasi dengan berbagai data sources dan menyediakan insights mendalam untuk strategic decision making.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/b1b789ea-b01b-42bc-ac7c-a15319f6926f.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/b1b789ea-b01b-42bc-ac7c-a15319f6926f.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/480020f9-2f7d-4ebc-a095-f3b9d03499cf.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/18ff34be-a601-4aeb-b01f-dc28a0e69115.png',
    ],
    technologies: ['React', 'D3.js', 'Node.js', 'WebSocket', 'PostgreSQL'],
    category: 'Data Visualization',
    demoUrl: 'https://example.com/analytics',
    githubUrl: 'https://github.com/luthfi/analytics-dashboard',
    year: 2023,
  },
{
    id: 'project-5',
    title: 'Mobile Banking App',
    description: 'Aplikasi mobile banking dengan keamanan tingkat enterprise dan user experience yang intuitif.',
    longDescription: 'Aplikasi mobile banking dengan enkripsi end-to-end, biometric authentication, dan compliance dengan standar keamanan perbankan internasional. Fitur lengkap termasuk transfer dana real-time, bill payment, investment management, dan comprehensive financial reporting.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/0a524a03-79c5-48c9-b0f5-cc506f8c5e9b.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/0a524a03-79c5-48c9-b0f5-cc506f8c5e9b.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/76e9fafd-0e64-45d8-8978-f6006052ea30.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/afc3bd5f-f882-486a-afbb-704646fbc169.png',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Stripe'],
    category: 'Mobile App',
    demoUrl: 'https://example.com/mobilebanking',
    githubUrl: 'https://github.com/luthfi/mobile-banking',
    year: 2023,
  },
{
    id: 'project-6',
    title: 'SaaS Project Management',
    description: 'Platform SaaS untuk manajemen proyek dengan fitur automation dan integrasi API yang lengkap.',
    longDescription: 'Platform SaaS enterprise-grade dengan workflow automation, API marketplace, dan multi-tenant architecture untuk mendukung skalabilitas tinggi. Dilengkapi dengan advanced reporting, team collaboration tools, dan resource management untuk organisasi berbagai ukuran.',
    image: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/65d83997-5c87-477d-a914-9a348f57e7b8.png',
    images: [
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/65d83997-5c87-477d-a914-9a348f57e7b8.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/2abc2b51-2c3c-4e74-9d6e-759dfb340e39.png',
      'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/7f40fe03-cdcb-4d17-8495-7b38450b7e4f.png',
    ],
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'AWS'],
    category: 'SaaS',
    demoUrl: 'https://example.com/saaspm',
    githubUrl: 'https://github.com/luthfi/saas-pm',
    year: 2024,
  },
]

const CATEGORIES = ['Semua', 'Web Application', 'Mobile App', 'AI/ML', 'Data Visualization', 'SaaS']

export default function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredProjects = selectedCategory === 'Semua'
    ? MOCK_PROJECTS
    : MOCK_PROJECTS.filter(project => project.category === selectedCategory)

  const handleDetailClick = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Portofolio Proyek
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koleksi proyek-proyek terpilih yang telah saya kerjakan untuk berbagai klien dan industri. 
            Setiap proyek menunjukkan dedikasi saya terhadap kualitas dan inovasi teknologi.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
        >
          {CATEGORIES.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.4, delay: 0.15 + index * 0.05, ease: 'easeOut' }}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground glow-border'
                  : 'bg-card border border-border text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
            >
              <ProjectCard project={project} onDetailClick={handleDetailClick} />
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 p-8 md:p-12 rounded-2xl glass-effect border border-primary/20 text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Tertarik dengan Proyek Kami?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Jika Anda memiliki ide proyek yang menarik atau ingin mendiskusikan kolaborasi, 
            saya siap membantu mewujudkan visi Anda menjadi kenyataan.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="./contact-and-social.html">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground border border-primary/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all"
              >
                <SafeIcon name="MessageSquare" className="w-5 h-5 mr-2" />
                Diskusikan Proyek
              </Button>
            </a>
            <a href="./skills-and-services.html">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
              >
                <SafeIcon name="Zap" className="w-5 h-5 mr-2" />
                Lihat Skill Lain
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
      />
    </>
  )
}