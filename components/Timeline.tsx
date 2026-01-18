import React from 'react';
import { Section } from './Section';
import { Experience } from '../types';
import { motion } from 'framer-motion';

const history: Experience[] = [
  {
    id: '1',
    role: 'Lead Engineering Team',
    company: 'ViruS Collective',
    period: '2024 - Present',
    description: 'Founded a decentralized collective focusing on high-end web experiences for Series A+ startups.'
  },
  {
    id: '2',
    role: 'Senior Product Designer',
    company: 'TechFlow Inc.',
    period: '2021 - 2023',
    description: 'Led design systems and UI implementation for a SaaS platform serving 50k+ daily users.'
  },
  {
    id: '3',
    role: 'Full Stack Developer',
    company: 'Creative Studio X',
    period: '2019 - 2021',
    description: 'Built award-winning marketing sites using WebGL and GSAP for Fortune 500 clients.'
  }
];

export const Timeline: React.FC = () => {
  return (
    <Section className="max-w-4xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-vir-text">Trajectory</h2>
      </div>

      <div className="relative border-l border-vir-border ml-4 md:ml-0 md:pl-0 space-y-12">
        {history.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-8 md:pl-12 group hover-trigger"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 bg-vir-bg border border-vir-muted rounded-full group-hover:border-vir-accent group-hover:bg-vir-accent transition-colors duration-300 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
              <h3 className="font-serif text-xl md:text-2xl text-vir-text group-hover:text-vir-accent transition-colors">
                {item.role}
              </h3>
              <span className="font-mono text-xs text-vir-muted bg-vir-surface px-2 py-1 rounded border border-vir-border">
                {item.period}
              </span>
            </div>
            
            <h4 className="font-sans text-sm text-vir-text/80 mb-3">{item.company}</h4>
            <p className="font-sans text-sm text-vir-muted leading-relaxed max-w-xl">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};