import general2 from "@/assets/general-2.jpg";
import slider03 from "@/assets/slider-03.jpg";
import campActivity2 from "@/assets/camp-activity-2.jpg";
import { Button } from "@/components/ui/button";

const DiscoverSection = () => {
  return (
    <section className="py-20 bg-gradient-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Wonder Awaits: Discover Your Oasis
          </h2>
        </div>

        {/* Alternating Content Blocks */}
        <div className="space-y-24">
          {/* Block 1: One Nature Mara River */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 text-primary text-sm tracking-widest">
                <span className="w-8 h-px bg-primary"></span>
                <span>LUXURY TENTED SUITES</span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                One Nature Mara River
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Experience the ultimate in luxury safari living with our exclusive tented suites. Each canvas retreat combines authentic bush ambiance with contemporary comfort, offering private verandas with breathtaking views of the Serengeti plains and the legendary Mbalageti River.
              </p>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById("accommodation")?.scrollIntoView({ behavior: "smooth" })}
              >
                EXPLORE SUITES
              </Button>
            </div>

            <div className="overflow-hidden rounded shadow-luxury animate-scale-in">
              <img
                src={general2}
                alt="Luxury tented suite with private terrace overlooking the bush"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Block 2: Exclusive Nyumba (Reversed) */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="overflow-hidden rounded shadow-luxury animate-scale-in md:order-1">
              <img
                src={slider03}
                alt="Stunning sunset view from private outdoor bath overlooking the Serengeti"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            <div className="space-y-6 animate-fade-in md:order-2">
              <div className="flex items-center gap-2 text-primary text-sm tracking-widest">
                <span className="w-8 h-px bg-primary"></span>
                <span>EXECUTIVE & FAMILY SUITES</span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                One Exclusive Nyumba
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Our spacious Executive and Family Suites redefine safari luxury. With multiple bedrooms, expansive living areas, and private terraces, these sanctuaries offer unparalleled comfort for families or those seeking extra space. Wake to wildlife at your doorstep and endless Serengeti horizons.
              </p>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById("accommodation")?.scrollIntoView({ behavior: "smooth" })}
              >
                VIEW NYUMBA
              </Button>
            </div>
          </div>

          {/* Block 3: Dining Experience */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 text-primary text-sm tracking-widest">
                <span className="w-8 h-px bg-primary"></span>
                <span>CULINARY EXCELLENCE</span>
              </div>
              
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                African-Inspired Fine Dining
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Savor the flavors of Africa with our expertly crafted cuisine. From sunrise bush breakfasts to romantic candlelit dinners under the stars, every meal is an experience. Our chefs blend local ingredients with international techniques to create unforgettable culinary journeys.
              </p>
              
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                DINING EXPERIENCES
              </Button>
            </div>

            <div className="overflow-hidden rounded shadow-luxury animate-scale-in">
              <img
                src={campActivity2}
                alt="Bush dining experience with traditional Maasai blankets and lanterns"
                className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
