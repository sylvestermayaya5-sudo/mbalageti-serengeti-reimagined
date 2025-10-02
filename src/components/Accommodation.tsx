import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import lodgeRoom from "@/assets/lodge-room.jpg";

const accommodations = [
  {
    title: "Standard Lodge Rooms",
    description: "Comfortable and elegant rooms with stunning views of the Serengeti plains. Perfect for couples seeking an authentic safari experience.",
    features: ["King or twin beds", "En-suite bathroom", "Private veranda", "Wildlife viewing"],
    image: lodgeRoom,
  },
  {
    title: "Tented Chalets",
    description: "Experience the thrill of canvas luxury with modern amenities. Our spacious tents blend adventure with comfort.",
    features: ["Luxury canvas tents", "King-size bed", "Modern bathroom", "Outdoor seating area"],
    image: lodgeRoom,
  },
  {
    title: "Executive & Family Suites",
    description: "Spacious suites designed for families or those seeking extra space and privacy. Enjoy panoramic views and premium furnishings.",
    features: ["Multiple bedrooms", "Living area", "Premium amenities", "Exclusive service"],
    image: lodgeRoom,
  },
];

const Accommodation = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="accommodation" className="py-20 bg-gradient-savanna">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exclusive Accommodation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our carefully designed rooms and suites, each offering a unique perspective on the Serengeti wilderness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-luxury transition-all duration-500 bg-card border-border animate-fade-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={accommodation.image}
                  alt={`${accommodation.title} - luxury safari accommodation at Mbalageti Serengeti`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  {accommodation.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {accommodation.description}
                </p>
                <ul className="space-y-2">
                  {accommodation.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="safari" className="w-full" onClick={scrollToContact}>
                  Inquire Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accommodation;
