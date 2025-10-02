import { useState } from "react";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-serengeti.jpg";
import lodgeRoom from "@/assets/lodge-room.jpg";
import gameDrive from "@/assets/game-drive.jpg";
import dining from "@/assets/dining.jpg";
import riverView from "@/assets/river-view.jpg";
import pool from "@/assets/pool.jpg";

const galleryImages = [
  { src: heroImage, alt: "Serengeti sunset with acacia trees silhouetted against golden sky" },
  { src: lodgeRoom, alt: "Luxury tented suite interior with elegant African decor" },
  { src: gameDrive, alt: "Safari game drive with elephants at dawn in the Serengeti" },
  { src: dining, alt: "Romantic bush dining experience under the stars" },
  { src: riverView, alt: "Aerial view of Mbalageti River winding through savanna landscape" },
  { src: pool, alt: "Infinity pool overlooking endless Serengeti plains" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-gradient-savanna">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Visual Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in the beauty of Mbalageti Serengeti through our curated collection of moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-card hover:shadow-luxury transition-all duration-500 cursor-pointer group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={galleryImages[selectedImage].src}
            alt={galleryImages[selectedImage].alt}
            className="max-w-full max-h-full object-contain rounded-lg shadow-luxury"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
