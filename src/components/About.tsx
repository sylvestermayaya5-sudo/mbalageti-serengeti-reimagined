import riverView from "@/assets/river-view.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              A Sanctuary in the Western Serengeti
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Perched on the banks of the magnificent Mbalageti River, our lodge offers an unparalleled vantage point to witness nature's greatest spectacle.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Located in the Western Serengeti Corridor, we provide exclusive access to the dramatic river crossings of the Great Migration, where thousands of wildebeest and zebra brave the currents in their timeless journey.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our commitment to sustainability and authentic wilderness experiences creates a perfect harmony between luxury and nature. Every detail is crafted to immerse you in the raw beauty of the African savanna while ensuring your comfort and safety.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <span className="w-12 h-0.5 bg-primary"></span>
                <span>Luxury Safari Experiences Since 1999</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src={riverView}
                alt="Aerial view of Mbalageti River winding through the Serengeti with wildlife near the water"
                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
