import ContactForm from "../components/ContactForm";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Smartphone, 
  ExternalLink,
  Navigation,
  Compass
} from "lucide-react";

export default function Contact() {
  const coordinates = { lat: "27.7052° N", lng: "85.3223° E" };

  return (
    <div className="bg-slate-50/20 min-h-[80vh] py-16">
      <div className="container mx-auto px-6 max-w-7xl space-y-16">
        
        {/* Header section with clean styling */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#25a2ff] bg-sky-50 px-3.5 py-1.5 rounded-full uppercase">
            ✦ Diagnostic consultation
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold font-sans tracking-tight text-slate-900">
            Contact Our Executive Desk
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed text-justify md:text-center">
            Interested in starting a project? Request consultation regarding audit irregularities, internal manuals, local government systems, or private software.
          </p>
        </div>

        {/* Master Double-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Coordinates & Information cards */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-black text-[#25a2ff] uppercase flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-[#25a2ff]" />
                Office Addresses & Coordinates
              </span>
              <h3 className="text-2xl font-bold font-sans text-slate-900">
                Putalisadak Headquarters
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed text-justify">
                Our main consulting office is fully registered under Nepal's Company Registrar, Act 2063. Walk-ins and formal appointments are warmly welcome.
              </p>
            </div>

            {/* Address cards list */}
            <div className="space-y-4">
              
              {/* Card 1: Map Location */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:border-[#25a2ff]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#25a2ff]/10 text-[#25a2ff] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 animate-pulse" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Main Office Address
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    Arish Services Pvt. Ltd.
                  </p>
                  <p className="text-xs text-slate-500">
                    Putalisadak-29, Kathmandu Ward 29, Bagmati Province, Nepal
                  </p>
                </div>
              </div>

              {/* Card 2: Hotlines */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:border-[#25a2ff]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#25a2ff]/10 text-[#25a2ff] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Landline Communications
                  </h4>
                  <div className="text-sm font-bold text-slate-900 space-y-0.5">
                    <p className="flex items-center gap-1">
                      Phone: <a href="tel:+97701444282" className="hover:text-[#25a2ff] transition-colors">+977-01444282</a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Business Development Hotline */}
              <div className="flex gap-4 p-5 bg-[#ff439b]/5 rounded-2xl border-[#ff439b]/15 shadow-xs hover:border-[#ff439b]/25 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff439b]/10 text-[#ff439b] flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#ff439b]">
                    Business Development Lead
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    Amrit Shrestha
                  </p>
                  <p className="text-xs text-slate-600">
                    Mobile Direct: <a href="tel:+9779851187306" className="font-bold hover:text-[#ff439b] transition-colors text-rose-900">+977 9841187306</a>
                  </p>
                </div>
              </div>

              {/* Card 4: Official Email */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:border-[#25a2ff]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#25a2ff]/10 text-[#25a2ff] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Corporate Email
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    <a href="mailto:arishservicenepal@gmail.com" className="hover:text-[#25a2ff] transition-colors">
                      arishservicenepal@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Card 5: Hours */}
              <div className="flex gap-4 p-5 bg-white rounded-2xl border border-slate-100 shadow-xs hover:border-[#25a2ff]/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#25a2ff]/10 text-[#25a2ff] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="space-y-1 flex-grow">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Office Working Hours
                  </h4>
                  <p className="text-sm font-bold text-slate-900">
                    Sunday – Friday, 10:00 AM – 5:00 PM NST
                  </p>
                  <p className="text-[10px] text-slate-400">
                    * Closed on Saturdays and National Public Holidays
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Send Message form */}
          <div className="lg:col-span-7 bg-white p-2.5 rounded-3xl border border-slate-100 shadow-sm">
            <ContactForm />
          </div>

        </div>

        {/* Vector topographically styled Google Map Pin visual locator */}
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-xl border border-slate-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#25a2ff]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] font-mono tracking-widest text-[#25a2ff] font-bold uppercase bg-[#25a2ff]/10 px-3 py-1 rounded-full border border-[#25a2ff]/20">
                ✦ Topographic Pins
              </span>
              <h3 className="text-xl md:text-2xl font-extrabold font-sans">
                Location Coordinates
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed text-justify">
                Find us directly on the Putalisadak commercial avenue, next to major banking facilities and administrative departments.
              </p>

              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1">
                <span className="block text-[#25a2ff] font-bold uppercase">GPS Markers:</span>
                <p>Latitude: {coordinates.lat}</p>
                <p>Longitude: {coordinates.lng}</p>
                <p className="text-[9px] text-slate-500 mt-2">Zone: Bagmati • Ward: 29</p>
              </div>

              <a
                href={`https://maps.google.com/?q=Putalisadak,Kathmandu,Nepal`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#25a2ff] font-bold hover:text-[#25a2ff]/80 transition-colors"
              >
                External Google Maps Directions
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="md:col-span-8 bg-slate-950/90 rounded-2xl p-6 border border-slate-800/80 min-h-[250px] relative overflow-hidden flex flex-col justify-between">
              
              {/* Decorative map grids */}
              <div className="absolute inset-0 opacity-15 pointer-events-none" style={{
                backgroundImage: `radial-gradient(circle, #25a2ff 1.2px, transparent 1.2px)`,
                backgroundSize: "20px 20px"
              }} />

              {/* Grid Roads visualization */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-[#25a2ff] transform -rotate-12" />
                <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-[#25a2ff]" />
                <div className="absolute top-0 bottom-0 left-2/3 w-2 bg-[#25a2ff]" />
              </div>

              {/* Active Marker Pin */}
              <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-[#25a2ff]/25 animate-ping absolute -inset-0" />
                  <div className="w-10 h-10 rounded-xl bg-[#25a2ff]/40 border border-[#25a2ff] flex items-center justify-center relative shadow-lg text-slate-950">
                    <MapPin className="w-5 h-5 text-sky-950 fill-current" />
                  </div>
                </div>
                <span className="mt-1 bg-slate-900 border border-[#25a2ff]/50 px-2 py-0.5 rounded-md text-[9px] font-mono font-bold tracking-tight text-white uppercase text-center shadow-md">
                  Arish Office
                </span>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500">
                  PUTALISADAK METROPOLITAN SEGMENT
                </span>
                <span className="text-xs text-[#25a2ff] flex items-center gap-1 font-bold">
                  <Navigation className="w-3.5 h-3.5" /> Interactive Guide Map
                </span>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800/80 pt-4 relative z-10">
                <div className="text-left">
                  <span className="block text-[10px] font-mono text-slate-500">NEIGHBORHOOD MARK:</span>
                  <p className="text-xs font-bold text-slate-200">
                    Bagmati Plaza / Putalisadak Chowk, Kathmandu
                  </p>
                </div>
                
                <span className="shrink-0 bg-[#25a2ff]/10 text-[#25a2ff] text-[10px] font-bold px-3 py-1.5 rounded-lg border border-[#25a2ff]/25">
                  ✓ Easily Accessible by Public Transport
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
