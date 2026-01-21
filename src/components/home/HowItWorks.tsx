import { MessageSquare, Search, Settings, Package } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Share Your Idea',
    description: 'Tell us about your project requirements and objectives.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Requirement Analysis',
    description: 'We analyze feasibility and provide a detailed project plan.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Development & Testing',
    description: 'Our team builds and thoroughly tests your solution.',
  },
  {
    icon: Package,
    step: '04',
    title: 'Delivery & Explanation',
    description: 'Receive your project with complete documentation and walkthrough.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        {/* Section Header */}
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-muted-foreground">
            A simple, transparent process from start to finish
          </p>
        </FadeIn>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div 
              key={item.step} 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative"
            >
              {/* Animated connector line */}
              {index < steps.length - 1 && (
                <motion.div 
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.15 }}
                  className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-px bg-gradient-to-r from-border via-primary/30 to-border origin-left" 
                />
              )}
              
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="text-center"
              >
                <div className="relative inline-flex items-center justify-center mb-6">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center relative"
                  >
                    <item.icon className="h-7 w-7 text-primary" />
                    
                    {/* Pulse ring on hover */}
                    <motion.div
                      initial={{ scale: 1, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: [0, 0.3, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 rounded-full border-2 border-primary"
                    />
                  </motion.div>
                  
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-lg"
                  >
                    {item.step}
                  </motion.span>
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
