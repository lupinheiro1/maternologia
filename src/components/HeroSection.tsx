import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroDesktop from "@/assets/hero-desktop.webp";
import heroMobile from "@/assets/hero-mobile.webp";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Images */}
      <img
        src={heroDesktop}
        alt="Mãe carregando bebê com amor"
        className="absolute inset-0 w-full h-full object-cover object-right hidden md:block"
        loading="eager"
        fetchPriority="high"
      />
      <img
        src={heroMobile}
        alt="Mãe carregando bebê com amor"
        className="absolute inset-0 w-full h-full object-cover object-center block md:hidden"
        loading="eager"
        fetchPriority="high"
      />

      {/* Overlay - Desktop: gradient from left, Mobile: gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent hidden md:block" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent block md:hidden" />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        {/* Desktop: Left aligned */}
        <div className="hidden md:block max-w-xl">
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight mb-8 opacity-0 animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            <em className="text-cream not-italic">"Porque toda mulher merece viver a melhor maternidade possível</em> — a sua."
          </h1>
          
          <p 
            className="text-lg md:text-xl text-white/90 max-w-lg mb-10 leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
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
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowDown className="animate-bounce" size={20} />
              <span className="text-sm font-medium">Descubra mais</span>
            </a>
          </div>
        </div>

        {/* Mobile: Centered at bottom */}
        <div className="md:hidden flex flex-col items-center justify-end min-h-[80vh] text-center">
          <h1 
            className="text-3xl font-semibold text-white leading-tight mb-6 opacity-0 animate-fade-up drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            <em className="text-cream not-italic">"Porque toda mulher merece viver a melhor maternidade possível</em> — a sua."
          </h1>
          
          <p 
            className="text-base text-white/90 max-w-sm mb-8 leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
            style={{ animationDelay: "0.4s" }}
          >
            Do positivo ao primeiro ano do bebê, aqui você encontra estrutura, leveza e acolhimento.
          </p>

          <div 
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 text-base font-medium rounded-full shadow-lg"
              onClick={() => document.getElementById('cursos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça nossos cursos
            </Button>
          </div>

          <div 
            className="mt-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s" }}
          >
            <a 
              href="#cursos" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowDown className="animate-bounce" size={18} />
              <span className="text-sm font-medium">Descubra mais</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
