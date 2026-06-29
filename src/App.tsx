import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Building2, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Award
} from "lucide-react";
import { Analytics } from "@vercel/analytics/react";

// Import pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import logoImg from "./assets/images/arish_logo_1780157441526.png";

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  // Keep page swaps smooth by auto-scrolling to top of screen on page swap
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Our Services" },
    { id: "about", label: "About Us" },
    { id: "team", label: "Our Team" },
    { id: "contact", label: "Contact Us" }
  ];

  // Helper inside click handlers
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "services":
        return <Services onNavigateTo={handlePageChange} />;
      case "about":
        return <About />;
      case "team":
        return <Team />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home onNavigateTo={handlePageChange} />;
    }
  };

  return (
    <div className="font-sans antialiased bg-white text-slate-800 selection:bg-sky-100 selection:text-sky-900 flex flex-col min-h-screen">
      
      {/* FIXED TOP HEADER WITH HORIZONTAL NAVIGATION BAR */}
      {/* Features: Glassmorphism blur, horizontal navigation with brand colors, and high contrast */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/60 py-3.5 px-6 shadow-sm transition-all">
        <div className="container mx-auto max-w-7xl flex items-center justify-between gap-4">
          
          {/* Logo Brand matching the uploaded company logo exactly */}
          <button 
            type="button"
            id="header-brand-logo-btn"
            onClick={() => handlePageChange("home")}
            className="flex items-center shrink-0 active:scale-95 transition-transform text-left cursor-pointer"
          >
            <svg 
              className="w-10 h-10 md:w-12 md:h-12 shrink-0 object-contain" 
              viewBox="0 0 120 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logoGradVertical" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#25a2ff" />
                  <stop offset="35%" stopColor="#ff439b" />
                  <stop offset="65%" stopColor="#ff439b" />
                  <stop offset="100%" stopColor="#25a2ff" />
                </linearGradient>
                <linearGradient id="logoGradHorizontal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#ff439b" />
                  <stop offset="35%" stopColor="#25a2ff" />
                  <stop offset="65%" stopColor="#25a2ff" />
                  <stop offset="100%" stopColor="#ff439b" />
                </linearGradient>
              </defs>
              <g>
                {/* Vertical curve arch (top/bottom petals) */}
                <path d="M60,10 C70,30 80,45 80,60 C80,75 70,90 60,110 C50,90 40,75 40,60 C40,45 50,30 60,10 Z" fill="url(#logoGradVertical)" opacity="0.95" />
                {/* Horizontal curve arch (left/right petals) */}
                <path d="M10,60 C30,70 45,80 60,80 C75,80 90,70 110,60 C90,50 75,40 60,40 C45,40 30,50 10,60 Z" fill="url(#logoGradHorizontal)" opacity="0.95" />
                {/* Overlapping diagonal arcs for detailed glow */}
                <path d="M35,35 C48,45 55,55 60,60 C55,65 48,75 35,85 C45,75 55,65 60,60 C55,55 45,45 35,35 Z" fill="url(#logoGradVertical)" opacity="0.3" />
                <path d="M85,35 C72,45 65,55 60,60 C65,65 72,75 85,85 C75,75 65,65 60,60 C65,55 75,45 85,35 Z" fill="url(#logoGradHorizontal)" opacity="0.3" />
                {/* Elegant central diamond negative space */}
                <polygon points="60,48 72,60 60,72 48,60" fill="#ffffff" />
              </g>
            </svg>
          </button>

          {/* HORIZONTAL NAVIGATION BAR - Strict rule: NO hamburger menus! */}
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto whitespace-nowrap scrollbar-none py-1 max-w-full">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handlePageChange(item.id)}
                  className={`relative text-xs sm:text-sm font-bold tracking-wide uppercase px-3 sm:px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-[#25a2ff] bg-sky-50/70"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/55"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavLine"
                      className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#25a2ff] to-[#ff439b] rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

        </div>
      </header>

      {/* DYNAMIC TRANSITIONING CAROUSEL CONTENT PAGES */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
          >
            {renderPageContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* COMPACT FLOATING PAGE SWITCH QUICK DIALOG AT THE MID-BOTTOM FOR OPTIMAL DESKTOP NAVIGATION ACCESSIBILITY */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-slate-900/40 backdrop-blur-xl border border-white/10 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 max-w-md">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handlePageChange(item.id)}
              className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-1 rounded-lg transition-transform transition-colors ${
                isActive
                  ? "bg-gradient-to-r from-[#25a2ff] to-[#ff439b] text-white shadow-md scale-105 font-bold"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.id}
            </button>
          );
        })}
      </div>

      {/* ================= FOOTER ================= */}
      {/* Strict Copyright mandate match */}
      <footer className="py-12 bg-slate-950 text-slate-400 border-t border-white/5 relative z-10 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
            
            {/* Left Brand Area */}
            <div className="md:col-span-4 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#25a2ff] to-[#ff439b] flex items-center justify-center font-bold text-xs text-white">
                  AS
                </div>
                <div className="text-xs font-bold text-white tracking-widest uppercase">
                  Arish Services Pvt. Ltd.
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed text-justify">
                A premier Nepalese consulting house blending top-tier Public Financial Management (PFM) framework compliance with modern custom IT enterprise engineering. Trusted by development agencies and municipalities since 2018.
              </p>
            </div>

            {/* Quick Links Nav shortcuts */}
            <div className="md:col-span-4 space-y-3 text-left md:pl-8">
              <h4 className="text-xs font-mono tracking-widest uppercase text-white font-bold">
                Navigation Directory
              </h4>
              <ul className="text-xs space-y-2 font-medium">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => handlePageChange(item.id)}
                      className={`hover:text-[#ff439b] transition-colors cursor-pointer ${
                        currentPage === item.id ? "text-[#25a2ff] font-bold" : "text-slate-400"
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Copyright & Registration line */}
            <div className="md:col-span-4 text-left md:text-right space-y-3">
              <p className="text-xs font-sans text-slate-300">
                © 2026 Arish Services Pvt. Ltd. | Registered under Company Act 2006, Nepal
              </p>
            </div>

          </div>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}
