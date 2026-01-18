import React, { useEffect, useRef } from 'react';

interface LayoutWrapperProps {
  children: React.ReactNode;
}

// 4DX Sound Engine (Synthesized, no assets)
class SoundEngine {
  private ctx: AudioContext | null = null;
  private gainNode: GainNode | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.gainNode = this.ctx.createGain();
        this.gainNode.connect(this.ctx.destination);
      }
    }
  }

  // High-pitched technical "blip" on hover
  playHover() {
    if (!this.ctx || !this.gainNode) return;
    
    // Resume context if suspended (browser policy)
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.02, this.ctx.currentTime); // Very quiet
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.gainNode);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  // Deeper "thud" or "click" on interaction
  playClick() {
    if (!this.ctx || !this.gainNode) return;
    if (this.ctx.state === 'suspended') this.ctx.resume();

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.ctx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(this.gainNode);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }
}

export const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  const soundEngine = useRef<SoundEngine | null>(null);

  useEffect(() => {
    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('.hover-trigger')) {
        // no-op
      }
    };

    document.addEventListener('mouseover', handleInteraction);
    document.addEventListener('mousedown', handleInteraction);

    return () => {
      document.removeEventListener('mouseover', handleInteraction);
      document.removeEventListener('mousedown', handleInteraction);
    };
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <div className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
