import React from 'react';
import { Section } from './Section';

export const Manifesto: React.FC = () => {
  return (
    <Section className="border-t border-vir-border/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6">
        
        {/* Label */}
        <div className="md:col-span-3">
          <span className="font-sans text-xs uppercase tracking-widest text-vir-muted sticky top-24">
            (02) &mdash; Philosophy
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-9 lg:col-span-8 lg:col-start-5">
          <p className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-vir-text mb-12">
            Most digital experiences are cluttered artifacts of indecision. We operate by subtraction. We remove the unnecessary until only the essential remains.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-sans text-sm md:text-base leading-relaxed text-vir-muted">
            <p>
              ViruS is not an agency. We are a technical collective focused on high-impact, low-latency digital infrastructure and interface design. We favor longevity over trends.
            </p>
            <p>
              We do not pitch. We do not decorate. We solve fundamental problems with clean code and deliberate typography. Our work is quiet, functional, and absolute.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};