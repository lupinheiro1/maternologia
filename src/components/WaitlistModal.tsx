import { useEffect, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && containerRef.current) {
      const container = containerRef.current;
      
      // Clear previous content
      container.innerHTML = "";
      
      // Create new ml-embedded div
      const mlDiv = document.createElement("div");
      mlDiv.className = "ml-embedded";
      mlDiv.setAttribute("data-form", "tbPNHH");
      container.appendChild(mlDiv);
      
      // Remove any existing MailerLite scripts to force reload
      const existingScripts = document.querySelectorAll('script[src*="mailerlite"]');
      existingScripts.forEach(script => script.remove());
      
      // Reset ml function
      (window as any).ml = function () {
        ((window as any).ml.q = (window as any).ml.q || []).push(arguments);
      };
      
      // Create and inject new script
      const script = document.createElement("script");
      script.async = true;
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.onload = () => {
        (window as any).ml("account", "2088191");
      };
      document.head.appendChild(script);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-center leading-relaxed">
            Parabéns pela escolha!
          </DialogTitle>
        </DialogHeader>
        <p className="text-muted-foreground text-center leading-relaxed mb-4">
          E é claro que como fundadora, você terá a melhor condição! Te avisaremos
          quando estiver disponível!
        </p>
        <div ref={containerRef} className="w-full min-h-[120px]">
          <div className="ml-embedded" data-form="tbPNHH"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
