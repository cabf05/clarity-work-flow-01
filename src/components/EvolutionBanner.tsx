import { useTranslation } from "@/hooks/useTranslation";
import { Rocket, Sparkles } from "lucide-react";

export const EvolutionBanner = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 rounded-3xl p-8 md:p-12 text-center overflow-hidden border border-primary/20">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-6 left-6 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-6 right-6 w-20 h-20 bg-primary-glow/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 bg-primary/15 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6">
              <Rocket className="h-5 w-5" />
              <Sparkles className="h-4 w-4" />
              Em evolução contínua
              <Sparkles className="h-4 w-4" />
            </div>
            
            <p className="text-xl md:text-2xl font-semibold text-foreground leading-relaxed">
              {t("evolution.text")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};