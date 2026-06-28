import { ArrowRight, Check, Trophy, ChevronRight, Sparkles } from "lucide-react";
import WaveDotsBackground from "../components/WaveDotsBackground";
import ClientCarousel from "../components/ClientCarousel";
import ServiceCard from "../components/ServiceCard";
import { CORE_SERVICES, EXTENDED_SERVICES } from "../data";

interface HomeProps {
  onNavigateTo: (page: string) => void;
}

export default function Home({ onNavigateTo }: HomeProps) {
  const handleExploreClick = () => {
    const element = document.getElementById("home-services-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      onNavigateTo("services");
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH S-CURVE EFFECT & DOTS WAVE ANIMATION */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-16 pb-20 sm:pb-24 overflow-hidden bg-white text-slate-900 border-b border-slate-100">
        {/* Animated canvas wave background + curves */}
        <WaveDotsBackground />

        <div className="container mx-auto px-6 max-w-4xl relative z-20">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Header Area */}
            <div className="space-y-6 flex flex-col items-center">

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-sans tracking-tight text-slate-900 leading-[1.12]">
                Where Financial Expertise <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#25a2ff] via-[#4f46e5] to-[#ff439b]">
                  Meets Digital Innovation.
                </span>
              </h1>
              
              {/* Identity line matching user prompt */}
              <div className="border-l-3 border-[#25a2ff] pl-4 pr-1 py-1.5 bg-slate-100/60 rounded-r-xl max-w-xl text-center">
                <p className="text-xs sm:text-sm font-semibold tracking-wider text-slate-800 font-sans">
                  *Trusted Since 2018 | Public Financial Management | IT Solutions | Policy Consulting
                </p>
              </div>
            </div>

            {/* Standard paragraph requested */}
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 max-w-2xl text-center font-sans font-medium">
              Empowering governments, development partners, and private enterprises across Nepal with integrated financial management, digital transformation, and capacity-building solutions. Registered under Nepal's Company Act 2063, we bring collective expertise in PFM, governance reform, and software innovation.
            </p>

            {/* Calls To Action and Bullet buttons */}
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row pt-2 justify-center items-stretch sm:items-center w-full sm:w-auto">
              <button
                type="button"
                onClick={handleExploreClick}
                className="px-8 py-4 bg-gradient-to-r from-[#25a2ff] to-[#ff439b] text-white text-sm font-bold rounded-xl shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 active:scale-95 text-center hover:opacity-95"
              >
                Explore Our Work
                <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={() => onNavigateTo("contact")}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-sm font-bold rounded-xl transition-all flex items-center justify-center cursor-pointer active:scale-95 text-center"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE OUR SERVICES SECTION WITH SYSTEMIC LAYOUT */}
      {/* Background set to bg-white so it merges perfectly with the white S-curve divider drawn by WaveDotsBackground */}
      <section id="home-services-section" className="bg-white py-20 relative z-35 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          
          {/* Section Main Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-slate-900">
              Our Professional Services
            </h2>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              We deliver results-driven services across <strong className="text-[#25a2ff] font-semibold">3 core services</strong> and <strong className="text-[#ff439b] font-semibold">3 extended services</strong>. Click on any card below to expand details on Who We Serve, Key Offerings, and Notable Achievements.
            </p>
          </div>

          {/* 2.1 Core Services Subheader */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-[2px] bg-[#25a2ff]/20 flex-grow" />
            <h4 id="core-services-heading" className="text-xs font-mono font-black bg-[#25a2ff] text-white px-5 py-2 rounded-full uppercase tracking-wider text-center shadow-sm">
              Our Core Services
            </h4>
            <div className="h-[2px] bg-[#25a2ff]/20 flex-grow" />
          </div>

          {/* Core Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* 2.2 Symmetrical Page Divider Section between Core and Extended */}
          <div className="my-20 relative">
            <div className="absolute inset-0 bg-slate-50 rounded-3xl -z-10" />
            <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-slate-950 rounded-3xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
              
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#25a2ff]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff439b]/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="space-y-4 max-w-2xl text-left relative z-10">
                <h4 className="text-xl md:text-3xl font-extrabold font-sans tracking-tight leading-snug text-white">
                  Over 24+ Major Engagements Successfully Executed
                </h4>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-justify">
                  From implementing complex federal Public Sector Accounting Standards (NPSAS) compliance models to preparing municipal accounting guidelines, Arish Services brings uncompromised regulatory safety and modern technological solutions to Nepal's public sector.
                </p>
              </div>

              <div className="shrink-0 relative z-10">
                <button
                  type="button"
                  onClick={() => onNavigateTo("contact")}
                  className="px-6 py-4 bg-gradient-to-r from-[#25a2ff] to-[#ff439b] hover:opacity-95 text-white rounded-xl text-xs font-bold font-sans uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
                >
                  Work With Our Experts
                  <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
                </button>
              </div>
            </div>
          </div>

          {/* 2.3 Extended Services Area Header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="h-[2px] bg-[#ff439b]/20 flex-grow" />
            <h4 id="extended-services-heading" className="text-xs font-mono font-black bg-[#ff439b] text-white px-5 py-2 rounded-full uppercase tracking-wider text-center shadow-sm">
              Our Extended Service Area
            </h4>
            <div className="h-[2px] bg-[#ff439b]/20 flex-grow" />
          </div>

          {/* Extended Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXTENDED_SERVICES.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 3. TRUST TRACK BANNER OVERLAY & LOGO STRIP (UNCHANGED SECTION AS REQUESTED) */}
      <section className="bg-slate-50 py-16 shadow-xs relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
            <span className="text-xs font-mono font-extrabold tracking-widest text-[#25a2ff] uppercase bg-sky-50 px-3 py-1 rounded-full">
              ✦ Valued Partnerships
            </span>
            <h3 className="text-2xl md:text-3xl font-black font-sans tracking-tight text-slate-900">
              Our Valued Clients & Partners
            </h3>
            <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
              Arish Services Pvt. Ltd. is trusted by ministries, municipal governments, and international donor-funded development agencies across Nepal.
            </p>
          </div>

          <ClientCarousel />
        </div>
      </section>

      {/* 4. INTERACTIVE QUICK STATS CALLOUT (ACCENT FOOTER STATS) */}
      <section className="bg-white py-16 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-pink-950 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-lg">
            
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#25a2ff]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff439b]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              <div className="space-y-2 p-4">
                <span className="block text-4xl md:text-5xl font-black text-[#25a2ff] font-sans">2018</span>
                <span className="block text-xs font-mono uppercase tracking-widest text-slate-400">Trusted Since</span>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">Providing high-value regulatory and governance models to Nepal public entities.</p>
              </div>

              <div className="space-y-2 p-4">
                <span className="block text-4xl md:text-5xl font-black text-[#ff439b] font-sans">24+</span>
                <span className="block text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">Assignments Complete</span>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">Empowering ministries, donor operations and federal regulatory setups.</p>
              </div>

              <div className="space-y-2 p-4">
                <span className="block text-4xl md:text-5xl font-black text-slate-100 font-sans">Full</span>
                <span className="block text-xs font-mono uppercase tracking-widest text-slate-400 font-bold">PAN / VAT Compliant</span>
                <p className="text-xs text-slate-300 max-w-xs mx-auto">Registered under Nepal's Company Registrar, Act 2063 and full service coverage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
