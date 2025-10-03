import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/presidential.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Serengeti at golden hour with acacia trees and vast savanna plains"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto animate-fade-up">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Mbalageti Serengeti
          </h1>
          <p className="font-serif text-2xl md:text-3xl text-primary-foreground/90 mb-8 italic">
            Where Wilderness Meets Luxury
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Wake up to the call of the wild, dine under African skies, and witness the Great Migration from your private suite.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
              Book Your Stay
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("about")} className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
              Explore the Lodge
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
