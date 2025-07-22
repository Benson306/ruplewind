import { Target, Eye } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16 animate-fade-in">
            Our Purpose & Vision
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-full mr-4">
                  <Target className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To build & invest in visionary ventures that transform industries, empower 
                communities & drive sustainable economic growth in Africa.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-primary p-3 rounded-full mr-4">
                  <Eye className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A future-ready Africa led by innovation, creativity & inclusive entrepreneurship.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;