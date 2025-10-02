import riverView from "@/assets/river-view.jpg";

const ComfortSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Large Wildlife Image */}
          <div className="overflow-hidden rounded shadow-luxury animate-fade-in">
            <img
              src={riverView}
              alt="Wildebeest migration crossing the Mbalageti River"
              className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Where Comfort and Luxury Meet Wilderness
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              From sunrise over the Serengeti to evenings by the fire, Mbalageti is where untamed beauty meets unrivaled comfort.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Nestled along the banks of the Mbalageti River in the Western Corridor, our lodge offers front-row seats to one of nature's most spectacular events—the Great Migration. Watch as thousands of wildebeest and zebra navigate the river crossings, while predators lie in wait. Between game drives, retreat to your sanctuary where every detail has been thoughtfully designed for your comfort.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Whether you're lounging by our infinity pool overlooking the plains, indulging in spa treatments inspired by ancient African traditions, or simply watching the sunset paint the sky gold, Mbalageti Serengeti is your haven in the heart of the wild.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-primary font-semibold text-sm tracking-wide">
                <span className="w-12 h-px bg-primary"></span>
                <span>AUTHENTIC SAFARI LUXURY SINCE 1999</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
