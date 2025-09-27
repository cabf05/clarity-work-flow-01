import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="relative bg-card rounded-3xl p-8 md:p-16 text-center overflow-hidden border border-border shadow-elegant">
          {/* Background decoration */}
          <div className="absolute inset-0 gradient-primary opacity-5"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-glow/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Comece hoje mesmo
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("cta.title")}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("cta.subtitle")}
            </p>

            <Button size="lg" variant="hero" className="group">
              {t("cta.button")}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};