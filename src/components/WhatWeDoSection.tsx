import techIcon from '@/assets/tech-icon.jpg';
import creativeIcon from '@/assets/creative-icon.jpg';
import sustainableIcon from '@/assets/sustainable-icon.jpg';
import businessIcon from '@/assets/business-icon.jpg';

const WhatWeDoSection = () => {
  const services = [
    {
      title: "Technology & Digital Platforms",
      description: "Fintech, e-commerce, AI & digital services.",
      icon: techIcon,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Creative & Cultural Ventures",
      description: "Support African artists through Rupleart and digital exposure.",
      icon: creativeIcon,
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Sustainable & Impact Projects",
      description: "Agritech, clean energy & infrastructure for people and planet.",
      icon: sustainableIcon,
      gradient: "from-green-500 to-emerald-600"
    },
    {
      title: "Business Acceleration",
      description: "Investment, mentorship & operational support for startups and SMEs.",
      icon: businessIcon,
      gradient: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              What We <span className="text-primary">Do</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              We focus on four key areas that drive innovation and sustainable growth across Africa
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;