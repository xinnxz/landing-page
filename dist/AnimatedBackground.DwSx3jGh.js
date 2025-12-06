import { jsx, jsxs } from "react/jsx-runtime";
import * as React from "react";
import { lazy, Suspense, createElement, useState, useEffect, useRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Circle } from "lucide-react";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
      destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
      outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 rounded-md px-3 text-xs",
      lg: "h-10 rounded-md px-8",
      icon: "h-9 w-9"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({
    variant,
    size,
    className
  })), ref, ...props, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\ui\\\\button.tsx", "data-source-line-start": "47", "data-source-line-end": "51" });
});
Button.displayName = "Button";
const iconCache = /* @__PURE__ */ new Map();
function SafeIcon({
  name,
  ...props
}) {
  if (!iconCache.has(name)) {
    try {
      const IconComponent2 = lazy(() => import("lucide-react").then((module) => {
        const icon = module[name];
        if (!icon) {
          console.warn(`Icon "${name}" not found in lucide-react, using fallback`);
          return {
            default: Circle
          };
        }
        return {
          default: icon
        };
      }).catch(() => {
        console.warn(`Failed to load icon "${name}", using fallback`);
        return {
          default: Circle
        };
      }));
      iconCache.set(name, IconComponent2);
    } catch {
      iconCache.set(name, Circle);
    }
  }
  const IconComponent = iconCache.get(name) || Circle;
  return /* @__PURE__ */ jsx(Suspense, { fallback: /* @__PURE__ */ jsx(Circle, { ...props, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\SafeIcon.tsx", "data-source-line-start": "40", "data-source-line-end": "40" }), "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\SafeIcon.tsx", "data-source-line-start": "40", "data-source-line-end": "42", children: createElement(IconComponent, props) });
}
function FuturisticHeader({
  currentPage = "landing_page"
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  const navLinks = [{
    name: "Beranda",
    href: "./landing-page.html",
    id: "landing_page"
  }, {
    name: "Tentang",
    href: "./about-me.html",
    id: "about_me"
  }, {
    name: "Skill",
    href: "./skills-and-services.html",
    id: "skills_and_services"
  }, {
    name: "Portofolio",
    href: "./portfolio-showcase.html",
    id: "portfolio_showcase"
  }, {
    name: "Kontak",
    href: "./contact-and-social.html",
    id: "contact_and_social"
  }];
  return /* @__PURE__ */ jsx("header", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-effect shadow-lg" : "bg-transparent"}`, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "34", "data-source-line-end": "109", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "39", "data-source-line-end": "108", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between h-16 md:h-20", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "40", "data-source-line-end": "87", children: [
      /* @__PURE__ */ jsxs("a", { href: "./landing-page.html", className: "flex items-center gap-2 group", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "42", "data-source-line-end": "56", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "46", "data-source-line-end": "52", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "47", "data-source-line-end": "47" }),
          /* @__PURE__ */ jsx(SafeIcon, { name: "Code2", className: "relative w-8 h-8 text-primary group-hover:scale-110 transition-transform", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "48", "data-source-line-end": "51" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-xl md:text-2xl font-bold gradient-text hidden sm:inline", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "53", "data-source-line-end": "55", children: "ReonTech" })
      ] }),
      /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-1", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "59", "data-source-line-end": "73", children: navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: `px-4 py-2 rounded-lg font-medium transition-all ${currentPage === link.id ? "text-primary glow-text" : "text-foreground/80 hover:text-primary hover:bg-primary/10"}`, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "61", "data-source-line-end": "71", children: link.name }, link.id)) }),
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "md:hidden", onClick: () => setIsMobileMenuOpen(!isMobileMenuOpen), "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "76", "data-source-line-end": "86", children: /* @__PURE__ */ jsx(SafeIcon, { name: isMobileMenuOpen ? "X" : "Menu", className: "w-6 h-6", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "82", "data-source-line-end": "85" }) })
    ] }),
    isMobileMenuOpen && /* @__PURE__ */ jsx("nav", { className: "md:hidden pb-4 space-y-2 animate-slide-up", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "91", "data-source-line-end": "106", children: navLinks.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: `block px-4 py-3 rounded-lg font-medium transition-all ${currentPage === link.id ? "text-primary bg-primary/10 glow-border" : "text-foreground/80 hover:text-primary hover:bg-primary/5"}`, onClick: () => setIsMobileMenuOpen(false), "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticHeader.tsx", "data-source-line-start": "93", "data-source-line-end": "104", children: link.name }, link.id)) })
  ] }) });
}
function FuturisticFooter({
  variant = "simple"
}) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const socialLinks = [{
    name: "GitHub",
    icon: "Github",
    href: "https://github.com"
  }, {
    name: "LinkedIn",
    icon: "Linkedin",
    href: "https://linkedin.com"
  }, {
    name: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com"
  }, {
    name: "Email",
    icon: "Mail",
    href: "mailto:luthfi@example.com"
  }];
  const quickLinks = [{
    name: "Tentang",
    href: "./about-me.html"
  }, {
    name: "Keahlian",
    href: "./skills-and-services.html"
  }, {
    name: "Portofolio",
    href: "./portfolio-showcase.html"
  }, {
    name: "Kontak",
    href: "./contact-and-social.html"
  }];
  return /* @__PURE__ */ jsxs("footer", { className: "relative mt-auto border-t border-primary/20", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "26", "data-source-line-end": "110", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "28", "data-source-line-end": "28" }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 py-8", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "30", "data-source-line-end": "109", children: [
      variant === "extended" ? /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "32", "data-source-line-end": "79", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "34", "data-source-line-end": "39", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold gradient-text", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "35", "data-source-line-end": "35", children: "Luthfi Alfaridz Fahmi" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "36", "data-source-line-end": "38", children: "Freelance Programmer yang berfokus pada pengembangan web modern dan solusi teknologi inovatif." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "42", "data-source-line-end": "56", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "43", "data-source-line-end": "43", children: "Tautan Cepat" }),
          /* @__PURE__ */ jsx("ul", { className: "space-y-2", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "44", "data-source-line-end": "55", children: quickLinks.map((link) => /* @__PURE__ */ jsx("li", { "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "46", "data-source-line-end": "53", children: /* @__PURE__ */ jsx("a", { href: link.href, className: "text-sm text-muted-foreground hover:text-primary transition-colors", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "47", "data-source-line-end": "52", children: link.name }) }, link.name)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "59", "data-source-line-end": "78", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-foreground", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "60", "data-source-line-end": "60", children: "Terhubung" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-3", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "61", "data-source-line-end": "77", children: socialLinks.map((social) => /* @__PURE__ */ jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group", "aria-label": social.name, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "63", "data-source-line-end": "75", children: /* @__PURE__ */ jsx(SafeIcon, { name: social.icon, className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "71", "data-source-line-end": "74" }) }, social.name)) })
        ] })
      ] }) : /* @__PURE__ */ jsx("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4 mb-4", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "81", "data-source-line-end": "100", children: /* @__PURE__ */ jsx("div", { className: "flex gap-3", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "83", "data-source-line-end": "99", children: socialLinks.map((social) => /* @__PURE__ */ jsx("a", { href: social.href, target: "_blank", rel: "noopener noreferrer", className: "w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all group", "aria-label": social.name, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "85", "data-source-line-end": "97", children: /* @__PURE__ */ jsx(SafeIcon, { name: social.icon, className: "w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "93", "data-source-line-end": "96" }) }, social.name)) }) }),
      /* @__PURE__ */ jsx("div", { className: "pt-6 border-t border-border/50 text-center", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "104", "data-source-line-end": "108", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\FuturisticFooter.tsx", "data-source-line-start": "105", "data-source-line-end": "107", children: [
        "© ",
        currentYear,
        " Luthfi Alfaridz Fahmi. Semua hak dilindungi."
      ] }) })
    ] })
  ] });
}
function AnimatedBackground() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let isMouseMoving = false;
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
    };
    const handleMouseLeave = () => {
      isMouseMoving = false;
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    const particles = [];
    const particleCount = 120;
    for (let i = 0; i < particleCount; i++) {
      const vx = (Math.random() - 0.5) * 0.5;
      const vy = (Math.random() - 0.5) * 0.5;
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx,
        vy,
        originalVx: vx,
        originalVy: vy,
        size: Math.random() * 2 + 1
      });
    }
    let animationFrameId;
    const animate = () => {
      ctx.fillStyle = "rgba(17, 24, 39, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(34, 211, 238, 0.05)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      particles.forEach((particle) => {
        if (isMouseMoving) {
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const attractionRadius = 150;
          if (distance < attractionRadius) {
            const strength = (1 - distance / attractionRadius) * 0.15;
            const angle = Math.atan2(dy, dx);
            particle.vx += Math.cos(angle) * strength;
            particle.vy += Math.sin(angle) * strength;
            particle.vx *= 0.98;
            particle.vy *= 0.98;
          } else {
            particle.vx += (particle.originalVx - particle.vx) * 0.02;
            particle.vy += (particle.originalVy - particle.vy) * 0.02;
          }
        } else {
          particle.vx += (particle.originalVx - particle.vx) * 0.02;
          particle.vy += (particle.originalVy - particle.vy) * 0.02;
        }
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
        ctx.fillStyle = "rgba(34, 211, 238, 0.6)";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        particles.forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 150) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return /* @__PURE__ */ jsx("canvas", { ref: canvasRef, className: "fixed inset-0 pointer-events-none z-0", style: {
    opacity: 0.4
  }, "data-source-file": "E:\\\\DATA\\\\Ngoding\\\\landing-page\\\\src\\\\components\\\\common\\\\AnimatedBackground.tsx", "data-source-line-start": "163", "data-source-line-end": "167" });
}
export {
  AnimatedBackground as A,
  Button as B,
  FuturisticHeader as F,
  SafeIcon as S,
  FuturisticFooter as a,
  cn as c
};
