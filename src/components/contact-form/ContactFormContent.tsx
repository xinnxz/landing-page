
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import SafeIcon from '@/components/common/SafeIcon'
import GlowButton from '@/components/common/GlowButton'
import { toast, Toaster } from 'sonner'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export default function ContactFormContent() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Nama harus diisi'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subjek harus diisi'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Pesan harus diisi'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Pesan minimal 10 karakter'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) {
      toast.error('Mohon periksa kembali formulir Anda')
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Here you would typically send the form data to a backend
      console.log('Form submitted:', formData)

      setIsSubmitted(true)
      toast.success('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.')

      // Reset form after 2 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        setIsSubmitted(false)
      }, 2000)
    } catch (error) {
      toast.error('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Toaster position="top-center" />
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header Section */}
        <div className="text-center mb-12 animate-slide-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Hubungi Saya</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Punya pertanyaan atau ingin memulai proyek? Isi formulir di bawah dan saya akan segera merespons Anda.
          </p>
        </div>

        {/* Form Card */}
        <div className="glass-effect rounded-2xl p-8 md:p-10 border border-primary/20 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          {isSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full"></div>
                  <SafeIcon
                    name="CheckCircle2"
                    className="relative w-16 h-16 text-primary animate-bounce"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Terima Kasih!</h2>
              <p className="text-muted-foreground">
                Pesan Anda telah berhasil dikirim. Saya akan menghubungi Anda dalam waktu 24 jam.
              </p>
              <div className="pt-4">
                <a href="./landing-page.html">
                  <GlowButton variant="primary" glowIntensity="medium">
                    Kembali ke Beranda
                  </GlowButton>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-semibold">
                  Nama Lengkap
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Masukkan nama Anda"
                  value={formData.name}
                  onChange={handleChange}
                  className={`bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/50 transition-all ${
                    errors.name ? 'border-destructive' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <SafeIcon name="AlertCircle" className="w-4 h-4" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="nama@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/50 transition-all ${
                    errors.email ? 'border-destructive' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <SafeIcon name="AlertCircle" className="w-4 h-4" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <Label htmlFor="subject" className="text-foreground font-semibold">
                  Subjek
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Topik pesan Anda"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/50 transition-all ${
                    errors.subject ? 'border-destructive' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <SafeIcon name="AlertCircle" className="w-4 h-4" />
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground font-semibold">
                  Pesan
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tuliskan pesan Anda di sini..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`bg-input border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-primary/50 transition-all resize-none ${
                    errors.message ? 'border-destructive' : ''
                  }`}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive flex items-center gap-1">
                    <SafeIcon name="AlertCircle" className="w-4 h-4" />
                    {errors.message}
                  </p>
                )}
                <p className="text-xs text-muted-foreground">
                  {formData.message.length} / 1000 karakter
                </p>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <GlowButton
                  type="submit"
                  variant="primary"
                  glowIntensity="high"
                  disabled={isSubmitting}
                  className="flex-1"
                >
                  {isSubmitting ? (
                    <>
                      <SafeIcon name="Loader2" className="w-4 h-4 mr-2 animate-spin" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <SafeIcon name="Send" className="w-4 h-4 mr-2" />
                      Kirim Pesan
                    </>
                  )}
                </GlowButton>
                <a href="./landing-page.html" className="flex-1">
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full border-primary/50 text-primary hover:bg-primary/10"
                    disabled={isSubmitting}
                  >
                    <SafeIcon name="X" className="w-4 h-4 mr-2" />
                    Batal
                  </Button>
                </a>
              </div>

              {/* Info Section */}
              <div className="pt-6 border-t border-border/50 space-y-3">
                <p className="text-sm text-muted-foreground">
                  Atau hubungi saya langsung melalui:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:luthfi@example.com"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <SafeIcon name="Mail" className="w-5 h-5" />
                    <span className="text-sm">luthfi@example.com</span>
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <SafeIcon name="MessageCircle" className="w-5 h-5" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </form>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'Clock',
              title: 'Respons Cepat',
              description: 'Saya biasanya merespons dalam 24 jam',
            },
            {
              icon: 'Shield',
              title: 'Privasi Terjamin',
              description: 'Data Anda aman dan tidak akan dibagikan',
            },
            {
              icon: 'Zap',
              title: 'Siap Beraksi',
              description: 'Mari kita wujudkan ide Anda bersama',
            },
          ].map((item, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl p-6 border border-primary/10 text-center hover:border-primary/30 transition-all group animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex justify-center mb-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/10 blur-lg rounded-full group-hover:bg-primary/20 transition-all"></div>
                  <SafeIcon
                    name={item.icon}
                    className="relative w-8 h-8 text-primary"
                  />
                </div>
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
