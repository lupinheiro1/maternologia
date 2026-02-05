import { useState } from "react";
import { Button } from "@/components/ui/button";
import NewsletterModal from "@/components/NewsletterModal";

const words = [
  { text: "Cuidado", highlight: false },
  { text: "Prática", highlight: false },
  { text: "Comunidade", highlight: "circle" },
  { text: "Escuta", highlight: false },
  { text: "Conexão", highlight: "exclamation" },
  { text: "Segurança", highlight: false },
  { text: "Direção", highlight: false },
  { text: "Acolhimento", highlight: "underline" },
  { text: "Realidade", highlight: false },
  { text: "Maternidade", highlight: false },
];

const InspirationBand = () => {
  const [isNewsletterOpen, setIsNewsletterOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-sage text-white overflow-hidden">
        <div className="container overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <p className="font-sans text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                O maternar realmente é um grande jardim, mas é bem mais legal de apreciar quando compartilhado. 
                <span className="block mt-4">
                  Junte-se a nossa comunidade da Maternologia para criar novos ciclos, formar vínculos reais e viver a{" "}
                  <em>melhor maternidade possível</em> para você.
                </span>
              </p>

              <Button 
                size="lg"
                onClick={() => setIsNewsletterOpen(true)}
                className="bg-mustard hover:bg-mustard/90 text-foreground font-medium px-6 py-5 md:px-8 md:py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
              >
                Quero minha melhor maternidade possível
              </Button>
            </div>

            {/* Right - Words Grid */}
            <div 
              className="flex flex-wrap gap-2 md:gap-4 justify-center lg:justify-end opacity-0 animate-fade-up max-w-full"
              style={{ animationDelay: "0.4s" }}
            >
              {words.map((word, index) => (
                <span
                  key={word.text}
                  className={`text-base md:text-lg lg:text-xl font-medium px-3 md:px-4 py-2 transition-all duration-300 hover:scale-105 ${
                    word.highlight === "circle"
                      ? "border-2 border-mustard rounded-full text-mustard"
                      : word.highlight === "exclamation"
                      ? "text-mustard font-bold"
                      : word.highlight === "underline"
                      ? "underline decoration-mustard decoration-2 underline-offset-4"
                      : "text-white/80 hover:text-white"
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                >
                  {word.text}
                  {word.highlight === "exclamation" && "!"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NewsletterModal open={isNewsletterOpen} onOpenChange={setIsNewsletterOpen} />
    </>
  );
};

export default InspirationBand;
