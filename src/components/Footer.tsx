import { Link } from 'react-router-dom';
import { Instagram, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <Link to="/" className="flex items-center justify-center md:justify-start gap-2 mb-4 group">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex items-center justify-center p-1"
              >
                <img
                  src={theme === 'dark' ? "/logo-dark.png" : "/logo-light.png"}
                  alt="Fyronex"
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
              <span className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                Fyronex
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
              From concept to completion. Professional software and hardware project solutions for students.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/services', label: 'Services' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              {[
                { href: 'https://wa.me/919600982664', icon: MessageCircle, label: 'WhatsApp', external: true },
                { href: 'tel:+919600982664', icon: Phone, label: '+91 96009 82664', external: false },
                { href: 'https://www.instagram.com/fyronex_477', icon: Instagram, label: '@fyronex_477', external: true },
              ].map((contact) => (
                <li key={contact.label}>
                  <motion.a
                    href={contact.href}
                    target={contact.external ? '_blank' : undefined}
                    rel={contact.external ? 'noopener noreferrer' : undefined}
                    className="flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <contact.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    {contact.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fyronex. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
