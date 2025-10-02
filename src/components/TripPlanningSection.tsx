import { Button } from "@/components/ui/button";
import gameDrive from "@/assets/game-drive.jpg";

const TripPlanningSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
              Let us plan your trip
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              Planning a safari can be overwhelming. Let our expert team craft the perfect Serengeti experience tailored to your dreams.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Expert Guidance</h4>
                  <p className="text-muted-foreground text-sm">
                    Years of safari experience at your service
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Tailored Safaris</h4>
                  <p className="text-muted-foreground text-sm">
                    Customized itineraries designed around your interests
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Trusted Services</h4>
                  <p className="text-muted-foreground text-sm">
                    Seamless booking and dedicated support throughout
                  </p>
                </div>
              </li>
            </ul>
            
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium mt-6"
              onClick={scrollToContact}
            >
              CONTACT US
            </Button>
          </div>

          {/* Right: Wildlife Image */}
          <div className="overflow-hidden rounded shadow-luxury animate-scale-in">
            <img
              src={gameDrive}
              alt="Lions resting in the Serengeti grasslands"
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripPlanningSection;
