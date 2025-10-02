import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import DiscoverSection from "@/components/DiscoverSection";
import ComfortSection from "@/components/ComfortSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import ConservationSection from "@/components/ConservationSection";
import BlogSection from "@/components/BlogSection";
import TripPlanningSection from "@/components/TripPlanningSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <DiscoverSection />
        <ComfortSection />
        <ExperiencesSection />
        <ConservationSection />
        <BlogSection />
        <TripPlanningSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
