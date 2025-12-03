"use client";
import { useEffect, useRef } from "react";

export default function FloatingDotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const wrapper = wrapperRef.current!;

    let dots: {
      x: number;
      y: number;
      pulse: number;
      speed: number;
      glow: number;
      radius: number;
    }[] = [];

    let glowingIndices: number[] = [];
    const MAX_GLOW = 30;

    const pickGlowingDots = () => {
      glowingIndices = [];
      while (glowingIndices.length < MAX_GLOW && dots.length > 0) {
        const id = Math.floor(Math.random() * dots.length);
        if (!glowingIndices.includes(id)) glowingIndices.push(id);
      }
    };

    const resizeCanvas = () => {
      canvas.width = wrapper.clientWidth;
      canvas.height = wrapper.clientHeight;
      buildGrid();
      pickGlowingDots();
    };

    const buildGrid = () => {
      dots = [];
      const w = canvas.width;
      const h = canvas.height;
      const gap = 65;

      const cols = Math.floor(w / gap);
      const rows = Math.floor(h / gap);
      const offsetX = (w - cols * gap) / 2;
      const offsetY = (h - rows * gap) / 2;

      for (let j = 0; j <= rows; j++) {
        for (let i = 0; i <= cols; i++) {
          dots.push({
            x: offsetX + i * gap,
            y: offsetY + j * gap,
            pulse: Math.random() * Math.PI * 2,
            speed: 0.01 + Math.random() * 0.01,
            glow: 0,
            radius: 1.4 + Math.random() * 1.8,
          });
        }
      }
    };

    const drawGridLines = () => {
      const w = canvas.width;
      const h = canvas.height;
      const gap = 65;

      const cols = Math.floor(w / gap);
      const rows = Math.floor(h / gap);
      const offsetX = (w - cols * gap) / 2;
      const offsetY = (h - rows * gap) / 2;

      ctx.strokeStyle = "rgba(76, 175, 255, 0.07)";
      ctx.lineWidth = 1;

      // vertical
      for (let i = 0; i <= cols; i++) {
        const x = offsetX + i * gap;
        ctx.beginPath();
        ctx.moveTo(x, offsetY);
        ctx.lineTo(x, offsetY + rows * gap);
        ctx.stroke();
      }

      // horizontal
      for (let j = 0; j <= rows; j++) {
        const y = offsetY + j * gap;
        ctx.beginPath();
        ctx.moveTo(offsetX, y);
        ctx.lineTo(offsetX + cols * gap, y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawGridLines();

      for (let index = 0; index < dots.length; index++) {
        const d = dots[index];
        const shouldGlow = glowingIndices.includes(index);

        if (shouldGlow) d.glow += 0.03;
        else d.glow -= 0.015;

        d.glow = Math.max(0, Math.min(1, d.glow));

        let pulse = d.glow > 0.25 ? (Math.sin(d.pulse) + 1) / 2 : 0;
        const effectiveGlow = d.glow * (0.6 + pulse * 0.4);

        const alpha = 0.04 + effectiveGlow * 0.75;

        ctx.fillStyle = `rgba(76, 175, 255, ${alpha})`;
        ctx.shadowColor = `rgba(76, 175, 255, ${alpha * 3})`;
        ctx.shadowBlur = 10 * effectiveGlow;

        const r = d.radius + effectiveGlow * d.radius * 1.6;

        ctx.beginPath();
        ctx.arc(d.x, d.y, r, 0, Math.PI * 2);
        ctx.fill();

        if (shouldGlow) d.pulse += d.speed;
      }

      if (Math.random() < 0.006) pickGlowingDots();
      requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();
    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(wrapper);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full opacity-[0.4]" />
    </div>
  );
}
