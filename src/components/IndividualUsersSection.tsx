import { useTranslation } from "@/hooks/useTranslation";
import { BookOpen, RefreshCw, Eye, User } from "lucide-react";

export const IndividualUsersSection = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: BookOpen,
      title: t("individual.benefit1"),
      description: t("individual.benefit1.desc"),
    },
    {
      icon: RefreshCw,
      title: t("individual.benefit2"),
      description: t("individual.benefit2.desc"),
    },
    {
      icon: Eye,
      title: t("individual.benefit3"),
      description: t("individual.benefit3.desc"),
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <User className="h-4 w-4" />
            Uso pessoal
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("individual.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("individual.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};