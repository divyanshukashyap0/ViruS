import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const inputTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };
  const inputBorderColor = "rgba(255, 255, 255, 0.08)"; // vir-border
  const inputFocusColor = "#3B82F6"; // vir-accent

  return (
    <Section id="contact" className="min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Info */}
        <div className="space-y-8">
          <span className="font-mono text-xs text-vir-accent uppercase tracking-widest">Initiate Protocol</span>
          <h2 className="font-serif text-5xl md:text-7xl text-vir-text leading-tight">
            Let's build <br />
            <span className="text-vir-muted italic">the impossible.</span>
          </h2>
          <p className="text-vir-muted text-lg max-w-md">
            We are currently accepting new commissions for Q3 2024. Tell us about your project.
          </p>

          <div className="pt-12 space-y-4">
            <a href="mailto:optistyle.india@gmail.com" className="block font-mono text-vir-text hover:text-vir-accent transition-colors hover-trigger">
              optistyle.india@gmail.com
            </a>
            <div className="flex gap-6">
               <a
                 href="https://www.linkedin.com/in/divyanshu-kashyap-a5ab99311/"
                 className="font-mono text-xs text-vir-muted hover:text-white uppercase tracking-wider hover-trigger"
               >
                 LinkedIn
               </a>
               <a
                 href="https://github.com/divyanshukashyap0"
                 className="font-mono text-xs text-vir-muted hover:text-white uppercase tracking-wider hover-trigger"
               >
                 GitHub
               </a>
            </div>
          </div>
        </div>

        {/* Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 rounded-2xl space-y-8"
          action="https://formsubmit.co/optistyle.india@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_subject" value="New contact from ViruS site" />
          <div className="space-y-2 group">
            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider group-focus-within:text-vir-accent transition-colors duration-500">Name</label>
            <motion.input 
              type="text" 
              name="name"
              required
              className="w-full bg-transparent border-b py-4 text-vir-text focus:outline-none hover-trigger placeholder:text-vir-muted/20"
              placeholder="John Doe"
              initial={{ borderColor: inputBorderColor }}
              whileFocus={{ borderColor: inputFocusColor }}
              transition={inputTransition}
            />
          </div>
          
          <div className="space-y-2 group">
            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider group-focus-within:text-vir-accent transition-colors duration-500">Email</label>
            <motion.input 
              type="email" 
              name="email"
              required
              className="w-full bg-transparent border-b py-4 text-vir-text focus:outline-none hover-trigger placeholder:text-vir-muted/20"
              placeholder="john@example.com"
              initial={{ borderColor: inputBorderColor }}
              whileFocus={{ borderColor: inputFocusColor }}
              transition={inputTransition}
            />
          </div>

          <div className="space-y-2 group">
            <label className="text-xs font-mono text-vir-muted uppercase tracking-wider group-focus-within:text-vir-accent transition-colors duration-500">Message</label>
            <motion.textarea 
              rows={4}
              name="message"
              className="w-full bg-transparent border-b py-4 text-vir-text focus:outline-none resize-none hover-trigger placeholder:text-vir-muted/20"
              placeholder="Tell us about your vision..."
              initial={{ borderColor: inputBorderColor }}
              whileFocus={{ borderColor: inputFocusColor }}
              transition={inputTransition}
            />
          </div>

          <button type="submit" className="group w-full py-4 bg-vir-text hover:bg-white text-black font-medium rounded-sm flex items-center justify-center gap-2 transition-all duration-300 hover-trigger mt-4">
            <span>Send Message</span>
            <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>
        </motion.form>

      </div>
      
      <div className="mt-24 text-center">
        <p className="font-mono text-[10px] text-vir-border uppercase tracking-[0.2em]">
          Designed & Engineered by ViruS Collective &copy; {new Date().getFullYear()}
        </p>
      </div>
    </Section>
  );
};
