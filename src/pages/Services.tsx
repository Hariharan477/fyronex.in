import { Code, Cpu, Layers, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code,
    title: 'Software Projects',
    description: 'We develop complete software solutions using modern technologies and best practices.',
    features: [
      'Web Applications (React, Node.js, Python)',
      'Mobile Apps (Cross-platform solutions)',
      'Desktop Applications',
      'Database Design & Implementation',
      'API Development & Integration',
      'Automation Scripts & Tools',
    ],
  },
  {
    icon: Cpu,
    title: 'Hardware Projects',
    description: 'Custom hardware solutions from concept to working prototype.',
    features: [
      'Embedded Systems (Arduino, Raspberry Pi)',
      'IoT Devices & Smart Systems',
      'Microcontroller Programming',
      'Sensor Integration',
      'PCB Design Guidance',
      'Electronic Circuit Design',
    ],
  },
  {
    icon: Layers,
    title: 'Software + Hardware Integrated Systems',
    description: 'Seamless combination of software and hardware for complex requirements.',
    features: [
      'Full-Stack IoT Solutions',
      'Hardware-Software Interface Design',
      'Real-time Data Processing',
      'Cloud Integration for Hardware',
      'Mobile App + Hardware Systems',
      'Complete System Architecture',
    ],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Professional project solutions tailored to your academic and professional needs.
              Pricing depends on project complexity — reach out for a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="https://wa.me/919600982664" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-primary-glow gap-2">
                      Discuss Your Project
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 flex items-center justify-center">
                    <service.icon className="h-24 w-24 text-primary/30" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Transparent Pricing</h3>
            <p className="text-muted-foreground mb-6">
              Every project is unique, so our pricing is tailored to the complexity and scope of your requirements.
              Contact us with your project details for a personalized quote.
            </p>
            <a href="https://wa.me/919600982664" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-primary-glow">
                Get a Quote
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
