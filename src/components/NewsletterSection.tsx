import { useEffect } from "react";
import { Sparkles } from "lucide-react";

const NewsletterSection = () => {
  useEffect(() => {
    // Load MailerLite script
    const w = window as any;
    if (!w.ml) {
      w.ml = function () {
        (w.ml.q = w.ml.q || []).push(arguments);
      };
      const l = document.createElement("script");
      l.async = true;
      l.src = "https://assets.mailerlite.com/js/universal.js";
      const n = document.getElementsByTagName("script")[0];
      n.parentNode?.insertBefore(l, n);
      w.ml("account", "2088191");
    }
  }, []);

  return (
    <section id="newsletter" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-10 right-10 w-40 h-40 bg-mustard/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-56 h-56 bg-sage/10 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div 
            className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Newsletter quinzenal</span>
          </div>

          <h2 
            className="font-sans text-3xl md:text-4xl font-semibold mb-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Receba acolhimento na sua caixa de entrada
          </h2>

          <p 
            className="text-muted-foreground text-lg mb-10 max-w-lg mx-auto leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            Reflexões, conteúdos exclusivos e ferramentas práticas — toda quinzena, direto pra você. 
            Sem spam, sem cobrança. Só o que faz florescer.
          </p>

          <div 
            className="max-w-md mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="ml-embedded" data-form="HSYvQA"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
