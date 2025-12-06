
'use client'

import SafeIcon from '@/components/common/SafeIcon'

interface ProjectOverviewProps {}

export default function ProjectOverview({}: ProjectOverviewProps) {
  const sections = [
    {
      title: 'Latar Belakang Proyek',
      icon: 'BookOpen',
      content:
        'Klien memiliki platform e-commerce yang dibangun dengan teknologi lama dan mengalami masalah performa signifikan. Dengan pertumbuhan user base yang pesat, sistem legacy tidak mampu menangani traffic tinggi. Kami diminta untuk melakukan modernisasi menyeluruh sambil mempertahankan data dan fungsionalitas existing.',
    },
    {
      title: 'Tantangan Utama',
      icon: 'AlertCircle',
      content:
        'Migrasi data dari sistem lama tanpa downtime, refactoring kode yang kompleks, integrasi dengan payment gateway baru, dan optimasi database untuk menangani jutaan transaksi. Kami juga harus memastikan backward compatibility dengan API lama untuk klien pihak ketiga.',
    },
    {
      title: 'Solusi yang Diimplementasikan',
      icon: 'Lightbulb',
      content:
        'Kami menggunakan arsitektur microservices dengan Node.js dan PostgreSQL, implementasi caching dengan Redis, CDN global untuk aset statis, dan automated testing untuk memastikan kualitas. Migrasi dilakukan secara bertahap dengan blue-green deployment strategy untuk zero-downtime deployment.',
    },
    {
      title: 'Hasil & Impact',
      icon: 'TrendingUp',
      content:
        'Platform berhasil dimodernisasi dengan peningkatan performa 300%, pengurangan load time 75%, dan peningkatan user satisfaction menjadi 4.8/5. Revenue meningkat 45% dalam 3 bulan pertama setelah launch karena conversion rate yang lebih baik.',
    },
  ]

  return (
    <section className="relative py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-8">
          <div className="text-center space-y-4 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="gradient-text">Gambaran Proyek</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pelajari lebih lanjut tentang latar belakang, tantangan, dan solusi yang kami implementasikan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl glass-effect border border-primary/20 hover:border-primary/50 transition-all hover:shadow-lg animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                      <SafeIcon
                        name={section.icon}
                        className="w-6 h-6 text-primary group-hover:glow-text transition-all"
                      />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
