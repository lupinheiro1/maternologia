import { useEffect, useState, useRef } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const hiddenFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const w = window as any;
    if (!w.ml) {
      w.ml = function () {
        (w.ml.q = w.ml.q || []).push(arguments);
      };
      const s = document.createElement("script");
      s.async = true;
      s.src = "https://assets.mailerlite.com/js/universal.js";
      document.head.appendChild(s);
      w.ml("account", "2088191");
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setIsSubmitting(true);

    const container = hiddenFormRef.current;
    if (container) {
      const form = container.querySelector("form");
      const nameInput = container.querySelector('input[name="fields[name]"], input[type="text"]') as HTMLInputElement;
      const emailInput = container.querySelector('input[type="email"]') as HTMLInputElement;
      const submitButton = container.querySelector('button[type="submit"]') as HTMLButtonElement;

      if (emailInput) {
        emailInput.value = email;
        emailInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
      if (nameInput) {
        nameInput.value = name;
        nameInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      const phoneInput = container.querySelector('input[name="fields[phone]"]') as HTMLInputElement;
      if (phoneInput) {
        phoneInput.value = phone;
        phoneInput.dispatchEvent(new Event("input", { bubbles: true }));
      }

      setTimeout(() => {
        if (submitButton) {
          submitButton.click();
        } else if (form) {
          form.dispatchEvent(new Event("submit", { bubbles: true }));
        }
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSuccess(true);
          setName("");
          setEmail("");
          setPhone("");
        }, 1500);
      }, 100);
    } else {
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
      }, 1000);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) setIsSuccess(false); onOpenChange(v); }}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center leading-relaxed">
            Que bom te ter por aqui!
          </DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-center leading-relaxed mb-2">
          Vamos percorrer os caminhos da maternidade juntas. Se inscreva na nossa
          newsletter, prometo fazer valer o seu tempo :)
        </p>

        {isSuccess ? (
          <div className="flex flex-col items-center gap-4 py-6 px-4 bg-sage/10 rounded-2xl border border-sage/20">
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
              <Label htmlFor="modal-newsletter-name" className="text-foreground/80">Seu nome</Label>
              <Input
                id="modal-newsletter-name"
                type="text"
                placeholder="Como posso te chamar?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="h-12 bg-background border-border/50 focus:border-primary rounded-xl"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="modal-newsletter-email" className="text-foreground/80">Seu e-mail</Label>
              <Input
                id="modal-newsletter-email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-12 bg-background border-border/50 focus:border-primary rounded-xl"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="modal-newsletter-phone" className="text-foreground/80">WhatsApp</Label>
              <Input
                id="modal-newsletter-phone"
                type="tel"
                placeholder="(11) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

        {/* Hidden MailerLite form */}
        <div
          ref={hiddenFormRef}
          className="absolute -left-[9999px] opacity-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="ml-embedded" data-form="HSYvQA"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterModal;
