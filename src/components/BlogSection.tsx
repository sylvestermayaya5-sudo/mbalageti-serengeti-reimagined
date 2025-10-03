import { Card, CardContent } from "@/components/ui/card";
import slider01 from "@/assets/slider-01.jpg";
import slider05 from "@/assets/slider-05.jpg";
import campActivity3 from "@/assets/camp-activity-3.jpg";

const blogPosts = [
  {
    image: slider01,
    category: "WILDLIFE",
    title: "The Best Time to See the Great Migration at Mbalageti",
    excerpt: "Discover the optimal months to witness thousands of wildebeest crossing the Mbalageti River.",
  },
  {
    image: slider05,
    category: "SAFARI TIPS",
    title: "A Complete Guide to Your First Serengeti Safari",
    excerpt: "Everything you need to know before embarking on your African adventure.",
  },
  {
    image: campActivity3,
    category: "CONSERVATION",
    title: "How Luxury Lodges Support Wildlife Conservation",
    excerpt: "Learn about our commitment to preserving the Serengeti ecosystem for future generations.",
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-primary"></span>
            <span className="text-primary text-sm tracking-widest">LATEST STORIES</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Blog
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-luxury transition-all duration-500 border-border bg-card animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6 space-y-3">
                <span className="text-xs text-primary tracking-widest font-medium">
                  {post.category}
                </span>
                <h3 className="font-serif text-xl font-bold text-foreground leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                <button className="text-primary text-sm font-medium hover:underline pt-2">
                  READ MORE →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
