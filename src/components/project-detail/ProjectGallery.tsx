
'use client'

import { useState } from 'react'
import SafeIcon from '@/components/common/SafeIcon'

interface ProjectGalleryProps {}

export default function ProjectGallery({}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  const images = [
    {
      title: 'Dashboard Utama',
      description: 'Halaman dashboard dengan analytics real-time',
      url: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/7c37627f-2725-4495-b8fd-92c169779bb3.png',
    },
    {
      title: 'Halaman Produk',
      description: 'Interface katalog produk dengan filter advanced',
      url: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/d0ff93d4-2e78-4051-9169-477c5be9f1c4.png',
    },
    {
      title: 'Checkout Flow',
      description: 'Proses checkout yang dioptimalkan untuk konversi',
      url: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/8ddb05f9-7416-4982-bbcc-8ba8f852a7dd.png',
    },
    {
      title: 'Admin Panel',
      description: 'Panel administrasi untuk manajemen inventory',
      url: 'https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/0971f031-cc1d-4868-b9e9-267897d7155d.png',
    },
  ]

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Galeri Proyek</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lihat tangkapan layar dan interface dari berbagai bagian aplikasi
            </p>
          </div>

          {/* Main Image */}
          <div className="relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
            <div className="relative rounded-2xl overflow-hidden border border-primary/30 group-hover:border-primary/60 transition-all">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">
                    {images[selectedImage].title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {images[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative group rounded-lg overflow-hidden border-2 transition-all ${
                  selectedImage === index
                    ? 'border-primary shadow-lg shadow-primary/50'
                    : 'border-primary/20 hover:border-primary/50'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-24 md:h-32 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  {selectedImage === index && (
                    <SafeIcon
                      name="Check"
                      className="w-6 h-6 text-primary"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
