import React from 'react';
import { Section } from './Section';
import { Project } from '../types';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects: Project[] = [
  {
    id: '01',
    title: 'OptiStyle India',
    category: 'E-Commerce',
    description: 'OptiStyle’s goal is to deliver accurate eye testing through professional care, modern equipment, and a patient-first approach.',
    tech: ['React', 'WebGL', 'Socket.io'],
    year: '2023'
  },
  {
    id: '02',
    title: 'Maison Étude',
    category: 'E-Commerce',
    description: 'Headless commerce experience for a luxury fashion house. Immersive 3D product previews and seamless checkout.',
    tech: ['Next.js', 'Shopify', 'Three.js'],
    year: '2023'
  },
  {
    id: '03',
    title: 'Carbon/Neutral',
    category: 'Data Visualization',
    description: 'Public sector dashboard tracking real-time emissions data across 40 cities. Beautiful, accessible data storytelling.',
    tech: ['D3.js', 'Vue', 'Mapbox'],
    year: '2024'
  },
  {
    id: '04',
    title: 'Oculus Archive',
    category: 'Digital Archive',
    description: 'Preservation system for brutalist architecture. High-fidelity image zoom and deep-search capabilities.',
    tech: ['React', 'ElasticSearch', 'AWS'],
    year: '2024'
  }
];

export const Projects: React.FC = () => {
  return (
    <Section id="projects">
      <div className="flex justify-between items-end mb-16">
        <div>
          <span className="font-mono text-xs text-vir-accent uppercase tracking-widest mb-2 block">Selected Works</span>
          <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Digital Masterpieces</h2>
        </div>
        <button className="hidden md:flex items-center gap-2 text-vir-muted hover:text-vir-text transition-colors hover-trigger">
          <span className="font-mono text-xs uppercase tracking-widest">View Full Archive</span>
          <ArrowUpRight size={16} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative glass-card rounded-2xl p-8 md:p-12 hover:bg-white/[0.08] transition-all duration-500 hover-trigger"
          >
            <div className="flex justify-between items-start mb-8">
              <span className="font-mono text-xs text-vir-muted border border-vir-border px-2 py-1 rounded-full">
                {project.year}
              </span>
              <ArrowUpRight className="text-vir-muted group-hover:text-vir-accent group-hover:rotate-45 transition-all duration-300" />
            </div>

            <h3 className="font-serif text-3xl text-vir-text mb-4 group-hover:translate-x-2 transition-transform duration-300">
              {project.title}
            </h3>
            
            <p className="font-sans text-vir-muted mb-8 line-clamp-3 group-hover:text-vir-text/80 transition-colors">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map(t => (
                <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-vir-muted bg-white/5 px-2 py-1 rounded-sm">
                  {t}
                </span>
              ))}
            </div>
            
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-vir-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};