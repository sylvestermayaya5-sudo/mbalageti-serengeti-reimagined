import heroImage from "@/assets/presidential-full-room.png";

const ConservationSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Conservation efforts in the Serengeti ecosystem"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Preservation and Luxury Unite
          </h2>
          
          <p className="text-primary-foreground/90 text-lg leading-relaxed">
            At Mbalageti Serengeti, luxury and conservation walk hand in hand. We are deeply committed to protecting the fragile ecosystem that surrounds us and supporting the local communities who share this land.
          </p>
          
          <p className="text-primary-foreground/90 leading-relaxed">
            Through sustainable tourism practices, wildlife conservation initiatives, and community partnerships, we ensure that future generations can experience the magic of the Serengeti. Every stay with us contributes to preserving Africa's natural heritage while empowering local communities through education, employment, and cultural preservation.
          </p>

          <div className="pt-6">
            <div className="inline-flex items-center gap-2 text-primary-foreground font-medium">
              <span className="w-12 h-px bg-primary-foreground/60"></span>
              <span className="text-sm tracking-wide">COMMITTED TO SUSTAINABLE SAFARI TOURISM</span>
              <span className="w-12 h-px bg-primary-foreground/60"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConservationSection;
