"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: Particle[] = [];

    const colors = ["#386aff", "#4f7eff", "#a78bfa", "#6d40ff"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: colors[Math.floor(Math.random() * colors.length)],
    });

    const init = () => {
      particles.length = 0;
      const count = Math.floor((canvas.width * canvas.height) / 15000);
      for (let i = 0; i < count; i++) {
        particles.push(createParticle());
      }
    };

    const drawConnections = (p1: Particle, p2: Particle) => {
      const dist = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(56, 106, 255, ${0.15 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw aurora blobs
      const time = Date.now() * 0.0003;

      const drawAuroraBlob = (
        x: number,
        y: number,
        r: number,
        colorInner: string,
        colorOuter: string
      ) => {
        const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
        grad.addColorStop(0, colorInner);
        grad.addColorStop(1, colorOuter);
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      };

      drawAuroraBlob(
        canvas.width * 0.2 + Math.sin(time) * 60,
        canvas.height * 0.3 + Math.cos(time * 0.7) * 40,
        canvas.width * 0.35,
        "rgba(56, 106, 255, 0.07)",
        "transparent"
      );

      drawAuroraBlob(
        canvas.width * 0.8 + Math.cos(time * 0.8) * 50,
        canvas.height * 0.6 + Math.sin(time * 1.1) * 35,
        canvas.width * 0.3,
        "rgba(109, 64, 255, 0.06)",
        "transparent"
      );

      drawAuroraBlob(
        canvas.width * 0.5 + Math.sin(time * 0.5) * 40,
        canvas.height * 0.8 + Math.cos(time * 0.9) * 30,
        canvas.width * 0.25,
        "rgba(167, 139, 250, 0.05)",
        "transparent"
      );

      // Update and draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`).replace("rgb", "rgba");
        ctx.fill();

        // Draw connections to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          drawConnections(p, particles[j]);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    const handleResize = () => {
      resize();
      init();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="hero-canvas"
      className="absolute inset-0 w-full h-full"
    />
  );
}
