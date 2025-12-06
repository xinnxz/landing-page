
        
/** Tipe untuk ringkasan proyek yang ditampilkan di halaman Portofolio */
export interface IPortfolioProjectSummary {
  id: string;
  title: string;
  tagline: string;
  techStackTags: string[];
  thumbnailUrl: string;
}

/** Tipe untuk detail proyek */
export interface IPortfolioProjectDetail extends IPortfolioProjectSummary {
  description: string;
  role: string;
  features: string[];
  mainImageUrl: string;
  secondaryImageUrl: string;
  demoLink: string;
  repoLink: string;
}

// Data proyek mock
const MOCK_PROJECTS: IPortfolioProjectDetail[] = [
  {
    id: "p_saas_platform",
    title: "Kryptos Analytics Platform",
    tagline: "Platform Analitik SaaS Berbasis AI untuk pasar kripto.",
    techStackTags: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "Tailwind CSS"],
    thumbnailUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/480020f9-2f7d-4ebc-a095-f3b9d03499cf.png",
    
    // Detail Fields
    description: "Pengembangan platform SaaS lengkap yang menawarkan analisis data real-time, visualisasi, dan prediksi menggunakan model AI khusus untuk pergerakan harga aset kripto. Proyek ini berfokus pada skalabilitas tinggi dan kinerja data.",
    role: "Full-Stack Developer Utama (Arsitektur & Implementasi)",
    features: [
      "Dashboard interaktif real-time.", 
      "Integrasi API bursa major.", 
      "Sistem otentikasi berbasis JWT.", 
      "Optimasi performa data besar."
    ],
    mainImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/76e9fafd-0e64-45d8-8978-f6006052ea30.png",
    secondaryImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/afc3bd5f-f882-486a-afbb-704646fbc169.png",
    demoLink: "https://demo.kryptosanalytics.com",
    repoLink: "https://github.com/luthfidev/kryptos-saas-platform",
  },
  {
    id: "p_ecom_api",
    title: "Vortex E-Commerce API",
    tagline: "API E-Commerce headless yang cepat dan aman dengan GoLang.",
    techStackTags: ["GoLang", "PostgreSQL", "Docker", "REST API", "Redis"],
    thumbnailUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/18ff34be-a601-4aeb-b01f-dc28a0e69115.png",
    
    // Detail Fields
    description: "Membangun layanan backend API untuk platform e-commerce yang mampu menangani ribuan permintaan per detik. Fokus pada performa tinggi, caching, dan arsitektur microservices ringan menggunakan Go.",
    role: "Backend Architect & Developer",
    features: [
      "Manajemen Inventaris Microservice.", 
      "Sistem pembayaran terintegrasi.", 
      "Otentikasi OAuth2.", 
      "Caching data menggunakan Redis."
    ],
    mainImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/ba642ddf-8016-4b69-ab88-63c4398d818e.png",
    secondaryImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/14efb422-3ea5-433c-b96e-f6579b7e6a12.png",
    demoLink: "https://api.vortexecommerce.com/docs", // Link dummy ke dokumentasi API
    repoLink: "https://github.com/luthfidev/vortex-ecom-api",
  },
  {
    id: "p_cms_head",
    title: "Aether CMS Headless",
    tagline: "Sistem Manajemen Konten tanpa kepala yang berbasis Node.js.",
    techStackTags: ["Node.js", "Express", "MongoDB", "React Admin", "GraphQL"],
    thumbnailUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/2abc2b51-2c3c-4e74-9d6e-759dfb340e39.png",
    
    // Detail Fields (Jika nanti diperlukan bisa ditambahkan, sementara hanya ringkasan)
    description: "Sistem CMS kustom untuk pengelolaan konten multi-bahasa dengan antarmuka yang ramah pengguna dan API GraphQL yang fleksibel untuk integrasi klien.",
    role: "Full-Stack Developer",
    features: [],
    mainImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/03c20792-f509-41e5-ab64-146089a2ac4a.png",
    secondaryImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/5f0ebe46-effd-42b7-8276-96deee68867c.png",
    demoLink: "https://admin.aethercms.com",
    repoLink: "https://github.com/luthfidev/aether-cms",
  },
  {
    id: "p_utility_app",
    title: "Chrono Task Manager",
    tagline: "Aplikasi produktivitas berbasis web, cepat dan minimalis.",
    techStackTags: ["Astro", "React", "State Management (Zustand)", "Firebase"],
    thumbnailUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/7f40fe03-cdcb-4d17-8495-7b38450b7e4f.png",
    
    // Detail Fields (Jika nanti diperlukan bisa ditambahkan, sementara hanya ringkasan)
    description: "Aplikasi web progresif (PWA) yang ringan untuk manajemen tugas harian, dirancang untuk kecepatan loading yang ekstrem menggunakan Astro Islands.",
    role: "Frontend Specialist & Developer PWA",
    features: [],
    mainImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/01f99125-c190-47b8-a29e-e0273e7576d8.png",
    secondaryImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/1e363afe-0756-4a13-8779-54d3eee5d4e9.png",
    demoLink: "https://chrono.tasks.app",
    repoLink: "https://github.com/luthfidev/chrono-task-manager",
  },
];

/** 
 * Data Ringkasan Proyek untuk tampilan Portofolio 
 * Mengambil ringkasan dari data detail 
 */
export const PORTFOLIO_SUMMARIES: IPortfolioProjectSummary[] = MOCK_PROJECTS.map(p => ({
  id: p.id,
  title: p.title,
  tagline: p.tagline,
  techStackTags: p.techStackTags,
  thumbnailUrl: p.thumbnailUrl,
}));

/** 
 * Fungsi helper untuk mendapatkan detail proyek berdasarkan ID 
 */
export function getProjectDetail(id: string): IPortfolioProjectDetail | undefined {
  return MOCK_PROJECTS.find(p => p.id === id);
}

// Untuk memastikan detail proyek tersedia untuk Page Detail Proyek.
export const PROJECT_DETAILS = MOCK_PROJECTS;
        
      