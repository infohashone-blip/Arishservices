import { useState } from "react";
import { TEAM_MEMBERS } from "../data";
import { Linkedin, Shield, Users, UserCheck } from "lucide-react";

export default function TeamSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "board" | "national">("all");

  const categories = [
    { id: "all", label: "All Members", icon: Users },
    { id: "board", label: "Board Members", icon: Shield },
    { id: "national", label: "National Experts", icon: UserCheck },
  ];

  const filteredTeam = TEAM_MEMBERS.filter(
    (member) => activeCategory === "all" || member.category === activeCategory
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="space-y-10">
      {/* Category Tabs Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {categories.map((cat) => {
          const IconComp = cat.icon;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id as any)}
              className={`flex items-center gap-2 text-xs md:text-sm font-semibold font-sans px-4 py-2.5 rounded-full border transition-all duration-200 ${
                isActive
                  ? "bg-[#25a2ff] text-white border-[#25a2ff] shadow-md transform -translate-y-0.5"
                  : "bg-white text-slate-600 border-slate-100 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <IconComp className="w-4 h-4" />
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredTeam.map((member, index) => {
          const initials = getInitials(member.name);
          return (
            <div
              key={`${member.name}-${index}`}
              className="bg-white rounded-2xl border border-slate-100 p-6 flex flex-col items-center text-center shadow-xs hover:shadow-lg hover:border-[#25a2ff]/20 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Profile Image container */}
              <div className="relative w-28 h-28 rounded-full mb-5 overflow-hidden ring-4 ring-slate-50 group-hover:ring-sky-100 transition-all duration-300 bg-slate-100 shrink-0">
                {member.photoUrl ? (
                  <img
                    src={member.photoUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if the remote image acts up
                      (e.target as HTMLElement).style.display = "none";
                      const sibling = (e.target as HTMLElement).nextElementSibling;
                      if (sibling) {
                        sibling.classList.remove("hidden");
                      }
                    }}
                  />
                ) : null}

                {/* Vector Avatar Fallback */}
                <div
                  className={`flex items-center justify-center w-full h-full text-xl font-bold font-mono tracking-widest ${
                    member.photoUrl ? "hidden absolute inset-0" : ""
                  } ${
                    member.category === "board"
                      ? "bg-slate-900 text-[#ff439b]"
                      : "bg-pink-50 text-[#ff439b]"
                  }`}
                >
                  {initials}
                </div>
              </div>

              {/* Identity & Role info */}
              <div className="space-y-1 flex-grow">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#25a2ff]">
                  {member.category === "board"
                    ? "Board of Directors"
                    : "National Consultant"}
                </span>
                <h4 className="text-base font-bold text-slate-900 font-sans group-hover:text-[#25a2ff] transition-colors">
                  {member.name}
                </h4>
                <p className="text-sm text-slate-500 font-medium">
                  {member.role}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-4 border-t border-slate-50 w-full flex items-center justify-center gap-2.5 text-slate-400 group-hover:text-slate-600 transition-colors">
                {member.linkedInUrl ? (
                  <a
                    href={member.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-slate-50 hover:bg-sky-50 hover:text-[#25a2ff] flex items-center justify-center transition-all duration-200"
                    title="View LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 fill-current stroke-none" />
                  </a>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-slate-50/50 flex items-center justify-center text-slate-300 text-xs font-semibold">
                    -
                  </div>
                )}
                
                <span className="text-[11px] font-mono text-slate-400">
                  Kathmandu
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
