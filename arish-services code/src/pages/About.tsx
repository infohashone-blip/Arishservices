import { Check, Info, Shield, Award } from "lucide-react";
import boudhanathImg from "../assets/images/boudhanath_temple_1780111576408.png";
import { WHY_CHOOSE_US_KEYS } from "../data";

export default function About() {
  return (
    <div className="bg-slate-50/20 min-h-[80vh] py-16">
      <div className="container mx-auto px-6 max-w-7xl space-y-20">
        
        {/* Header section */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] bg-sky-50 px-3.5 py-1.5 rounded-full uppercase">
            ✦ Institutional Foundation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-slate-900">
            About Arish Services
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify md:text-center">
            Established in 2018, we build robust financial systems and digital tools to empower public institutions, international donors, and private enterprises across Nepal.
          </p>
        </div>

        {/* Two-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Company Intro & Registration */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] uppercase flex items-center gap-1.5">
                <Info className="w-4 h-4 text-[#25a2ff]" />
                Who We Are & What We Stand For
              </span>
              <h3 className="text-2xl md:text-3xl font-bold font-sans tracking-tight text-slate-900">
                Pioneering Financial Reform and IT Development in Nepal
              </h3>
              
              <div className="space-y-4 text-justify">
                <p className="text-sm leading-relaxed text-slate-600">
                  Arish Services Pvt. Ltd. provides comprehensive Public Financial Management (PFM) consulting, policy advisory, and custom IT solutions. Registered under the <strong>Company Registrar Act, 2063 of Nepal</strong>, we are fully tax and VAT compliant with our main executive headquarters located at <strong>Putalisadak-29, Kathmandu</strong>.
                </p>
                <p className="text-sm leading-relaxed text-slate-600">
                  Our multidisciplinary core team includes retired high-level Financial Comptroller General Office (FCGO) officials, chartered accountants, and digital architects. By blending years of legal-administrative experience with state-of-the-art tech development, we provide reliable consulting frameworks that satisfy both complex compliance mandates and modern automation desires.
                </p>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-1.5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#25a2ff] flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> Compliance Credentials
                </h4>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• CO REG Act 2063 (Company Act 2006)</li>
                  <li>• Full PAN / VAT Registered Entity</li>
                  <li>• Clean Corporate Governance Audits</li>
                </ul>
              </div>
              <div className="bg-white p-5 rounded-xl border border-slate-100 space-y-1.5 shadow-xs">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#25a2ff] flex items-center gap-1">
                  <Award className="w-3.5 h-3.5" /> Proven Capacities
                </h4>
                <ul className="text-xs text-slate-500 space-y-1">
                  <li>• 24+ High-Value Assignments Completed</li>
                  <li>• Multidisciplinary Advisory Networks</li>
                  <li>• Advanced Training of Trainers (TOT)</li>
                  <li>• Custom Cloud & Android Integration</li>
                </ul>
              </div>
            </div>

            {/* Photos of Boudhanath Stupa */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-2xl relative shadow-md group border border-slate-100">
                <img
                  src={boudhanathImg}
                  alt="Boudhanath Temple in Kathmandu, Nepal"
                  referrerPolicy="no-referrer"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white z-10">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#ff439b] font-bold uppercase block">
                      Cultural Core Connection
                    </span>
                    <span className="text-sm font-semibold font-sans">
                      Boudhanath Stupa — Kathmandu, Nepal
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-300 bg-black/40 px-2 py-0.5 rounded-full">
                    Creative Commons
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Why Choose Us Bullet Points */}
          <div className="lg:col-span-6 space-y-8 text-left bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold bg-sky-50 text-[#25a2ff] px-3 py-1 rounded-full uppercase tracking-wider">
                ✦ Competitive Edge
              </span>
              <h3 className="text-2xl font-bold font-sans tracking-tight text-slate-900">
                Why Select Arish Services?
              </h3>
              <p className="text-xs md:text-sm text-slate-500 leading-relaxed text-justify">
                We provide a standard-setting level of excellence to federal ministeries, provincial offices, local municipal councils, and international development agencies.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {WHY_CHOOSE_US_KEYS.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-[#25a2ff]/30 shadow-xs transition-all duration-300 group hover:translate-x-1"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25a2ff]/10 text-[#25a2ff] font-extrabold shrink-0 mt-0.5 group-hover:bg-[#25a2ff] group-hover:text-white transition-colors duration-200 shadow-xs">
                    <Check className="w-3.5 h-3.5 stroke-[3.5px]" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 font-sans group-hover:text-slate-900 transition-colors">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
