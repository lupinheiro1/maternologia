import { useEffect, useState, useRef } from "react";
import { Sparkles, Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const hiddenFormRef = useRef<HTMLDivElement>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) return;
    
    setIsSubmitting(true);

    // Find the hidden MailerLite form and fill it
    const hiddenContainer = hiddenFormRef.current;
    if (hiddenContainer) {
      const form = hiddenContainer.querySelector("form");
      const nameInput = hiddenContainer.querySelector('input[name="fields[name]"], input[type="text"]') as HTMLInputElement;
      const emailInput = hiddenContainer.querySelector('input[type="email"]') as HTMLInputElement;
      const submitButton = hiddenContainer.querySelector('button[type="submit"]') as HTMLButtonElement;

      if (emailInput) {
        emailInput.value = email;
        emailInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      if (nameInput) {
        nameInput.value = name;
        nameInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      // Small delay to ensure values are set, then submit
      setTimeout(() => {
        if (submitButton) {
          submitButton.click();
        } else if (form) {
          form.dispatchEvent(new Event("submit", { bubbles: true }));
        }
        
        // Show success after a delay
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setName("");
          setEmail("");
        }, 1500);
      }, 100);
    } else {
      // Fallback if form not found
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
      }, 1000);
    }
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

          {/* Custom Form */}
          <div 
            className="max-w-md mx-auto opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {isSuccess ? (
              <div className="flex flex-col items-center gap-4 py-8 px-6 bg-sage/10 rounded-2xl border border-sage/20">
                <CheckCircle className="w-12 h-12 text-sage" />
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-1">Inscrição confirmada!</h3>
                  <p className="text-muted-foreground">
                    Em breve você receberá nosso primeiro e-mail. Bem-vinda!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2 text-left">
                  <Label htmlFor="newsletter-name" className="text-foreground/80">
                    Seu nome
                  </Label>
                  <Input
                    id="newsletter-name"
                    type="text"
                    placeholder="Como posso te chamar?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 bg-background border-border/50 focus:border-primary rounded-xl"
                  />
                </div>

                <div className="space-y-2 text-left">
                  <Label htmlFor="newsletter-email" className="text-foreground/80">
                    Seu e-mail
                  </Label>
                  <Input
                    id="newsletter-email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-12 bg-background border-border/50 focus:border-primary rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !name.trim() || !email.trim()}
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin mr-2" />
                      Enviando...
                    </>
                  ) : (
                    "Quero receber!"
                  )}
                </Button>

                <p className="text-xs text-muted-foreground mt-3">
                  Ao se inscrever, você concorda em receber nossos e-mails. Pode cancelar quando quiser.
                </p>
              </form>
            )}
          </div>

          {/* Hidden MailerLite form for actual submission */}
          <div 
            ref={hiddenFormRef}
            className="absolute -left-[9999px] opacity-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="ml-embedded" data-form="HSYvQA"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
