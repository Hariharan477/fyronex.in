import { MessageCircle, Phone, Instagram, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/animations/FadeIn';
import { GlowOrb } from '@/components/animations/FloatingElement';

export function QuickContact() {
  return (
    <section className="py-20">
      <div className="container">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-8 md:p-12">
            {/* Animated background orbs */}
            <GlowOrb className="top-0 right-0 w-64 h-64 bg-primary/10" />
            <GlowOrb className="bottom-0 left-0 w-48 h-48 bg-accent/10" />

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center max-w-2xl mx-auto mb-10"
              >
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Ready to Start Your <span className="gradient-text">Project</span>?
                </h2>
                <p className="text-muted-foreground">
                  Get in touch with us today. We're here to help bring your ideas to life.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a 
                  href="https://wa.me/919600982664" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button size="lg" className="btn-primary-glow gap-2 min-w-[200px]">
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </motion.div>
                  </Button>
                </motion.a>
                
                <motion.a 
                  href="tel:+919600982664"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="outline" size="lg" className="gap-2 min-w-[200px]">
                    <Phone className="h-5 w-5" />
                    +91 96009 82664
                  </Button>
                </motion.a>
                
                <motion.a 
                  href="https://www.instagram.com/fyronex_477" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button variant="outline" size="lg" className="gap-2 min-w-[200px]">
                    <Instagram className="h-5 w-5" />
                    Instagram
                  </Button>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
