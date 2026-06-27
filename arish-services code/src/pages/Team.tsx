import TeamSection from "../components/TeamSection";
import { Users, Shield } from "lucide-react";

export default function Team() {
  return (
    <div className="bg-slate-50/20 min-h-[80vh] py-16">
      <div className="container mx-auto px-6 max-w-7xl space-y-16">
        
        {/* Header section with clean professional styling */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] bg-sky-50 px-3.5 py-1.5 rounded-full uppercase">
            ✦ Dynamic Governance Pool
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-slate-900">
            Meet Our Exceptional Team
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify md:text-center">
            Our multidisciplinary specialist network brings unparalleled hands-on experience, direct operational competence, and regulatory excellence to every single assignment in Nepal.
          </p>
        </div>

        {/* Informative corporate summary blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="p-3 bg-[#25a2ff]/10 text-[#25a2ff] rounded-xl">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                National Experts
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                Sourced from veteran Nepalese governance ranks, retired policy draftsmen, FCGO advisors, financial auditors, and corporate IT strategists.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 flex items-start gap-4">
            <div className="p-3 bg-[#25a2ff]/10 text-[#25a2ff] rounded-xl">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
                Board Direction
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">
                Ensuring full compliant oversight, long-range financial growth values, and absolute adherence to Nepal's Company Act registrar code.
              </p>
            </div>
          </div>
        </div>

        {/* Live filtered Team Grid components */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xs">
          <TeamSection />
        </div>

      </div>
    </div>
  );
}
