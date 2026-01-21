import { MessageCircle, Phone, Instagram, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactMethods = [
  {
    icon: MessageCircle,
    title: 'WhatsApp',
    description: 'Quick responses, usually within hours',
    action: 'Chat Now',
    href: 'https://wa.me/919600982664',
    primary: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    description: '+91 96009 82664 / +91 98841 67457',
    action: 'Call Us',
    href: 'tel:+919600982664',
    primary: false,
  },
  {
    icon: Instagram,
    title: 'Instagram',
    description: '@fyronex_477',
    action: 'Follow Us',
    href: 'https://www.instagram.com/fyronex_477',
    primary: false,
  },
];

const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to start your project? Have questions? We're here to help.
              Reach out through any of the channels below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method) => (
              <a
                key={method.title}
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-card border border-border card-hover text-center"
              >
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors ${method.primary
                    ? 'bg-[#25D366]/20 group-hover:bg-[#25D366]/30'
                    : 'bg-primary/10 group-hover:bg-primary/20'
                  }`}>
                  <method.icon className={`h-7 w-7 ${method.primary ? 'text-[#25D366]' : 'text-primary'}`} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {method.description.split(' / ').map((line, i) => (
                    <div key={i} className="min-h-[1.25rem]">{line}</div>
                  ))}
                </div>
                <Button
                  variant={method.primary ? 'default' : 'outline'}
                  className={method.primary ? 'bg-[#25D366] hover:bg-[#25D366]/90' : ''}
                >
                  {method.action}
                </Button>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-6">Response Time</h2>
            <p className="text-muted-foreground mb-8">
              We typically respond within a few hours during business hours.
              For urgent inquiries, WhatsApp is the fastest way to reach us.
            </p>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-4">Before You Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                To help us understand your requirements better, please have the following ready:
              </p>
              <ul className="text-sm text-muted-foreground mt-4 space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Brief description of your project idea</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Type of project (software, hardware, or integrated)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Expected timeline or deadline</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2" />
                  <span>Any specific requirements or constraints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
