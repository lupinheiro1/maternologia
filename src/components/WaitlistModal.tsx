import { useEffect, useState } from "react";
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
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    // Load MailerLite script once globally
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

  useEffect(() => {
    if (open) {
      // Generate new key to force React to recreate the element
      setRefreshKey(Date.now());

      // Multiple refresh attempts with progressive delays
      const timeouts = [200, 500, 1000].map((delay) =>
        setTimeout(() => {
          if ((window as any).ml) {
            (window as any).ml("refresh");
          }
        }, delay)
      );

      return () => {
        timeouts.forEach(clearTimeout);
      };
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
        <div key={refreshKey} className="w-full">
          <div className="ml-embedded" data-form="tbPNHH"></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
