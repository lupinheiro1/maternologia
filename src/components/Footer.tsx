import { Instagram, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl font-semibold text-primary mb-4 block">
              Maternologia
            </span>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Criando a melhor maternidade possível para cada mulher.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:suporte@maternologia.com.br"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                suporte@maternologia.com.br
              </a>
              <a 
                href="https://instagram.com/maternologia_luiza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <Instagram size={16} />
                @maternologia_luiza
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-4">Links</h4>
            <nav className="space-y-2">
              <a href="#sobre" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Sobre
              </a>
              <a href="#cursos" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Cursos
              </a>
              <a href="#newsletter" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Newsletter
              </a>
              <a href="#blog" className="block text-background/70 hover:text-primary transition-colors text-sm">
                Blog
              </a>
            </nav>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-background/10 pt-8">
          <p className="text-background/50 text-xs leading-relaxed mb-6 max-w-3xl">
            <strong>Disclaimer:</strong> O conteúdo deste site não substitui orientação médica. 
            Ele foi criado por uma mãe, para outras mães, com base em vivência real, estudo e muito amor.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm flex items-center gap-1">
              Feito com <Heart size={14} className="text-primary" /> por Luiza Pinheiro
            </p>
            <p className="text-background/50 text-sm">
              © {new Date().getFullYear()} Maternologia. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
