import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import InspirationBand from "@/components/InspirationBand";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <CoursesSection />
        <InspirationBand />
        <AboutSection />
        <NewsletterSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
