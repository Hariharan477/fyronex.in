import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  distance?: number;
  delay?: number;
}

export function FloatingElement({ 
  children, 
  className = '',
  duration = 4,
  distance = 10,
  delay = 0
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{ 
        y: [-distance, distance, -distance],
      }}
      transition={{ 
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PulseElement({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.05, 1],
        opacity: [0.5, 0.8, 0.5]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function GlowOrb({ className = '' }: { className?: string }) {
  return (
    <motion.div
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.6, 0.3]
      }}
      transition={{ 
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      className={`absolute rounded-full blur-3xl ${className}`}
    />
  );
}
