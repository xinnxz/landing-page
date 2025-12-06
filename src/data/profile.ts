
        
/** Tipe untuk tautan media sosial atau kontak */
export interface ISocialLink {
  id: string;
  name: string;
  url: string;
  iconName: string; // Menggunakan nama ikon Lucide
}

/** Tipe data untuk informasi kontak utama */
export interface IContactInfo {
  email: string;
  phone: string;
  location: string;
}

/** Tipe data utama untuk halaman profil */
export interface IProfileData {
  name: string;
  title: string;
  tagline: string;
  headline: string;
  bio: string;
  heroImageUrl: string;
  profileImageUrl: string;
  contact: IContactInfo;
  socialLinks: ISocialLink[];
}

export const PROFILE_DATA: IProfileData = {
  name: "Luthfi Alfaridz Fahmi",
  title: "Freelancer Programmer & Developer",
  tagline: "Membangun masa depan digital dengan kode yang bersih dan indah.",
  headline: "Inovator Digital dengan Skill Penuh Pada Teknologi Web Modern",
  bio: "Saya Luthfi Alfaridz Fahmi, seorang programmer freelancer dengan fokus mendalam pada pengembangan web full-stack yang modern dan responsif. Dengan pengalaman lebih dari 5 tahun, saya berspesialisasi dalam menciptakan solusi digital yang cepat, aman, dan intuitif. Filosofi saya adalah menggabungkan fungsionalitas optimal dengan estetika desain futuristik, memastikan setiap proyek tidak hanya bekerja dengan sempurna, tetapi juga meninggalkan kesan mendalam. Saya bersemangat untuk mengubah ide kompleks menjadi kenyataan digital yang efisien.",
  
heroImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/image/2025/12/3/69a531f6-93e2-442e-b5fb-793fecd01bd7.png",
   
   profileImageUrl: "https://spark-builder.s3.us-east-1.amazonaws.com/user-image/2025/12/3/bf9de8fc-37ce-4860-ba0f-18a19bce4715.png",
  
  contact: {
    email: "luthfifahmi.alv@gmail.com",
    phone: "+62 878 3456 8565", // Contoh nomor
    location: "Sukabumi, Indonesia",
  },
  
  socialLinks: [
    {
      id: "sl_github",
      name: "GitHub",
      url: "https://github.com/xinnxz",
      iconName: "Github",
    },
    {
      id: "sl_linkedin",
      name: "LinkedIn",
      url: "https://linkedin.com/in/luthfialv7",
      iconName: "Linkedin",
    },
    {
      id: "sl_x",
      name: "X (Twitter)",
      url: "https://x.com/0xxinn",
      iconName: "SquareRss",
    },
    {
      id: "sl_mail",
      name: "Email Langsung",
      url: "mailto:luthfifahmi.alv@gmail.com",
      iconName: "Mail",
    },
  ],
};
        
      