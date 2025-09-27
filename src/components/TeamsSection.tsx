import { useTranslation } from "@/hooks/useTranslation";
import { Library, Zap, UserPlus, BarChart, Building } from "lucide-react";

export const TeamsSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Library,
      title: t("teams.feature1"),
      description: t("teams.feature1.desc"),
    },
    {
      icon: Zap,
      title: t("teams.feature2"),
      description: t("teams.feature2.desc"),
    },
    {
      icon: UserPlus,
      title: t("teams.feature3"),
      description: t("teams.feature3.desc"),
    },
    {
      icon: BarChart,
      title: t("teams.feature4"),
      description: t("teams.feature4.desc"),
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/80 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building className="h-4 w-4" />
            Para empresas
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("teams.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("teams.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-6 p-8 rounded-2xl border border-border hover:border-secondary/40 transition-smooth shadow-elegant hover:shadow-glow group bg-card">
              <div className="w-14 h-14 bg-secondary/20 rounded-2xl flex items-center justify-center group-hover:bg-secondary/30 transition-smooth flex-shrink-0">
                <feature.icon className="h-7 w-7 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};