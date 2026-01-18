import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Circle, Square } from 'lucide-react';
import { CommissionModalProps } from '../types';

type Step = 'scope' | 'budget' | 'details' | 'identity' | 'success';

const steps: Step[] = ['scope', 'budget', 'details', 'identity', 'success'];

export const CommissionModal: React.FC<CommissionModalProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [direction, setDirection] = useState<number>(0);
  const [formData, setFormData] = useState({
    scope: [] as string[],
    budget: '',
    details: '',
    name: '',
    email: '',
    company: ''
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setDirection(1);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection(-1);
      setCurrentStep(prev => prev - 1);
    }
  };

  const toggleScope = (value: string) => {
    setFormData(prev => ({
      ...prev,
      scope: prev.scope.includes(value) 
        ? prev.scope.filter(item => item !== value)
        : [...prev.scope, value]
    }));
  };

  const reset = () => {
    setCurrentStep(0);
    setFormData({
      scope: [],
      budget: '',
      details: '',
      name: '',
      email: '',
      company: ''
    });
    onClose();
  };

  const stepVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-vir-bg/95 backdrop-blur-xl"
        >
          {/* Close Button */}
          <button 
            onClick={reset}
            className="absolute top-8 right-8 text-vir-muted hover:text-white transition-colors hover-trigger"
          >
            <X size={24} />
          </button>

          {/* Progress Bar */}
          {steps[currentStep] !== 'success' && (
            <div className="absolute top-8 left-8 md:left-24 flex gap-2">
              {[0, 1, 2, 3].map((step) => (
                <div 
                  key={step} 
                  className={`h-1 w-8 rounded-full transition-colors duration-300 ${step <= currentStep ? 'bg-vir-accent' : 'bg-vir-border'}`} 
                />
              ))}
            </div>
          )}

          <div className="w-full max-w-3xl px-6 md:px-0 relative">
            
            {/* Step Label */}
            {steps[currentStep] !== 'success' && (
                <motion.span 
                    key="label"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="block font-mono text-xs text-vir-accent uppercase tracking-widest mb-8"
                >
                    Step 0{currentStep + 1} / 04
                </motion.span>
            )}

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentStep}
                custom={direction}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "circOut" }}
                className="min-h-[400px]"
              >
                
                {/* STEP 1: SCOPE */}
                {steps[currentStep] === 'scope' && (
                  <div className="space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Select Protocol</h2>
                    <p className="text-vir-muted text-lg">What kind of digital infrastructure do you require?</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Web Application', 'Marketing Site', 'E-Commerce', 'Design System', 'Mobile App', 'Consultancy'].map((item) => (
                        <button
                          key={item}
                          onClick={() => toggleScope(item)}
                          className={`flex items-center justify-between p-6 border text-left transition-all duration-300 hover-trigger ${formData.scope.includes(item) ? 'border-vir-accent bg-vir-accent/5 text-white' : 'border-vir-border text-vir-muted hover:border-vir-muted'}`}
                        >
                          <span className="font-mono text-sm uppercase tracking-wider">{item}</span>
                          {formData.scope.includes(item) ? <Square size={16} fill="currentColor" /> : <Square size={16} />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 2: BUDGET */}
                {steps[currentStep] === 'budget' && (
                  <div className="space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Resource Allocation</h2>
                    <p className="text-vir-muted text-lg">Define the investment parameters for this operation.</p>
                    
                    <div className="space-y-3">
                      {['Seed (< $10k)', 'Series A ($10k - $30k)', 'Growth ($30k - $60k)', 'Enterprise ($60k+)'].map((range) => (
                        <button
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`w-full flex items-center justify-between p-6 border text-left transition-all duration-300 hover-trigger ${formData.budget === range ? 'border-vir-accent bg-vir-accent/5 text-white' : 'border-vir-border text-vir-muted hover:border-vir-muted'}`}
                        >
                           <span className="font-mono text-sm uppercase tracking-wider">{range}</span>
                           {formData.budget === range ? <Circle size={16} fill="currentColor" /> : <Circle size={16} />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* STEP 3: DETAILS */}
                {steps[currentStep] === 'details' && (
                   <div className="space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Project Brief</h2>
                    <p className="text-vir-muted text-lg">Outline your objectives, timeline, and any technical constraints.</p>
                    
                    <textarea 
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        placeholder="Type here..."
                        className="w-full h-48 bg-transparent border border-vir-border p-6 text-vir-text focus:outline-none focus:border-vir-accent transition-colors resize-none font-sans text-lg placeholder:text-vir-surface hover-trigger"
                    />
                  </div>
                )}

                {/* STEP 4: IDENTITY */}
                {steps[currentStep] === 'identity' && (
                   <div className="space-y-8">
                    <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Identification</h2>
                    <p className="text-vir-muted text-lg">Who is initiating this protocol?</p>
                    
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider">Name</label>
                            <input 
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-transparent border-b border-vir-border py-4 text-vir-text text-xl focus:outline-none focus:border-vir-accent transition-colors hover-trigger"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider">Email</label>
                            <input 
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full bg-transparent border-b border-vir-border py-4 text-vir-text text-xl focus:outline-none focus:border-vir-accent transition-colors hover-trigger"
                                placeholder="name@company.com"
                            />
                        </div>
                         <div className="space-y-2">
                            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider">Company / Organization</label>
                            <input 
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full bg-transparent border-b border-vir-border py-4 text-vir-text text-xl focus:outline-none focus:border-vir-accent transition-colors hover-trigger"
                                placeholder="Organization Name"
                            />
                        </div>
                    </div>
                  </div>
                )}

                {/* SUCCESS */}
                {steps[currentStep] === 'success' && (
                    <div className="flex flex-col items-center justify-center text-center space-y-8 h-full min-h-[400px]">
                        <motion.div
                            initial={{ scale: 0, rotate: -90 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="text-vir-accent"
                        >
                            <CheckCircle2 size={64} strokeWidth={1} />
                        </motion.div>
                        <h2 className="font-serif text-4xl md:text-5xl text-vir-text">Transmission Received.</h2>
                        <p className="text-vir-muted max-w-md mx-auto">
                            Your brief has been encrypted and sent to our core team. We will analyze your requirements and establish a secure channel within 24 hours.
                        </p>
                        <button 
                            onClick={reset}
                            className="mt-8 px-8 py-3 border border-vir-border hover:bg-vir-text hover:text-black transition-colors font-mono text-xs uppercase tracking-widest hover-trigger"
                        >
                            Return to Site
                        </button>
                    </div>
                )}

              </motion.div>
            </AnimatePresence>
            
            {/* Controls */}
            {steps[currentStep] !== 'success' && (
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-vir-border/20">
                    <button 
                        onClick={handleBack}
                        className={`flex items-center gap-2 text-vir-muted hover:text-white transition-colors hover-trigger font-mono text-xs uppercase tracking-wider ${currentStep === 0 ? 'invisible' : ''}`}
                    >
                        <ArrowLeft size={14} /> Back
                    </button>
                    
                    <button 
                        onClick={handleNext}
                        disabled={currentStep === 3 && (!formData.name || !formData.email)}
                        className="group flex items-center gap-2 bg-vir-text text-black px-6 py-3 rounded-sm font-mono text-xs uppercase tracking-wider hover:bg-white transition-colors hover-trigger disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {currentStep === 3 ? 'Submit Brief' : 'Next Step'}
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};