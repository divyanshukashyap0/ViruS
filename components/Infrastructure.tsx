import React, { useEffect, useState } from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Cpu, Network, ShieldCheck, Zap, Activity, Server } from 'lucide-react';

const systems = [
  {
    id: 'sys-01',
    name: 'Distributed Compute',
    desc: 'Fault-tolerant microservice meshes.',
    tech: 'Rust / gRPC / K8s',
    icon: <Network size={18} />,
    statLabel: 'Active Nodes',
    statBase: 142,
    statUnit: ''
  },
  {
    id: 'sys-02',
    name: 'Real-time Pipeline',
    desc: 'Sub-millisecond data synchronization.',
    tech: 'WebSocket / Kafka',
    icon: <Zap size={18} />,
    statLabel: 'Latency',
    statBase: 12,
    statUnit: 'ms'
  },
  {
    id: 'sys-03',
    name: 'Neural Inference',
    desc: 'Edge-optimized AI model deployment.',
    tech: 'TensorFlow / WASM',
    icon: <Cpu size={18} />,
    statLabel: 'GPU Load',
    statBase: 88,
    statUnit: '%'
  },
  {
    id: 'sys-04',
    name: 'Zero-Trust Security',
    desc: 'Military-grade encryption standards.',
    tech: 'AES-256 / OAuth2',
    icon: <ShieldCheck size={18} />,
    statLabel: 'Protocol',
    statBase: 100,
    statUnit: '%'
  }
];

const SystemCard: React.FC<typeof systems[0] & { index: number }> = ({ name, desc, tech, icon, statLabel, statBase, statUnit, index }) => {
  const [metric, setMetric] = useState(statBase);

  useEffect(() => {
    const interval = setInterval(() => {
        // Subtle fluctuation simulation
        const variance = Math.floor(Math.random() * 5) - 2;
        setMetric(m => {
            const next = m + variance;
            if (statUnit === '%' && next > 100) return 100;
            if (next < 0) return 0;
            return next;
        });
    }, 2000 + (index * 500));
    return () => clearInterval(interval);
  }, [statBase, index, statUnit]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative border-t border-vir-border/20 py-8 hover:bg-white/[0.02] transition-colors duration-500"
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        
        {/* Header */}
        <div className="flex items-start gap-4">
            <div className="p-2 bg-vir-surface rounded-sm text-vir-muted group-hover:text-vir-accent transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h3 className="font-serif text-xl text-vir-text mb-1 group-hover:text-white transition-colors">{name}</h3>
                <p className="font-sans text-sm text-vir-muted max-w-xs">{desc}</p>
            </div>
        </div>

        {/* Tech Stack */}
        <div className="md:text-right">
            <div className="font-mono text-[10px] text-vir-border uppercase tracking-widest mb-2">Architecture</div>
            <div className="font-mono text-xs text-vir-accent/80">{tech}</div>
        </div>

        {/* Live Metric */}
        <div className="md:text-right min-w-[100px]">
            <div className="flex items-center justify-end gap-2 mb-1">
                <div className={`w-1.5 h-1.5 rounded-full ${metric > 90 || (statUnit === 'ms' && metric < 20) ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' : 'bg-vir-muted'}`} />
                <span className="font-mono text-[10px] text-vir-border uppercase tracking-widest">{statLabel}</span>
            </div>
            <div className="font-mono text-2xl text-vir-text tabular-nums">
                {metric}{statUnit}
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Infrastructure: React.FC = () => {
  return (
    <Section className="border-t border-vir-border/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 gap-x-6">
        
        {/* Label */}
        <div className="md:col-span-3">
          <span className="font-sans text-xs uppercase tracking-widest text-vir-muted sticky top-24">
            (03) &mdash; Infrastructure
          </span>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
          <div className="mb-16">
             <h2 className="font-serif text-3xl md:text-4xl text-vir-text mb-6">The Engine Room.</h2>
             <p className="font-sans text-vir-muted text-lg leading-relaxed max-w-2xl">
               Beautiful interfaces are meaningless without power. We engineer high-availability backend systems capable of handling millions of concurrent operations with zero downtime.
             </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {systems.map((sys, i) => (
                <SystemCard key={sys.id} {...sys} index={i} />
            ))}
          </div>
          
          {/* Terminal / Status Line */}
          <div className="mt-12 py-4 px-6 bg-vir-surface/50 border border-vir-border/20 rounded-sm font-mono text-[10px] text-vir-muted flex justify-between items-center">
             <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-vir-accent animate-pulse rounded-full"></span>
                SYSTEM_STATUS: NOMINAL
             </span>
             <span className="opacity-50">UPTIME: 99.999%</span>
          </div>

        </div>
      </div>
    </Section>
  );
};