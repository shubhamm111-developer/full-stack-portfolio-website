import { useEffect, useRef } from "react";

export default function SignalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let width, height;

    function resize() {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Each "line" is one horizontal signal trace at a fixed y-position,
    // with its own speed and amplitude so they don't all move in sync.
    const lines = Array.from({ length: 4 }, (_, i) => ({
      y: (height / 5) * (i + 1),
      offset: Math.random() * 1000,
      speed: 0.015 + i * 0.004,
      amplitude: 14 + i * 4,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      lines.forEach((line, idx) => {
        line.offset += line.speed;
        ctx.beginPath();
        ctx.strokeStyle = idx % 2 === 0 ? "rgba(255,180,84,0.18)" : "rgba(77,217,199,0.18)";
        ctx.lineWidth = 1.5;

        for (let x = 0; x <= width; x += 4) {
          // Combine two sine waves for a more organic "signal" shape
          const y =
            line.y +
            Math.sin(x * 0.02 + line.offset) * line.amplitude +
            Math.sin(x * 0.05 + line.offset * 1.5) * (line.amplitude / 3);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      animationId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="signal-bg" />;
}