import React from 'react';
import { motion } from 'framer-motion';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <div className="relative w-10 h-10 flex items-center justify-center">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-vir-text relative z-10">
            {/* Left Arm - Ultra Smooth Stroke Draw */}
            <motion.path 
                d="M12 10 L20 28" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} 
            />
            
            {/* Right Arm - Aggressive Glitch Construction */}
            <motion.path 
                d="M28 10 L24 19" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="square"
                initial={{ pathLength: 0, opacity: 0, x: 5, y: -2 }}
                animate={{ 
                    pathLength: [0, 0.2, 0.2, 0.7, 0.7, 1], 
                    opacity: [0, 1, 0, 1, 0.5, 1], 
                    x: [5, -3, 4, -2, 2, 0],
                    y: [-2, 2, -1, 0, 1, 0]
                }}
                transition={{ 
                    duration: 0.9, 
                    delay: 0.3, 
                    times: [0, 0.2, 0.3, 0.6, 0.8, 1],
                    ease: "linear" 
                }}
            />
            
            {/* The Core Node - Continuous Pulse */}
            <motion.circle 
                cx="20" cy="34" r="1.5" 
                fill="currentColor" 
                className="text-vir-accent"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                    scale: [0, 1.5, 1, 1.3, 1], 
                    opacity: [0, 1, 0.6, 1, 0.8] 
                }}
                transition={{ 
                    duration: 4, 
                    times: [0, 0.1, 0.2, 0.6, 1],
                    repeat: Infinity,
                    repeatDelay: 0,
                    ease: "easeInOut" 
                }}
            />
            
            {/* Orbit Ring - Slow Rotation */}
            <motion.circle 
                cx="20" cy="22" r="16" 
                stroke="currentColor" 
                strokeWidth="0.5"
                className="opacity-10"
                strokeDasharray="2 6"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 0.15, rotate: 360 }}
                transition={{ 
                    opacity: { duration: 1, delay: 0.5 },
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" }
                }}
            />
        </svg>
        
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-vir-accent/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-50 group-hover:scale-100" />
      </div>
      
      <div className="flex flex-col">
        <span className="font-serif text-2xl leading-none tracking-tighter text-vir-text font-medium group-hover:text-white transition-colors duration-300">ViruS</span>
        <span className="font-mono text-[0.5rem] leading-none tracking-[0.3em] text-vir-muted uppercase mt-1 ml-0.5 group-hover:text-vir-accent transition-colors duration-300">Collective</span>
      </div>
    </div>
  );
};