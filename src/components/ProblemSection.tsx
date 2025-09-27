import { useTranslation } from "@/hooks/useTranslation";
import { AlertCircle, MousePointer, Calendar, Clock } from "lucide-react";

export const ProblemSection = () => {
  const { t } = useTranslation();

  const problems = [
    {
      icon: MousePointer,
      title: t("problem.item1.title"),
      description: t("problem.item1.desc"),
    },
    {
      icon: Calendar,
      title: t("problem.item2.title"),
      description: t("problem.item2.desc"),
    },
    {
      icon: Clock,
      title: t("problem.item3.title"),
      description: t("problem.item3.desc"),
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertCircle className="h-4 w-4" />
            Problemas atuais
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("problem.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("problem.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-destructive/10 rounded-2xl flex items-center justify-center group-hover:bg-destructive/20 transition-smooth">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};