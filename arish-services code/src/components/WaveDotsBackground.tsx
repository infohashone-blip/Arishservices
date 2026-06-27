import { useEffect, useRef } from "react";

export default function WaveDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Setup ResizeObserver for the parent container
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = canvas.width = entryWidth;
        height = canvas.height = entryHeight;
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Animation variables
    let t = 0;

    // Define 4 beautiful flowing ribbons (strands) of glowing dots
    const numStrands = 4;
    const dotsPerStrand = 60;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      t += 0.007; // Slow, ultra-smooth animation rate

      // 1. Draw a very soft, light gradient background (white to soft sky-blue / soft-pink)
      const grad = ctx.createLinearGradient(0, 0, width, height);
      grad.addColorStop(0, "#fbfcfe"); // Pure light off-white
      grad.addColorStop(0.5, "#f3f8fe"); // Ultra light azure
      grad.addColorStop(1, "#fffbfd"); // Soft pinkish off-white
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // 2. Draw extremely subtle ambient radial glows of cyan and magenta to give that glowing backdrop
      // Cyan Glow (top-left)
      const glowCyan = ctx.createRadialGradient(width * 0.25, height * 0.4, 0, width * 0.25, height * 0.4, Math.max(width * 0.5, 400));
      glowCyan.addColorStop(0, "rgba(37, 162, 255, 0.06)");
      glowCyan.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glowCyan;
      ctx.fillRect(0, 0, width, height);

      // Pink Glow (bottom-right)
      const glowPink = ctx.createRadialGradient(width * 0.75, height * 0.6, 0, width * 0.75, height * 0.6, Math.max(width * 0.5, 400));
      glowPink.addColorStop(0, "rgba(255, 67, 155, 0.04)");
      glowPink.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = glowPink;
      ctx.fillRect(0, 0, width, height);

      // Save context state for drawing glowing particles
      ctx.save();

      // Render ribbon strands
      for (let s = 0; s < numStrands; s++) {
        // Different phase and offset for each strand to create complex, intertwined motion
        const strandPhase = s * (Math.PI / 2.5);
        const yCenter = height * (0.35 + s * 0.09) + Math.cos(t * 1.5 + s) * 20;
        
        // Pick primary color based on strand to match Arish Services (mostly cyan, with subtle purple-pink)
        let primaryColor = "37, 162, 255"; // Cyan-blue
        if (s % 3 === 1) {
          primaryColor = "79, 70, 229"; // Royal/indigo
        } else if (s % 3 === 2) {
          primaryColor = "255, 67, 155"; // Pink
        }

        // Draw the thin connected guide line
        ctx.beginPath();
        for (let i = 0; i < dotsPerStrand; i++) {
          const ratio = i / (dotsPerStrand - 1);
          const x = ratio * width;
          
          // Creative wave formulation with compound sine waves for elegant flow
          const sine1 = Math.sin(ratio * Math.PI * 2.2 + t * 4 + strandPhase);
          const sine2 = Math.cos(ratio * Math.PI * 4.5 - t * 2.5 + s);
          const waveY = (sine1 * 35) + (sine2 * 12);
          const y = yCenter + waveY;

          if (i === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = `rgba(${primaryColor}, 0.05)`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw the glowing dots along the strand
        for (let i = 0; i < dotsPerStrand; i++) {
          const ratio = i / (dotsPerStrand - 1);
          const x = ratio * width;
          
          const sine1 = Math.sin(ratio * Math.PI * 2.2 + t * 4 + strandPhase);
          const sine2 = Math.cos(ratio * Math.PI * 4.5 - t * 2.5 + s);
          const waveY = (sine1 * 35) + (sine2 * 12);
          const y = yCenter + waveY;

          // Pulse dot size over time and position
          const sizeModifier = Math.sin(t * 5 + ratio * Math.PI * 10 + s) * 0.6 + 1;
          const baseRadius = (i % 5 === 0 ? 2.5 : 1.2);
          const radius = Math.max(0.6, baseRadius * sizeModifier);

          // Calculate varying point opacity to give glittering, elegant effect
          const opacityModifier = Math.sin(t * 3 + ratio * Math.PI * 6 + s * 2.4);
          const finalOpacity = (0.05 + (opacityModifier * 0.5 + 0.5) * 0.28);

          // Draw the glowing background aura for this dot
          ctx.beginPath();
          ctx.arc(x, y, radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${primaryColor}, ${finalOpacity * 0.45})`;
          ctx.fill();

          // Draw the solid inner dot
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${primaryColor}, ${finalOpacity * 1.5})`;
          ctx.fill();

          // Add beautiful tiny sparkling highlight stars on prime dots
          if (i % 8 === 0) {
            const sparklesGlow = Math.sin(t * 8 + i) * 0.5 + 0.5;
            if (sparklesGlow > 0.65) {
              ctx.beginPath();
              ctx.arc(x, y, radius * 1.5, 0, Math.PI * 2);
              ctx.fillStyle = `rgba(255, 255, 255, ${sparklesGlow * 0.8})`;
              ctx.fill();
            }
          }
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden -z-10 bg-slate-50 pointer-events-none">
      <canvas ref={canvasRef} className="block w-full h-full opacity-90" />
      
      {/* S-curve aesthetic divisor at the bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto min-h-[40px] block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#ffffff"
          />
          <path
            d="M0,64L120,58.7C240,53,480,43,720,48C960,53,1200,75,1320,85.3L1440,96L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#ffffff"
            opacity="0.35"
          />
        </svg>
      </div>
    </div>
  );
}
