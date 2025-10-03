import { Facebook, Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo-color-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-savanna-gold text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-primary-foreground/80">
              Stay updated with the latest safari stories, exclusive offers, and wildlife insights
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-primary-foreground text-savanna-gold hover:bg-primary-foreground/90 flex-shrink-0">
                <Mail className="w-4 h-4 mr-2" />
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & About */}
            <div>
              <img src={logo} alt="Mbalageti Serengeti" className="h-14 w-auto mb-4" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Where wilderness meets luxury in the heart of the Great Migration.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm tracking-wide">QUICK LINKS</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#accommodation" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Accommodation
                  </a>
                </li>
                <li>
                  <a href="#experiences" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Experiences
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-sm tracking-wide">CONTACT</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>reservations@mbalageti.com</li>
                <li>+255 123 456 789</li>
                <li>Western Serengeti, Tanzania</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4 text-sm tracking-wide">FOLLOW US</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground hover:text-savanna-gold transition-all"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground hover:text-savanna-gold transition-all"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground hover:text-savanna-gold transition-all"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground hover:text-savanna-gold transition-all"
                  aria-label="Follow us on YouTube"
                >
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20 py-6">
        <div className="container mx-auto px-4 text-center text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Mbalageti Serengeti. All rights reserved.</p>
          <p className="mt-2">Designed by Kena's Group.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
