import React, { useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const TiltWrapper: React.FC<TiltWrapperProps> = ({ children, className = "", intensity = 15 }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring physics for weight
  const rotateX = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      
      // Calculate distance from center normalized -1 to 1
      const normalizedX = (e.clientX - centerX) / centerX;
      const normalizedY = (e.clientY - centerY) / centerY;

      x.set(normalizedX * intensity); 
      y.set(normalizedY * -intensity); // Inverted Y axis for natural tilt
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [intensity, x, y]);

  return (
    <motion.div 
      className={className}
      style={{ 
        rotateX, 
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1200
      }}
    >
      {children}
    </motion.div>
  );
};