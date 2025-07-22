import { Button } from '@/components/ui/button';
import { ExternalLink, Palette, Users, Calendar, Lightbulb } from 'lucide-react';

const RupleartSection = () => {
  const features = [
    {
      icon: Palette,
      title: "Art Exhibitions",
      description: "Showcasing African artistic talent"
    },
    {
      icon: Users,
      title: "Online Marketplace",
      description: "Digital platform for art commerce"
    },
    {
      icon: Calendar,
      title: "Community Workshops",
      description: "Skills development programs"
    },
    {
      icon: Lightbulb,
      title: "Annual Festival",
      description: "Celebrating creativity and innovation"
    }
  ];

  const handleVisitRupleart = () => {
    // This would navigate to the actual Rupleart website
    window.open('https://rupleart.com', '_blank');
  };

  return (
    <section id="rupleart" className="py-20 bg-gradient-to-br from-primary/5 to-primary-glow/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Flagship Project: <span className="text-primary">Rupleart</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="bg-gradient-card p-8 rounded-xl shadow-card">
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Rupleart is a Ruplewind initiative that supports African artists through exhibitions, 
                  an online marketplace, community workshops & the annual Rupleart Festival. It's our 
                  creative investment in Africa's cultural capital and a space for collaboration between 
                  art, design & digital innovation.
                </p>

                <Button
                  variant="hero"
                  size="lg"
                  onClick={handleVisitRupleart}
                  className="w-full sm:w-auto"
                >
                  Visit Rupleart
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 animate-scale-in">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-card p-6 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 text-center group hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-gradient-primary p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RupleartSection;