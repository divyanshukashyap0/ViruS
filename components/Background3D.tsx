import React, { useEffect, useRef } from 'react';

export const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Star properties
    const stars: { x: number; y: number; z: number; o: number }[] = [];
    const STAR_COUNT = 800;
    const SPEED_BASE = 0.5;
    let speedMult = 0;

    // Mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Initialize stars
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * width,
        o: Math.random()
      });
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
        targetMouseX = (e.clientX - width / 2) * 0.1;
        targetMouseY = (e.clientY - height / 2) * 0.1;
    };

    const handleScroll = () => {
        // Warp speed effect on scroll
        speedMult = 15; 
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    let animationFrameId: number;

    const render = () => {
      // Clear with trail effect
      ctx.fillStyle = 'rgba(3, 3, 3, 0.4)'; // vir-bg with opacity for trails
      ctx.fillRect(0, 0, width, height);

      // Smooth mouse movement
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Smooth scroll speed decay
      speedMult += (0 - speedMult) * 0.05;
      const currentSpeed = SPEED_BASE + speedMult;

      stars.forEach(star => {
        // Move star towards screen
        star.z -= currentSpeed;

        // Reset if passed screen
        if (star.z <= 0) {
          star.z = width;
          star.x = (Math.random() - 0.5) * width * 2;
          star.y = (Math.random() - 0.5) * height * 2;
        }

        // Project 3D to 2D
        const k = 128.0 / star.z;
        const px = star.x * k + width / 2 + (mouseX * k * 2);
        const py = star.y * k + height / 2 + (mouseY * k * 2);

        // Size and Opacity based on depth
        // Fix: Ensure size is non-negative to prevent IndexSizeError (can happen on resize when width shrinks)
        const depthRatio = star.z / width;
        const size = Math.max(0, (1 - depthRatio) * 2.5);
        const opacity = Math.max(0, Math.min(1, 1 - depthRatio));

        if (px >= 0 && px <= width && py >= 0 && py <= height && size > 0) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};