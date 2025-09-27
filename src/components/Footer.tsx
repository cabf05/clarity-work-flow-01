import { useTranslation } from "@/hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Importantist
            </span>
          </div>

          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <a href="#privacy" className="hover:text-foreground transition-smooth">
              Política de Privacidade
            </a>
            <a href="#terms" className="hover:text-foreground transition-smooth">
              Termos de Uso
            </a>
            <a href="#contact" className="hover:text-foreground transition-smooth">
              Contato
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2024 Importantist. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};