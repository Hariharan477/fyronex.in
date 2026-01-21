import { CheckCircle2 } from 'lucide-react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { useEffect, useState } from 'react';

const features = [
  {
    title: 'Custom-Built Solutions',
    description: 'Every project is tailored to your specific requirements, not generic templates.',
  },
  {
    title: 'End-to-End Support',
    description: 'From initial concept to final delivery, we guide you through every step.',
  },
  {
    title: 'Professional Execution',
    description: 'Industry-standard practices and quality assurance in every project.',
  },
  {
    title: 'Flexible Pricing',
    description: 'Pricing based on project complexity — transparent and fair.',
  },
];

function AnimatedCounter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      }}
      viewport={{ once: true }}
    >
      <span className="text-6xl font-bold gradient-text">{count}+</span>
    </motion.div>
  );
}

export function WhyFyronex() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <FadeIn direction="left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Why Choose <span className="gradient-text">Fyronex</span>?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              We understand the challenges students face with technical projects. 
              That's why we focus on delivering solutions that not only work but also 
              help you understand the underlying concepts.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex gap-4 group"
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </FadeIn>

          {/* Visual */}
          <FadeIn direction="right" delay={0.2}>
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-primary/5 p-8 flex items-center justify-center relative overflow-hidden"
              >
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-8 border border-primary/10 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-16 border border-accent/10 rounded-full"
                />
                
                <div className="text-center relative z-10">
                  <AnimatedCounter target={100} />
                  <p className="text-muted-foreground mt-2">Projects Delivered</p>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-primary/10 blur-2xl" 
              />
              <motion.div 
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 h-32 w-32 rounded-full bg-accent/10 blur-2xl" 
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
