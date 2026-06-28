import { CORE_SERVICES, EXTENDED_SERVICES } from "../data";
import ServiceCard from "../components/ServiceCard";
import { Trophy, ChevronRight } from "lucide-react";

interface ServicesProps {
  onNavigateTo: (page: string) => void;
}

export default function Services({ onNavigateTo }: ServicesProps) {
  return (
    <div className="bg-slate-50/30 min-h-[80vh] py-16">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] bg-sky-50 px-3.5 py-1.5 rounded-full uppercase">
            ✦ Consulting Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-slate-900">
            Our Professional Services
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify md:text-center">
            We deliver results-driven services across <strong className="text-[#25a2ff] font-semibold">3 core consulting segments</strong> and <strong className="text-[#25a2ff] font-semibold">3 extended tech/startup support areas</strong>. Click on any card below to expand full details regarding Who We Serve, Key Offerings, and Notable Achievements.
          </p>
        </div>

        {/* 1. Core Services Area Heading */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-[2px] bg-[#25a2ff]/25 flex-grow" />
          <h3 className="text-sm font-mono font-black bg-gradient-to-r from-[#25a2ff] to-[#ff439b] text-white px-5 py-2 rounded-full uppercase tracking-wider text-center shadow-sm">
            Core Institutional Services
          </h3>
          <div className="h-[2px] bg-[#25a2ff]/25 flex-grow" />
        </div>

        {/* Grid of 3 Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Solid Visual Page Divider with Success Callout Banner */}
        <div className="my-20 relative">
          <div className="absolute inset-0 bg-slate-100 rounded-3xl -z-10" />
          <div className="bg-gradient-to-r from-sky-950 via-slate-900 to-rose-950 rounded-3xl p-8 md:p-12 shadow-lg text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
            {/* Absolute visual decor */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#25a2ff]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff439b]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-4 max-w-2xl text-left relative z-10">
              <div className="inline-flex items-center gap-2 bg-[#ff439b]/15 text-[#ff439b] px-3.5 py-1.5 rounded-full text-[10px] font-mono tracking-wider font-extrabold uppercase border border-[#ff439b]/20">
                <Trophy className="w-3.5 h-3.5 text-[#ff439b]" />
                Proven Track Record
              </div>
              <h4 className="text-xl md:text-3xl font-extrabold font-sans tracking-tight leading-snug">
                Over 24+ Major Engagements Successfully Executed
              </h4>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed text-justify">
                From drafting the National Industry Policy to rolling out federal Public Sector Accounting Standards (NPSAS), Arish Services delivers deep compliance, audit-ready bookkeeping manuals, and strategic policy formulations for Nepal's ministries and international agencies.
              </p>
            </div>

            <div className="shrink-0 relative z-10">
              <button
                type="button"
                onClick={() => onNavigateTo("contact")}
                className="px-6 py-4 bg-gradient-to-r from-[#25a2ff] to-[#ff439b] text-white rounded-xl text-xs font-bold font-sans uppercase tracking-wider hover:opacity-95 transition-all hover:scale-105 active:scale-95 shadow-md flex items-center gap-2 cursor-pointer"
              >
                Work With Our Experts
                <ChevronRight className="w-4 h-4 stroke-[2.5px]" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. Extended Services Area Heading */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-[2px] bg-[#25a2ff]/25 flex-grow" />
          <h3 className="text-sm font-mono font-black bg-slate-800 text-white px-5 py-2 rounded-full uppercase tracking-wider text-center shadow-sm">
            Extended Digital & Startup Services
          </h3>
          <div className="h-[2px] bg-[#25a2ff]/25 flex-grow" />
        </div>

        {/* Grid of 3 Extended Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EXTENDED_SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </div>
    </div>
  );
}
