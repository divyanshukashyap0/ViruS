import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';

const members = [
  { name: 'Divyanshu Kashyap', role: 'Partner' },
  { name: 'Harshit Tiwari', role: 'Partner' },
  { name: 'Hardik Chaurasia', role: 'Partner' },
  { name: 'Harshit Singh', role: 'Partner' }
];

export const Team: React.FC = () => {
  return (
    <Section className="border-t border-vir-border/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6">
        
        {/* Label */}
        <div className="md:col-span-3">
          <span className="font-sans text-xs uppercase tracking-widest text-vir-muted sticky top-24">
            (01) &mdash; The Collective
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
                {members.map((member, i) => (
                    <motion.div 
                        key={member.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="group"
                    >
                        <h3 className="font-serif text-2xl md:text-3xl text-vir-text group-hover:text-white transition-colors duration-500">
                            {member.name}
                        </h3>
                        <div className="mt-4 flex items-center gap-4">
                            <span className="h-px w-8 bg-vir-accent/30 group-hover:w-16 transition-all duration-500"></span>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-vir-muted group-hover:text-vir-accent transition-colors">
                                {member.role}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};