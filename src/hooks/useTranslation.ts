import { useState } from "react";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  pt: {
    // Navigation
    "nav.features": "Recursos",
    "nav.pricing": "Preços",
    "nav.contact": "Contato",
    "nav.login": "Entrar",
    "nav.signup": "Cadastrar",

    // Hero Section
    "hero.title": "Gerencie suas atividades de forma",
    "hero.titleHighlight": "simples e intuitiva",
    "hero.subtitle": "O Importantist é o sistema de gestão de atividades que une simplicidade e eficiência. Organize seu dia a dia sem burocracia, focando no que realmente importa.",
    "hero.cta": "Comece gratuitamente",
    "hero.ctaSecondary": "Ver demonstração",

    // Problem Section
    "problem.title": "Cansado de sistemas complicados?",
    "problem.subtitle": "Os sistemas atuais são muito burocráticos e orientados às atividades, não ao seu dia a dia.",
    "problem.item1.title": "Muitos cliques",
    "problem.item1.desc": "Para adicionar uma simples atividade, você precisa de vários passos desnecessários.",
    "problem.item2.title": "Controle confuso",
    "problem.item2.desc": "Perde-se o foco no que precisa ser feito hoje ou nos próximos dias.",
    "problem.item3.title": "Atividades perdidas",
    "problem.item3.desc": "Tarefas não concluídas se acumulam sem distinção entre o que é realmente importante.",

    // Solution Section
    "solution.title": "A solução que você estava esperando",
    "solution.subtitle": "Desenvolvido para quem valoriza simplicidade e eficiência no dia a dia.",
    "solution.item1.title": "Orientado ao dia",
    "solution.item1.desc": "Veja claramente o que precisa ser feito hoje, amanhã ou em qualquer data específica.",
    "solution.item2.title": "Atividades recorrentes inteligentes",
    "solution.item2.desc": "O sistema identifica padrões e distingue entre tarefas que devem ou não continuar para o próximo dia.",
    "solution.item3.title": "Importação via Excel",
    "solution.item3.desc": "Crie atividades em lote importando planilhas. Perfeito para projetos e novos funcionários.",
    "solution.item4.title": "Gestão de equipes",
    "solution.item4.desc": "Visão clara do time com biblioteca de atividades para diferentes funções e níveis.",

    // Testimonials
    "testimonials.title": "O que nossos usuários dizem",
    "testimonials.item1": "Gostei, achei muito prático. Não gostei de outras ferramentas que testei e acabava usando o bloco de notas, mas essa ferramenta une o melhor de tudo.",
    "testimonials.item2": "Muito bom, com poucos cliques consigo ter um controle eficiente das minhas atividades.",
    "testimonials.item3": "Achei fantástico, simples e intuitivo. Um ponto muito legal é a gestão das atividades recorrentes, sinto que tenho uma rotina muito mais eficiente.",

    // CTA Section
    "cta.title": "Pronto para ter mais controle do seu tempo?",
    "cta.subtitle": "Comece hoje mesmo e descubra como é fácil organizar suas atividades de forma inteligente.",
    "cta.button": "Iniciar teste gratuito",
  },
  en: {
    // Navigation
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.login": "Login",
    "nav.signup": "Sign Up",

    // Hero Section
    "hero.title": "Manage your activities in a",
    "hero.titleHighlight": "simple and intuitive way",
    "hero.subtitle": "Importantist is the activity management system that combines simplicity and efficiency. Organize your daily routine without bureaucracy, focusing on what really matters.",
    "hero.cta": "Start for free",
    "hero.ctaSecondary": "View demo",

    // Problem Section
    "problem.title": "Tired of complicated systems?",
    "problem.subtitle": "Current systems are too bureaucratic and activity-oriented, not focused on your daily routine.",
    "problem.item1.title": "Too many clicks",
    "problem.item1.desc": "To add a simple activity, you need several unnecessary steps.",
    "problem.item2.title": "Confusing control",
    "problem.item2.desc": "You lose focus on what needs to be done today or in the coming days.",
    "problem.item3.title": "Lost activities",
    "problem.item3.desc": "Unfinished tasks accumulate without distinction between what's really important.",

    // Solution Section
    "solution.title": "The solution you've been waiting for",
    "solution.subtitle": "Designed for those who value simplicity and efficiency in their daily routine.",
    "solution.item1.title": "Day-oriented",
    "solution.item1.desc": "Clearly see what needs to be done today, tomorrow, or on any specific date.",
    "solution.item2.title": "Smart recurring activities",
    "solution.item2.desc": "The system identifies patterns and distinguishes between tasks that should or shouldn't continue to the next day.",
    "solution.item3.title": "Excel import",
    "solution.item3.desc": "Create activities in bulk by importing spreadsheets. Perfect for projects and new employees.",
    "solution.item4.title": "Team management",
    "solution.item4.desc": "Clear team overview with activity library for different roles and levels.",

    // Testimonials
    "testimonials.title": "What our users say",
    "testimonials.item1": "I liked it, found it very practical. I didn't like other tools I tested and ended up using notes, but this tool combines the best of everything.",
    "testimonials.item2": "Very good, with few clicks I can efficiently control my activities.",
    "testimonials.item3": "I found it fantastic, simple and intuitive. A really cool point is the management of recurring activities, I feel I have a much more efficient routine.",

    // CTA Section
    "cta.title": "Ready to have more control over your time?",
    "cta.subtitle": "Start today and discover how easy it is to organize your activities intelligently.",
    "cta.button": "Start free trial",
  },
};

export const useTranslation = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || key;
  };

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
  };
};