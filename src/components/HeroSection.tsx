import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-blush via-background to-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-mustard/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-48 h-48 bg-sage/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10 pt-24 pb-16 text-center max-w-4xl">
        <h1 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <em className="text-primary not-italic">"Porque toda mulher merece viver a melhor maternidade possível</em> — a sua."
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          Do positivo ao primeiro ano do bebê, aqui você encontra estrutura, leveza e acolhimento pra viver o começo com mais verdade e menos caos.
        </p>

        <div 
          className="opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Conheça nossos cursos
          </Button>
        </div>

        <div 
          className="mt-16 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <a 
            href="#cursos" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="animate-bounce" size={20} />
            <span className="text-sm font-medium">Descubra mais</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
