import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Logo } from './Logo';
import { HeroProps } from '../types';
import { TiltWrapper } from './TiltWrapper';

export const Hero: React.FC<HeroProps> = ({ onOpenCommission }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for each word - subtle differences to create depth
  const yArchitecting = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const yThe = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yFuture = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Slower stagger for dramatic effect
        delayChildren: 0.8    // Distinct delay before the text sequence begins
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 60, filter: 'blur(12px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 1.5,
        ease: [0.2, 0.65, 0.3, 0.9]
      }
    }
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-vir-bg">
      
      {/* Background Glows - Amplified for 'filled' feeling */}
      <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-vir-accent/[0.07] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-vir-glow/[0.06] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      {/* Navigation Hint */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute top-8 md:top-12 left-6 md:left-12 lg:left-24 right-6 md:right-12 lg:right-24 flex justify-between items-center z-20"
      >
        <Logo className="hover-trigger cursor-pointer scale-110 origin-left" />
        
        <button 
          onClick={onOpenCommission}
          className="hidden md:block px-6 py-2 border border-vir-border rounded-full text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 hover-trigger backdrop-blur-sm bg-vir-bg/10"
        >
          Available for Hire
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[1200px] pointer-events-none">
        <div className="pointer-events-auto">
          <TiltWrapper intensity={15}>
            <motion.h1 
              className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] text-vir-text tracking-tighter mix-blend-overlay"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Removed overflow-hidden to allow parallax movement without clipping */}
              <div className="block">
                  <motion.span 
                    variants={wordVariants} 
                    style={{ y: yArchitecting }}
                    className="inline-block origin-bottom-left text-6xl md:text-8xl lg:text-[8rem]"
                  >
                    Architecting
                  </motion.span>
              </div>
              <div className="block">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-vir-text to-vir-muted pb-2 md:pb-4 block">
                    <motion.span 
                      variants={wordVariants} 
                      style={{ y: yThe }}
                      className="inline-block"
                    >
                      the
                    </motion.span>
                    {' '}
                    <motion.span 
                      variants={wordVariants} 
                      style={{ y: yFuture }}
                      className="inline-block"
                    >
                      Future.
                    </motion.span>
                  </span>
              </div>
            </motion.h1>
          </TiltWrapper>

          <TiltWrapper intensity={8}>
            <motion.p 
              className="mt-10 max-w-2xl font-sans text-lg md:text-2xl text-vir-muted leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2.2 }} // Increased delay to follow the title
            >
              A multidisciplinary collective of builders and thinkers crafting digital sanctuaries.
            </motion.p>
          </TiltWrapper>
            
            <motion.div 
            className="mt-16 flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }} // Increased delay to follow the description
            >
            <a href="#projects" className="group relative px-10 py-5 bg-vir-text text-black font-sans font-medium text-sm md:text-base rounded-sm overflow-hidden hover-trigger tracking-wide">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                <div className="absolute inset-0 bg-vir-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
            <button 
                onClick={onOpenCommission}
                className="group px-10 py-5 border border-vir-border text-vir-text font-sans font-medium text-sm md:text-base rounded-sm hover:bg-white/5 transition-colors hover-trigger backdrop-blur-md tracking-wide"
            >
                Hire Us
            </button>
            </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-vir-muted flex flex-col items-center gap-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 1 }} // Increased delay
      >
        <motion.span 
          className="text-[10px] font-mono uppercase tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          Scroll to Explore
        </motion.span>
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
};
