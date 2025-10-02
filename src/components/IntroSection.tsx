import gameDrive from "@/assets/game-drive.jpg";
import lodgeRoom from "@/assets/lodge-room.jpg";
import { Button } from "@/components/ui/button";

const IntroSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center gap-2 text-primary text-sm tracking-widest">
              <span className="w-8 h-px bg-primary"></span>
              <span>MBALAGETI SERENGETI</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Embrace Nature,<br />Experience Luxury
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              In the heart of the Western Serengeti, where the Mbalageti River flows through endless plains, discover a sanctuary where wilderness meets refined comfort. Each moment is an invitation to connect with Africa's raw beauty while indulging in world-class hospitality.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              From sunrise game drives tracking the Great Migration to evenings under star-filled skies, Mbalageti Serengeti offers an authentic safari experience wrapped in elegance. Our lodge is more than accommodation—it's your gateway to nature's greatest show.
            </p>
            
            <Button 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => document.getElementById("accommodation")?.scrollIntoView({ behavior: "smooth" })}
            >
              DISCOVER MORE
            </Button>
          </div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-4 animate-fade-in">
            <div className="overflow-hidden rounded shadow-card">
              <img
                src={gameDrive}
                alt="Safari game drive viewing wildlife in Serengeti"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="overflow-hidden rounded shadow-card mt-12">
              <img
                src={lodgeRoom}
                alt="Luxury lodge room interior at Mbalageti"
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
