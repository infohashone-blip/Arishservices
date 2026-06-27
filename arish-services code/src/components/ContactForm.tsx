import { useState, FormEvent, ChangeEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus("submitting");
    
    // Simulate API submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm relative overflow-hidden">
      {/* Visual background gradient accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#25a2ff]/5 rounded-full blur-2xl pointer-events-none" />

      <h3 className="text-xl font-bold text-slate-900 font-sans mb-1">
        Send Us a Message
      </h3>
      <p className="text-xs text-slate-500 mb-6 leading-relaxed">
        Have questions regarding our consulting models, compliance setups, or IT frameworks? File a query directly to our desk.
      </p>

      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-12 flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="w-16 h-16 rounded-full bg-sky-50 flex items-center justify-center text-[#25a2ff]">
              <CheckCircle className="w-10 h-10" />
            </div>
            <div className="space-y-1.5">
              <h4 className="text-base font-bold text-slate-900">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
                Thank you for reaching out to Arish Services. Our Business Development Officer (Amrit Shrestha) will contact you shortly.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="text-xs font-semibold text-[#25a2ff] bg-sky-50 hover:bg-sky-100/70 px-4 py-2 rounded-xl transition-all"
            >
              Send Another Query
            </button>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            {/* Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full text-sm rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#25a2ff] focus:ring-2 focus:ring-[#25a2ff]/10 focus:outline-none transition-all bg-slate-50/50"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full text-sm rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#25a2ff] focus:ring-2 focus:ring-[#25a2ff]/10 focus:outline-none transition-all bg-slate-50/50"
              />
            </div>

            {/* Message Input */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                Message Body
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your inquiry or requirement here in detail..."
                className="w-full text-sm rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-[#25a2ff] focus:ring-2 focus:ring-[#25a2ff]/10 focus:outline-none transition-all bg-slate-50/50 resize-y"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#25a2ff] to-[#ff439b] hover:opacity-95 text-white font-semibold text-sm py-3.5 transition-all outline-none focus:ring-2 focus:ring-[#25a2ff]/20 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
