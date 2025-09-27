import { useTranslation } from "@/hooks/useTranslation";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      text: t("testimonials.item1"),
      author: "Maria S.",
      role: "Gerente de Projetos",
    },
    {
      text: t("testimonials.item2"),
      author: "João P.",
      role: "Empresário",
    },
    {
      text: t("testimonials.item3"),
      author: "Ana L.",
      role: "Consultora",
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("testimonials.title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-2xl border border-border shadow-elegant hover:shadow-glow transition-smooth">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <Quote className="h-6 w-6 text-primary/30 mb-4" />
              
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};