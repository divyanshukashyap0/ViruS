import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';

interface SelectedProject {
  id: string;
  client: string;
  category: string;
  description: string;
  year: string;
}

const projects: SelectedProject[] = [
  {
    id: '01',
    client: 'OptiStyle India',
    category: 'E-Commerce',
    description: 'OptiStyle’s goal is to deliver accurate eye testing through professional care, modern equipment, and a patient-first approach.',
    year: '2025-2026'
  },
  {
    id: '02',
    client: 'Maison Étude',
    category: 'E-Commerce',
    description: 'A headless architecture for a heritage fashion house.',
    year: '2023'
  },
  {
    id: '03',
    client: 'Carbon/Neutral',
    category: 'Data Viz',
    description: 'Real-time emissions tracking dashboard for public sector.',
    year: '2024'
  },
  {
    id: '04',
    client: 'Oculus Archive',
    category: 'Research',
    description: 'Digital preservation system for rare brutalist architecture.',
    year: '2024'
  }
];

export const SelectedWork: React.FC = () => {
  return (
    <Section id="projects" className="border-t border-vir-border/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6">
        
        {/* Label */}
        <div className="md:col-span-3">
          <span className="font-sans text-xs uppercase tracking-widest text-vir-muted sticky top-24">
            (04) &mdash; Selected Output
          </span>
        </div>

        {/* List */}
        <div className="md:col-span-9">
          <div className="flex flex-col">
            {projects.map((project, i) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative border-b border-vir-border/10 py-12 transition-all duration-500 hover:py-16 cursor-default"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl text-vir-text group-hover:italic transition-all duration-300">
                    {project.client}
                  </h3>
                  <span className="font-sans text-xs uppercase tracking-widest text-vir-muted">
                    {project.category} &mdash; {project.year}
                  </span>
                </div>
                <p className="font-sans text-sm md:text-base text-vir-muted max-w-lg group-hover:text-vir-text transition-colors duration-300">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-right">
             <span className="font-sans text-xs text-vir-muted uppercase tracking-widest">
               Index limited to public releases
             </span>
          </div>
        </div>
      </div>
    </Section>
  );
};