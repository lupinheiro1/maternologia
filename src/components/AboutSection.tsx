import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 bg-blush/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image Placeholder */}
          <div 
            className="relative opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/20 to-sage/20 rounded-2xl overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <span className="font-display text-xl">Foto da Luiza</span>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-mustard/30 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-sage/30 rounded-full blur-2xl -z-10" />
          </div>

          {/* Content */}
          <div 
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium mb-6">
              Prazer, <span className="text-primary">Luiza Pinheiro</span> aqui!
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Ex-gerente de operações de uma grande empresa, hoje mãe jardineira (e carregadeira) de dois pequenos. 
                Sempre senti que faltava algo na minha vida – até que a maternidade mudou tudo.
              </p>
              
              <p>
                Quando engravidei, não acreditava que ser mãe poderia mudar tanto uma pessoa como diziam, afinal todas as 
                profecias vinham com um porém catastrófico: <em>"é o melhor amor do mundo, MAS um pedaço de você morre / 
                você nunca mais vai dormir / sua vida agora não é sua mais / etc etc etc..."</em>
              </p>
              
              <p>
                E quando a mudança de fato veio, mas para melhor, eu decidi: <strong>se todas as mulheres conseguissem 
                viver a melhor maternidade possível para si, com certeza teríamos um mundo melhor.</strong> Essa é a minha missão.
              </p>
              
              <p>
                Junto com meu marido (médico pediatra), criamos todos os conteúdos com muito carinho, unindo conhecimento 
                real da vida materna com linguagem acessível, apoio emocional e foco na prática.
              </p>
              
              <p className="text-foreground font-medium">
                O nosso sucesso é a sua melhor maternidade possível. Vamos juntas!
              </p>
            </div>

            <Button 
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              asChild
            >
              <a 
                href="https://instagram.com/maternologia_luiza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Instagram size={20} />
                Me siga no Instagram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
