import pool from "@/assets/pool.jpg";

const ExperiencesSection = () => {
  return (
    <section className="py-20 bg-gradient-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Hot Air Balloon Image */}
          <div className="overflow-hidden rounded shadow-luxury animate-fade-in">
            <img
              src={pool}
              alt="Hot air balloon safari over the Serengeti at sunrise"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Right: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Enriching Experiences Await with Every Stay
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              Every moment at Mbalageti Serengeti is crafted to immerse you in the wonders of the African wilderness. From thrilling game drives tracking the Big Five to serene sundowners watching elephants at the waterhole, your safari is tailored to create memories that last a lifetime.
            </p>
            
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Morning and evening game drives with expert guides</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Hot air balloon safaris over the endless plains</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Bush dining and romantic sundowner experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Infinity pool overlooking the Serengeti</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Spa treatments and wellness therapies</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></span>
                <span>Cultural visits to local communities</span>
              </li>
            </ul>

            <p className="text-muted-foreground leading-relaxed pt-4">
              Whether you seek adventure or tranquility, Mbalageti Serengeti offers experiences that touch the soul and ignite the spirit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
