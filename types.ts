import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noPadding?: boolean;
}

export interface HeroProps {
  onOpenCommission: () => void;
}

export interface CommissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}