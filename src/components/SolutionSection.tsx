import { useTranslation } from "@/hooks/useTranslation";
import { CheckCircle, Calendar, RotateCcw, FileSpreadsheet, Users } from "lucide-react";

export const SolutionSection = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      icon: Calendar,
      title: t("solution.item1.title"),
      description: t("solution.item1.desc"),
    },
    {
      icon: RotateCcw,
      title: t("solution.item2.title"),
      description: t("solution.item2.desc"),
    },
    {
      icon: FileSpreadsheet,
      title: t("solution.item3.title"),
      description: t("solution.item3.desc"),
    },
    {
      icon: Users,
      title: t("solution.item4.title"),
      description: t("solution.item4.desc"),
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="h-4 w-4" />
            Nossa solução
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("solution.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("solution.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {solutions.map((solution, index) => (
            <div key={index} className="flex gap-4 p-6 rounded-2xl border border-border hover:border-primary/20 transition-smooth shadow-elegant hover:shadow-glow group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-smooth flex-shrink-0">
                <solution.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};