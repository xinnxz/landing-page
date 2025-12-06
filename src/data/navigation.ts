
        
/** Tipe data untuk item navigasi */
export interface INavigationLink {
  id: string;
  label: string;
  url: string;
  iconName: string; // Lucide icon name
}

/** Tautan navigasi utama */
export const MAIN_NAVIGATION: INavigationLink[] = [
  {
    id: "nav_home",
    label: "Beranda",
    url: "#landing_page",
    iconName: "Home",
  },
  {
    id: "nav_about",
    label: "Tentang Saya",
    url: "#about_me",
    iconName: "User",
  },
  {
    id: "nav_portfolio",
    label: "Portofolio",
    url: "#portfolio_showcase",
    iconName: "Code",
  },
  {
    id: "nav_skills",
    label: "Skill",
    url: "#skills_and_services",
    iconName: "Gauge",
  },
  {
    id: "nav_contact",
    label: "Hubungi",
    url: "#contact_and_social",
    iconName: "MessageSquare",
  },
];
        
      