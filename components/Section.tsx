import React from 'react';
import { SectionProps } from '../types';
import { motion } from 'framer-motion';

export const Section: React.FC<SectionProps> = ({ children, className = "", id, noPadding = false }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} // Custom easing for premium feel
      className={`relative w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24 ${noPadding ? '' : 'py-24 md:py-32'} ${className}`}
    >
      {children}
    </motion.section>
  );
};