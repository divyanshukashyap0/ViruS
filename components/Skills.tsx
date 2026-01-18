import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Layers, Layout, ShieldCheck, Smartphone, Zap } from 'lucide-react';
import { Skill } from '../types';

const skills: Skill[] = [
  { name: 'Next.js / React', icon: <Globe size={24} /> },
  { name: 'TypeScript', icon: <Code2 size={24} /> },
  { name: 'WebGL / Three.js', icon: <Layers size={24} /> },
  { name: 'Node.js Systems', icon: <Cpu size={24} /> },
  { name: 'UI/UX Design', icon: <Layout size={24} /> },
  { name: 'Mobile Native', icon: <Smartphone size={24} /> },
  { name: 'Cyber Security', icon: <ShieldCheck size={24} /> },
  { name: 'Performance', icon: <Zap size={24} /> },
];

export const Skills: React.FC = () => {
  return (
    <Section className="bg-vir-bg/50">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-4xl text-vir-text mb-4">Core Capabilities</h2>
        <p className="text-vir-muted font-sans max-w-2xl mx-auto">
          Our toolkit is modern, robust, and chosen for scalability. We don't follow trends; we leverage standards.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-xl flex flex-col items-center justify-center gap-4 hover-trigger group cursor-none"
          >
            <div className="text-vir-muted group-hover:text-vir-accent transition-colors duration-300 transform group-hover:scale-110">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: index * 0.2
                }}
              >
                {skill.icon}
              </motion.div>
            </div>
            <span className="font-mono text-sm text-vir-text group-hover:tracking-wider transition-all duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};