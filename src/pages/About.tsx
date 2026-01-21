import { Target, Users, Lightbulb } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To help students build meaningful, practical projects with professional standards that prepare them for real-world challenges.',
  },
  {
    icon: Lightbulb,
    title: 'Our Vision',
    description: 'To be the trusted partner for students who want to transform their innovative ideas into working solutions.',
  },
  {
    icon: Users,
    title: 'Our Approach',
    description: 'We combine technical expertise with personalized guidance, ensuring every project meets its objectives.',
  },
];

const team = [
  {
    name: 'Uyiranban S',
    role: 'Founder',
  },
  {
    name: 'Hariharan B',
    role: 'Founder',
  },
];

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              About <span className="gradient-text">Fyronex</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a dedicated team of engineers and developers passionate about helping students
              succeed in their academic projects. From concept to completion, we ensure every solution
              is built with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-neutral dark:prose-invert mx-auto">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Fyronex was born from a simple observation: many talented students struggle to
                bring their project ideas to life due to time constraints, limited resources,
                or lack of technical guidance.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Having been students ourselves, we understood these challenges firsthand. We
                created Fyronex to bridge this gap — providing professional-grade project
                development services that help students achieve their academic goals while
                learning practical skills.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Today, we've helped numerous students successfully complete their final year
                projects, mini projects, and real-time implementations. Our commitment remains
                the same: quality, reliability, and genuine support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
