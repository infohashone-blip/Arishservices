import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Landmark, ShieldCheck, GraduationCap, Gavel, Rocket, ArrowRight } from "lucide-react";
import { MISSION_PILLARS } from "../data";
import rocketImg from "../assets/images/five_pillars_rocket_1780111596425.png";

const iconMap = [Landmark, ShieldCheck, GraduationCap, Gavel, Rocket];

export default function MissionPillars() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="space-y-12">
      {/* Background/Structure summary block */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative border border-slate-800">
        {/* Ambient background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#25a2ff]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ff439b]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Interactive Pillars Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] uppercase">
                Enterprise Vision
              </span>
              <h3 className="text-3xl font-extrabold font-sans tracking-tight text-white">
                Our 5 Strategic Pillars
              </h3>
              <p className="text-sm text-slate-400">
                A structured roadmap driving public transparency, institutional capacity, and technological advancement in Nepal.
              </p>
            </div>

            {/* List of Pillars Tab Buttons */}
            <div className="space-y-3 pt-4">
              {MISSION_PILLARS.map((pillar, index) => {
                const Icon = iconMap[index] || Landmark;
                const isActive = activeTab === index;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left flex items-center gap-4 px-5 py-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-sky-950/80 to-slate-900 border-[#25a2ff] text-white shadow-lg ring-1 ring-[#25a2ff]/20"
                        : "bg-slate-900/50 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white"
                    }`}
                  >
                    <span
                      className={`flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-colors ${
                        isActive ? "bg-[#25a2ff] text-white" : "bg-slate-800 text-slate-300"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="flex-grow">
                      <span className="block text-[10px] uppercase font-mono tracking-widest text-[#ff439b] font-semibold leading-none mb-1">
                        {pillar.subtitle}
                      </span>
                      <span className="block text-sm font-bold font-sans">
                        {pillar.title}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 text-[#25a2ff] transition-transform ${
                        isActive ? "translate-x-1 opacity-100" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center Column: Render Content Card with AnimatePresence */}
          <div className="lg:col-span-7 h-full flex flex-col justify-between space-y-8 bg-slate-950/80 border border-slate-800/60 p-6 md:p-8 rounded-2xl relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 flex-grow"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-wider bg-[#25a2ff]/10 text-[#25a2ff] px-3 py-1 rounded-full font-bold uppercase">
                    {MISSION_PILLARS[activeTab].subtitle}
                  </span>
                </div>
                
                <h4 className="text-2xl font-bold font-sans text-white border-b border-slate-800 pb-3">
                  {MISSION_PILLARS[activeTab].title}
                </h4>
                
                <p className="text-sm leading-relaxed text-slate-300 text-justify">
                  {MISSION_PILLARS[activeTab].paragraph}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Render the custom rocket image natively containing the 5 pillars model */}
            <div className="relative border-t border-slate-800/80 pt-6 mt-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-4 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900 group">
                  <img
                    src={rocketImg}
                    alt="5 Mission Pillars with Rocket illustration"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="md:col-span-8">
                  <h5 className="text-xs font-mono font-bold uppercase text-[#ff439b] tracking-wider">
                    ✦ Strategic Growth Engine
                  </h5>
                  <p className="text-xs text-slate-400 leading-relaxed mt-1">
                    This launchpad illustration models our corporate approach. Our solutions fuel enterprise launches, combining robust accounting frameworks with cloud automation databases.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
