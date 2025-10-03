import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-color-removebg-preview.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/98 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="transition-opacity hover:opacity-80"
        >
          <img src={logo} alt="Mbalageti Serengeti" className="h-12 w-auto" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("about")}
            className={`transition-colors font-medium ${
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("accommodation")}
            className={`transition-colors font-medium ${
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Accommodation
          </button>
          <button
            onClick={() => scrollToSection("experiences")}
            className={`transition-colors font-medium ${
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => scrollToSection("gallery")}
            className={`transition-colors font-medium ${
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className={`transition-colors font-medium ${
              isScrolled ? "text-foreground/80 hover:text-primary" : "text-primary-foreground/90 hover:text-primary-foreground"
            }`}
          >
            Contact
          </button>
          <Button 
            className={isScrolled ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-primary-foreground hover:bg-primary-foreground/90 text-primary"}
            size="default" 
            onClick={() => scrollToSection("contact")}
          >
            Book Your Stay
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("accommodation")}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              Accommodation
            </button>
            <button
              onClick={() => scrollToSection("experiences")}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              Experiences
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              Contact
            </button>
            <Button variant="hero" size="default" onClick={() => scrollToSection("contact")} className="w-full">
              Book Your Stay
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
