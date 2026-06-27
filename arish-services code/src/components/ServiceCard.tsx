import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Landmark, FileText, GraduationCap, Laptop, Briefcase, Rocket, ChevronDown, ChevronUp, Check, Users, FolderKanban } from "lucide-react";
import { Service } from "../data";

const iconMap = {
  PFM: Landmark,
  Policy: FileText,
  Training: GraduationCap,
  IT: Laptop,
  Consulting: Briefcase,
  Startup: Rocket,
};

interface ServiceCardProps {
  service: Service;
  key?: string;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[service.iconName] || Briefcase;

  return (
    <motion.div
      layout
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`relative group bg-white rounded-2xl border border-slate-100 p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer ${
        isExpanded ? "ring-2 ring-[#25a2ff]/20 md:col-span-1" : ""
      }`}
      onClick={() => setIsExpanded(!isExpanded)}
      id={`service-card-${service.id}`}
    >
      {/* Visual Accent Corner on hover */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#25a2ff]/5 to-[#ff439b]/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500 pointer-events-none" />

      <div className="flex items-start gap-5">
        <div className="relative flex items-center justify-center w-14 h-14 rounded-xl bg-[#25a2ff]/10 text-[#25a2ff] group-hover:bg-[#25a2ff] group-hover:text-white transition-colors duration-300 shrink-0">
          <IconComponent className="w-7 h-7" />
        </div>
        
        <div className="space-y-2 flex-grow">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-sans tracking-wider font-semibold text-[#ff439b] uppercase">
              {service.tagline}
            </span>
            <div className="text-slate-400 group-hover:text-[#25a2ff] transition-colors">
              {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </div>
          </div>
          <h3 className="text-xl font-bold font-sans text-slate-900 group-hover:text-[#25a2ff] transition-colors">
            {service.title}
          </h3>
          
          <p className="text-sm leading-relaxed text-slate-600">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mt-6 pt-6 border-t border-slate-100 space-y-6 text-slate-700" onClick={(e) => e.stopPropagation()}>
              
              {/* Core statement */}
              {service.expandedDescription && (
                <p className="text-sm italic text-slate-600 bg-slate-50/50 p-4 rounded-xl border-l-[3px] border-[#25a2ff]">
                  {service.expandedDescription}
                </p>
              )}

              {/* Who we serve */}
              {service.whoWeServe && (
                <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <Users className="w-4 h-4 text-[#25a2ff]" />
                    Target Group / Who We Serve
                  </h4>
                  <p className="text-sm text-slate-800 font-medium">
                    {service.whoWeServe}
                  </p>
                </div>
              )}

              {/* Offerings list */}
              {service.keyOfferings && service.keyOfferings.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                    Key Offerings & Focus Areas
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {service.keyOfferings.map((offering, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm">
                        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#25a2ff]/10 text-[#25a2ff] shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[3px]" />
                        </span>
                        <span className="text-slate-700 leading-snug">{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notable Projects */}
              {service.notableProjects && service.notableProjects.length > 0 && (
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900">
                    <FolderKanban className="w-4 h-4 text-[#ff439b]" />
                    Notable Achievements / Projects
                  </h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {service.notableProjects.map((project, index) => (
                      <li key={index} className="flex items-start gap-2.5 text-sm font-medium text-slate-800">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#ff439b] mt-2 shrink-0" />
                        <span>{project}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="text-center pt-2">
                <button
                  type="button"
                  className="text-xs font-semibold text-[#25a2ff] hover:text-[#ff439b] inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  onClick={() => setIsExpanded(false)}
                >
                  Collapse Details ↑
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
