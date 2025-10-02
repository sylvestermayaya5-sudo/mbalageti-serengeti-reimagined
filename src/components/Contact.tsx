import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Received",
      description: "Thank you for your interest. We'll contact you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", dates: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Plan Your Safari
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let us help you create an unforgettable journey. Our team is ready to craft your perfect Serengeti experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:reservations@mbalageti.com" className="text-muted-foreground hover:text-primary transition-colors">
                      reservations@mbalageti.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone & WhatsApp</h4>
                    <a href="tel:+255123456789" className="text-muted-foreground hover:text-primary transition-colors">
                      +255 123 456 789
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">
                      Western Serengeti Corridor<br />
                      Near Mbalageti River<br />
                      Serengeti National Park, Tanzania
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/30 p-6 rounded-lg border border-border">
              <h4 className="font-semibold text-foreground mb-3">Best Time to Visit</h4>
              <p className="text-muted-foreground mb-2">
                <strong>Migration Season:</strong> June - October
              </p>
              <p className="text-muted-foreground">
                <strong>Green Season:</strong> November - May (excellent rates)
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
            <div>
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-card border-border"
              />
            </div>
            <div>
              <Input
                placeholder="Preferred Travel Dates"
                value={formData.dates}
                onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                className="bg-card border-border"
              />
            </div>
            <div>
              <Textarea
                placeholder="Tell us about your safari dreams..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                required
                className="bg-card border-border"
              />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full">
              Request a Quote
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
