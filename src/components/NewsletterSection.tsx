import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Sparkles } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

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
            className="font-display text-3xl md:text-4xl font-medium mb-4 opacity-0 animate-fade-up"
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

          <form 
            onSubmit={handleSubmit} 
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-11 py-6 rounded-full border-2 border-muted focus:border-primary transition-colors"
              />
            </div>
            <Button 
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Quero receber!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
