import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Team } from './components/Team';
import { Infrastructure } from './components/Infrastructure';
import { SelectedWork } from './components/SelectedWork';
import { Contact } from './components/Contact';
import { Cursor } from './components/Cursor';
import { CommissionModal } from './components/CommissionModal';
import { LayoutWrapper } from './components/LayoutWrapper';

function App() {
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);
  
  useEffect(() => {
    // Console signature
    console.log(
      "%c ViruS Collective %c \nLuxury Digital Architecture.", 
      "color: #fff; background: #000; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 14px; font-weight: bold;", 
      "color: #858585; font-family: sans-serif; font-size: 12px;"
    );
  }, []);

  return (
    <main className={`relative w-full bg-vir-bg min-h-screen text-vir-text selection:bg-vir-accent selection:text-white ${isCommissionOpen ? 'overflow-hidden h-screen' : ''}`}>
      
      {/* Background Noise Texture */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03] bg-noise mix-blend-overlay"></div>

      {/* Interactive Cursor (Outside Wrapper to avoid tilt offset) */}
      <Cursor />

      {/* Commission Modal Overlay (Outside Wrapper) */}
      <CommissionModal 
        isOpen={isCommissionOpen} 
        onClose={() => setIsCommissionOpen(false)} 
      />

      {/* 4DX Tilt & Sound Wrapper */}
      <LayoutWrapper>
        <div className="relative z-10">
          <Hero onOpenCommission={() => setIsCommissionOpen(true)} />
          <Team />
          <Manifesto />
          <Infrastructure />
          <SelectedWork />
          <Contact />
        </div>
      </LayoutWrapper>
    </main>
  );
}

export default App;