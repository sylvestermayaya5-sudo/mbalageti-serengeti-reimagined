import { Card, CardContent } from "@/components/ui/card";
import { Binoculars, Utensils, Waves, Sparkles } from "lucide-react";
import gameDrive from "@/assets/game-drive.jpg";
import dining from "@/assets/dining.jpg";
import pool from "@/assets/pool.jpg";

const experiences = [
  {
    icon: Binoculars,
    title: "Game Drives",
    description: "Witness the Great Migration and track the Big Five with our expert guides. Daily morning and evening safari drives.",
    image: gameDrive,
  },
  {
    icon: Utensils,
    title: "Bush Dining",
    description: "Savor gourmet cuisine under African stars. Experience authentic sundowners and private dining in the wilderness.",
    image: dining,
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Relax in our stunning pool overlooking the Serengeti plains. Perfect for afternoon relaxation after morning drives.",
    image: pool,
  },
  {
    icon: Sparkles,
    title: "Spa & Wellness",
    description: "Rejuvenate with traditional African treatments and modern wellness therapies in our tranquil spa sanctuary.",
    image: pool,
  },
];

const Experiences = () => {
  return (
    <section id="experiences" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Unforgettable Safari Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every moment at Mbalageti Serengeti is designed to create lasting memories. From thrilling game drives to serene relaxation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((experience, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-luxury transition-all duration-500 bg-card border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={experience.image}
                  alt={`${experience.title} - safari experience at Mbalageti Serengeti Lodge`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <experience.icon className="w-12 h-12 mb-3" />
                  <h3 className="font-serif text-3xl font-bold mb-2">
                    {experience.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
