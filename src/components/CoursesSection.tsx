import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Heart, Sparkles } from "lucide-react";
import WaitlistModal from "@/components/WaitlistModal";

const courses = [
  {
    title: "100 Dias Sem Caos",
    description: "O guia essencial para mães que querem viver o início da maternidade com leveza, segurança e direção",
    buttonText: "Garanta o guia",
    icon: BookOpen,
    color: "terracotta",
    available: true,
    link: "https://hotmart.com/pt-br/marketplace/produtos/100-dias-sem-caos-o-guia-essencial-para-maes-que-querem-viver-o-inicio-da-maternidade-com-leveza-seguranca-e-direcao/E104054938B",
  },
  {
    title: "Enxoval Simplificado",
    description: "A planilha mais prática e simples possível que organiza seu enxoval, lista de presentes e evita gastos desnecessários.",
    buttonText: "Acessar ferramenta",
    icon: Sparkles,
    color: "mustard",
    available: true,
    link: "https://go.hotmart.com/R99344228M",
  },
  {
    title: "Carregue Amor",
    description: "Aprenda a arte de carregar seu bebê com liberdade, afeto e praticidade aqui. Afinal, o colo é o melhor lugar para o seu pequeno. Se você puder ter as mãos livres, melhor ainda.",
    buttonText: "Se inscreva no curso",
    icon: Heart,
    color: "sage",
    available: true,
    link: "https://go.hotmart.com/K96454840J",
  },
  {
    title: "Maternologia",
    description: "O curso completo, do positivo ao primeiro ano do bebê, com tudo o que você precisa para viver a melhor maternidade possível para você.",
    buttonText: "Entrar na lista de espera",
    icon: Clock,
    color: "forest",
    available: false,
    badge: "Em breve",
  },
];

const CoursesSection = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleCourseClick = (course: typeof courses[0]) => {
    if (course.available && course.link) {
      window.open(course.link, "_blank", "noopener,noreferrer");
    } else if (!course.available) {
      setIsWaitlistOpen(true);
    }
  };

  return (
    <>
      <section id="cursos" className="py-24 bg-background">
        <div className="container">
          <h2 className="font-sans text-3xl md:text-4xl font-semibold text-center mb-4">
            Nossos Cursos
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            Cada material foi criado com muito carinho para te apoiar em cada fase da sua jornada materna.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div
                  key={course.title}
                  className="group relative bg-card hover:bg-card/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl opacity-0 animate-fade-up border-b-4 border-transparent hover:border-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {course.badge && (
                    <span className="absolute top-4 right-4 bg-sage text-white text-xs font-medium px-3 py-1 rounded-full">
                      {course.badge}
                    </span>
                  )}
                  
                  <div className={`inline-flex p-3 rounded-xl bg-${course.color}/10 mb-6`}>
                    <Icon className={`w-6 h-6 text-${course.color}`} />
                  </div>

                  <h3 className="font-sans text-xl md:text-2xl font-semibold mb-4">
                    {course.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {course.description}
                  </p>

                  <Button 
                    variant={course.available ? "default" : "outline"}
                    onClick={() => handleCourseClick(course)}
                    className={`w-full md:w-auto ${
                      course.available 
                        ? "bg-primary hover:bg-primary/90" 
                        : "border-sage text-sage hover:bg-sage hover:text-white"
                    } rounded-full transition-all duration-300`}
                  >
                    {course.buttonText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <WaitlistModal open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen} />
    </>
  );
};

export default CoursesSection;
