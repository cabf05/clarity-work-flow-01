import { useTranslation } from "@/hooks/useTranslation";
import { Button } from "@/components/ui/button";
import { Check, Mail, Heart } from "lucide-react";

export const PricingSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Individual Plan */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-elegant text-center relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                <Heart className="h-4 w-4 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-2">
              {t("pricing.individual.title")}
            </h3>
            
            <div className="mb-6">
              <span className="text-4xl font-bold text-primary">
                {t("pricing.individual.price")}
              </span>
            </div>
            
            <p className="text-muted-foreground mb-8">
              {t("pricing.individual.desc")}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Atividades ilimitadas</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Gestão de recorrências</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Importação via Excel</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">Visão diária e mensal</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              {t("hero.cta")}
            </Button>
          </div>

          {/* Teams Plan */}
          <div className="bg-card rounded-3xl p-8 border border-border shadow-elegant text-center relative overflow-hidden">
            <div className="absolute inset-0 gradient-primary opacity-5"></div>
            <div className="absolute top-4 right-4">
              <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
                <Mail className="h-4 w-4 text-secondary-foreground" />
              </div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-2">
                {t("pricing.teams.title")}
              </h3>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-secondary-foreground">
                  {t("pricing.teams.price")}
                </span>
              </div>
              
              <p className="text-muted-foreground mb-8">
                {t("pricing.teams.desc")}
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <span className="text-sm">Tudo do plano individual</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <span className="text-sm">Biblioteca de atividades por função</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <span className="text-sm">Gestão de equipes</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <span className="text-sm">Onboarding automático</span>
                </div>
                <div className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                  <span className="text-sm">Relatórios e analytics</span>
                </div>
              </div>

              <Button variant="secondary" className="w-full" size="lg">
                Entrar em contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};