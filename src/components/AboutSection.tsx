const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 animate-fade-in">
            About <span className="text-primary">Ruplewind Limited</span>
          </h2>
          
          <div className="bg-gradient-card p-8 rounded-xl shadow-card animate-scale-in">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ruplewind Limited is a privately owned, Kenya-based investment and innovation company 
              focused on catalyzing growth across high-potential sectors. We invest in and build 
              ventures that deliver value across Africa — from tech infrastructure & digital platforms 
              to art, agriculture & green energy. We believe in long-term value, sustainable growth 
              & inclusive progress — leveraging innovation & partnerships to shape a better future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;