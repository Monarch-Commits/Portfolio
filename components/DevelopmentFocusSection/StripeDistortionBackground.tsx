'use client';

import { useEffect, useRef } from 'react';

const COLS = 13;
const ROWS = 13;

const CUBE = 18;
const CUBE_H = 80;
const GAP = 10;

const EASE = 0.08;

export default function AppleIsometricGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const pointer = useRef({ x: 0, y: 0, active: false, isAuto: true });
  const lifts = useRef<number[]>(new Array(COLS * ROWS).fill(0));
  const time = useRef(0);
  const autoHoverTime = useRef(0);
  const autoResumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const config = useRef({ hoverLift: 280, hoverRadius: 160 });
  const bounds = useRef({ cx: 0, cy: 0, scale: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    const step = CUBE + GAP;

    const iso = (
      x: number,
      y: number,
      z: number,
      cx: number,
      cy: number,
      scale: number,
    ) => ({
      x: cx + (x - y) * 0.86 * scale,
      y: cy + (x + y) * 0.5 * scale - z * scale,
    });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = container.getBoundingClientRect();

      if (rect.width === 0 || rect.height === 0) return;

      const isMobile = rect.width < 640;

      config.current.hoverLift = isMobile ? 160 : 280;
      config.current.hoverRadius = isMobile ? 90 : 160;

      if (!pointer.current.active) {
        pointer.current.isAuto = true;
      }

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const totalGridX = COLS * step;
      const totalGridY = ROWS * step;

      const projectedWidth = (totalGridX + totalGridY) * 0.86;
      const projectedHeight =
        (totalGridX + totalGridY) * 0.5 + CUBE_H + config.current.hoverLift;

      const padding = isMobile ? 20 : 40;
      const scaleX = (rect.width - padding) / projectedWidth;
      const scaleY = (rect.height - padding) / projectedHeight;
      const finalScale = Math.min(scaleX, scaleY, 1);

      bounds.current.scale = finalScale;
      bounds.current.cx = rect.width / 2;
      bounds.current.cy = rect.height / 2 + projectedHeight * finalScale * 0.16;
    };

    const ro = new ResizeObserver(() => resize());
    ro.observe(container);
    resize();

    // --- LISTENERS ---

    const handlePointerMove = (e: PointerEvent) => {
      pointer.current.isAuto = false;
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = e.clientX - rect.left;
      pointer.current.y = e.clientY - rect.top;
      pointer.current.active = true;
    };

    const handlePointerLeave = () => {
      pointer.current.active = false;
      pointer.current.isAuto = true;
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (autoResumeTimer.current) clearTimeout(autoResumeTimer.current);
      if (e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = e.touches[0].clientX - rect.left;
      pointer.current.y = e.touches[0].clientY - rect.top;
      pointer.current.active = true;
      pointer.current.isAuto = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const rect = canvas.getBoundingClientRect();
      pointer.current.x = e.touches[0].clientX - rect.left;
      pointer.current.y = e.touches[0].clientY - rect.top;
      pointer.current.active = true;
      pointer.current.isAuto = false;
    };

    const handleTouchEnd = () => {
      pointer.current.active = false;
      autoResumeTimer.current = setTimeout(() => {
        pointer.current.isAuto = true;
      }, 1500);
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    canvas.addEventListener('touchstart', handleTouchStart, { passive: true });
    canvas.addEventListener('touchmove', handleTouchMove, { passive: true });
    canvas.addEventListener('touchend', handleTouchEnd, { passive: true });

    // --- DRAW HELPERS ---

    const poly = (
      ctx: CanvasRenderingContext2D,
      pts: { x: number; y: number }[],
      fill: boolean,
      stroke: boolean,
    ) => {
      ctx.beginPath();
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
      ctx.closePath();
      if (fill) ctx.fill();
      if (stroke) ctx.stroke();
    };

    const drawCube = (
      col: number,
      row: number,
      lift: number,
      highlight: number,
      cx: number,
      cy: number,
      scale: number,
    ) => {
      const x = (col - COLS / 2) * step;
      const y = (row - ROWS / 2) * step;

      const s = CUBE;
      const z0 = lift;
      const z1 = lift + CUBE_H;

      const base = '#0a0a0c';
      const top = '#111113';

      const stroke = 'rgba(255,255,255,0.06)';
      const glow = `rgba(255,255,255,${0.08 + highlight})`;

      const b1 = iso(x + s, y, z0, cx, cy, scale);
      const b2 = iso(x + s, y + s, z0, cx, cy, scale);
      const b3 = iso(x, y + s, z0, cx, cy, scale);

      const t0 = iso(x, y, z1, cx, cy, scale);
      const t1 = iso(x + s, y, z1, cx, cy, scale);
      const t2 = iso(x + s, y + s, z1, cx, cy, scale);
      const t3 = iso(x, y + s, z1, cx, cy, scale);

      ctx.lineWidth = 0.8;
      ctx.strokeStyle = stroke;

      ctx.fillStyle = base;
      poly(ctx, [b1, b2, t2, t1], true, true);
      poly(ctx, [b3, b2, t2, t3], true, true);

      ctx.fillStyle = top;
      poly(ctx, [t0, t1, t2, t3], true, true);

      if (highlight > 0.05) {
        ctx.shadowBlur = 12 * highlight;
        ctx.shadowColor = 'rgba(255,255,255,0.1)';
      }
      ctx.strokeStyle = glow;
      poly(ctx, [t0, t1, t2, t3], false, true);
      ctx.shadowBlur = 0;
    };

    // --- ANIMATION LOOP ---

    const draw = () => {
      const { cx, cy, scale } = bounds.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time.current += 0.006;

      if (pointer.current.isAuto) {
        autoHoverTime.current += 0.012;
        const radiusX = (canvas.width / window.devicePixelRatio) * 0.28;
        const radiusY = (canvas.height / window.devicePixelRatio) * 0.22;

        pointer.current.x = cx + Math.cos(autoHoverTime.current) * radiusX;
        pointer.current.y =
          cy - CUBE_H * scale + Math.sin(autoHoverTime.current * 1.3) * radiusY;
      }

      const { x: px, y: py, active, isAuto } = pointer.current;
      const isHovering = active || isAuto;

      // Physics loop
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const i = r * COLS + c;
          let target = 0;

          if (isHovering) {
            const x = (c - COLS / 2) * step;
            const y = (r - ROWS / 2) * step;
            const center = iso(
              x + CUBE / 2,
              y + CUBE / 2,
              CUBE_H,
              cx,
              cy,
              scale,
            );

            const dist = Math.hypot(px - center.x, py - center.y);
            const influence = Math.max(
              0,
              1 - dist / (config.current.hoverRadius * scale),
            );

            target = influence * influence * config.current.hoverLift;
          }

          lifts.current[i] += (target - lifts.current[i]) * EASE;
        }
      }

      // Render loop (painter's order)
      for (let sum = 0; sum < COLS + ROWS; sum++) {
        for (let r = 0; r < ROWS; r++) {
          const c = sum - r;
          if (c < 0 || c >= COLS) continue;

          const i = r * COLS + c;
          const breathe = Math.sin(time.current + (r + c) * 0.25) * 1.5;
          const highlight = (lifts.current[i] / config.current.hoverLift) * 0.4;

          drawCube(c, r, lifts.current[i] + breathe, highlight, cx, cy, scale);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      if (autoResumeTimer.current) clearTimeout(autoResumeTimer.current);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} className="block" />
    </div>
  );
}
