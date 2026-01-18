import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <Section className="relative" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Visual Element */}
        <div className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden glass-card group">
            <div className="absolute inset-0 bg-gradient-to-br from-vir-accent/20 to-purple-900/20 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"></div>
            
            <div className="absolute bottom-8 left-8 right-8">
              <span className="font-mono text-xs text-vir-accent mb-2 block">Our DNA</span>
              <p className="font-serif text-2xl text-white italic">"Simplicity is the ultimate sophistication."</p>
            </div>
        </div>

        {/* Text Content */}
        <div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl text-vir-text">
              Beyond the code, <br />
              <span className="text-vir-muted">we design feelings.</span>
            </h2>
            
            <div className="space-y-6 font-sans text-vir-muted text-lg leading-relaxed">
              <p>
                In a digital landscape saturated with noise, we build sanctuaries. ViruS is not just a development shop; it is a philosophy of subtraction. We remove the clutter until only the impact remains.
              </p>
              <p>
                Our team is distributed, agile, and obsessive. We combine high-performance engineering with award-winning aesthetics to create web experiences that don't just load—they arrive.
              </p>
            </div>

            <div className="flex gap-12 pt-8 border-t border-vir-border">
              <div>
                <span className="block text-3xl font-serif text-vir-text">40+</span>
                <span className="text-xs font-mono text-vir-muted uppercase tracking-wider">Projects Shipped</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-vir-text">0.1s</span>
                <span className="text-xs font-mono text-vir-muted uppercase tracking-wider">Avg Latency</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-vir-text">100%</span>
                <span className="text-xs font-mono text-vir-muted uppercase tracking-wider">Client Retention</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </Section>
  );
};