import { CLIENT_LOGOS } from "../data";

export default function ClientCarousel() {
  // Triplicate logos to ensure absolutely zero gaps on screens of any size
  const scrollingLogos = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  const additionalClients = [
    "Ministry of Education",
    "NRA-EU Program",
    "Patan Museum",
    "Sobogaard Beverage & Dairy",
    "Biz Guru Pvt. Ltd."
  ];

  return (
    <div className="space-y-12">
      {/* Logos Strip outer container */}
      <div className="relative w-full overflow-hidden bg-slate-50/70 border-y border-slate-100 py-8">
        
        {/* Soft fading gradient edges to simulate high contrast modern look */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling flex track */}
        <div className="w-full flex overflow-hidden">
          <div className="flex gap-16 md:gap-24 animate-scroll-infinite shrink-0 items-center justify-around h-16 md:h-20">
            {scrollingLogos.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex flex-col items-center justify-center shrink-0 w-44 md:w-48 px-4 py-2 border border-slate-100/50 rounded-xl bg-white shadow-xs hover:border-[#25a2ff]/10 hover:shadow-sm transition-all duration-300 group"
              >
                <img
                  src={client.logoUrl}
                  alt={client.name}
                  referrerPolicy="no-referrer"
                  className="max-h-11 max-w-[150px] object-contain object-center filter grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
                <span className="text-[10px] font-sans font-medium text-slate-400 text-center uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity mt-1.5 overflow-hidden text-ellipsis whitespace-nowrap w-full">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional clients styled as a structured grid of elegant minimal chip badges */}
      <div className="max-w-4xl mx-auto space-y-4 px-4 text-center">
        <p className="text-xs font-mono font-bold tracking-wider text-[#25a2ff] uppercase">
          ✦ Extensive Project Portfolio
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {additionalClients.map((client, index) => (
            <span
              key={index}
              className="text-xs font-sans font-medium text-slate-600 bg-white border border-slate-100 px-3.5 py-1.5 rounded-full shadow-xs hover:bg-sky-50/50 hover:border-[#25a2ff]/20 hover:text-[#25a2ff] transition-all duration-200"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
