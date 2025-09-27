import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useTranslation } from "@/hooks/useTranslation";

export const Navbar = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">I</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Importantist
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t("nav.features")}
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t("nav.pricing")}
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-smooth">
              {t("nav.contact")}
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <LanguageSelector 
              currentLanguage={currentLanguage} 
              onLanguageChange={changeLanguage} 
            />
            <Button variant="ghost" size="sm">
              {t("nav.login")}
            </Button>
            <Button size="sm">
              {t("nav.signup")}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};