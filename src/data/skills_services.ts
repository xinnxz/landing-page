
        
/** Tipe data untuk item Keahlian Teknis */
export interface ISkillItem {
  id: string;
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Lainnya";
  iconName: string; // Lucide icon name, atau logo jika diperlukan (tapi kita pakai Lucide)
  level: number; // 0-100%
}

/** Tipe data untuk Layanan Freelance */
export interface IServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const TECHNICAL_SKILLS: ISkillItem[] = [
  // Frontend
  { id: "s_react", name: "React / Next.js", category: "Frontend", iconName: "Atom", level: 95 },
  { id: "s_ts", name: "TypeScript", category: "Frontend", iconName: "Tally4", level: 90 },
  { id: "s_astro", name: "Astro", category: "Frontend", iconName: "Moon", level: 80 },
  { id: "s_tailwind", name: "Tailwind CSS", category: "Frontend", iconName: "Palette", level: 95 },
  
  // Backend
  { id: "s_node", name: "Node.js (Express)", category: "Backend", iconName: "Server", level: 90 },
  { id: "s_nest", name: "NestJS", category: "Backend", iconName: "Layers", level: 85 },
  { id: "s_go", name: "Go (Golang)", category: "Backend", iconName: "Bot", level: 75 },
  
  // Database
  { id: "s_pq", name: "PostgreSQL", category: "Database", iconName: "Database", level: 88 },
  { id: "s_mongo", name: "MongoDB", category: "Database", iconName: "Dna", level: 80 },
  { id: "s_prisma", name: "Prisma ORM", category: "Database", iconName: "Shield", level: 90 },

  // DevOps & Lainnya
  { id: "s_docker", name: "Docker & CI/CD", category: "DevOps", iconName: "ShipWheel", level: 85 },
  { id: "s_aws", name: "AWS Services", category: "DevOps", iconName: "Cloud", level: 70 },
  { id: "s_git", name: "Git Workflow & GitHub", category: "Lainnya", iconName: "GitBranch", level: 98 },
];

export const FREELANCE_SERVICES: IServiceItem[] = [
  {
    id: "service_fsd",
    title: "Pengembangan Full-Stack Kustom",
    description: "Membangun aplikasi web, dari infrastruktur backend yang kokoh hingga antarmuka pengguna yang dinamis menggunakan Next.js/React dan Node.js/Go.",
    iconName: "Zap",
  },
  {
    id: "service_arch",
    title: "Arsitektur Microservices & API",
    description: "Merancang dan mengimplementasikan arsitektur API yang scalable dan aman (REST/GraphQL) untuk mendukung aplikasi skala besar.",
    iconName: "Workflow",
  },
  {
    id: "service_consult",
    title: "Konsultasi Teknis & Code Review",
    description: "Memberikan panduan ahli, optimasi performa, dan tinjauan kode untuk meningkatkan kualitas dan efisiensi proyek Anda yang sudah ada.",
    iconName: "Target",
  },
];
        
      