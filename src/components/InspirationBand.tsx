import { Button } from "@/components/ui/button";

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
  return (
    <section className="py-24 bg-sage text-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="font-display text-2xl md:text-3xl leading-relaxed mb-8">
              O maternar realmente é um grande jardim, mas é bem mais legal de apreciar quando compartilhado. 
              <span className="block mt-4">
                Junte-se a nossa comunidade da Maternologia para criar novos ciclos, formar vínculos reais e viver a{" "}
                <em>melhor maternidade possível</em> para você.
              </span>
            </p>

            <Button 
              size="lg"
              className="bg-mustard hover:bg-mustard/90 text-foreground font-medium px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Quero minha melhor maternidade possível
            </Button>
          </div>

          {/* Right - Words Grid */}
          <div 
            className="flex flex-wrap gap-4 justify-center lg:justify-end opacity-0 animate-slide-in-right"
            style={{ animationDelay: "0.4s" }}
          >
            {words.map((word, index) => (
              <span
                key={word.text}
                className={`text-lg md:text-xl font-medium px-4 py-2 transition-all duration-300 hover:scale-105 ${
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
  );
};

export default InspirationBand;
