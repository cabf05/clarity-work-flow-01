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

    // Individual Users Section
    "individual.title": "Para Usuários Individuais",
    "individual.subtitle": "Ideal para quem usa caderno, agenda ou bloco de notas e quer algo mais prático sem complicações.",
    "individual.benefit1": "Simplicidade do papel",
    "individual.benefit1.desc": "Mantenha a facilidade que você já conhece, mas com os benefícios digitais.",
    "individual.benefit2": "Sem retrabalho",
    "individual.benefit2.desc": "Tarefas não concluídas passam automaticamente para o próximo dia quando necessário.",
    "individual.benefit3": "Organização visual",
    "individual.benefit3.desc": "Veja tudo de forma clara sem excesso de informações visuais.",

    // Teams Section  
    "teams.title": "Para Times e Empresas",
    "teams.subtitle": "Potencialize sua equipe com gestão inteligente de atividades e onboarding acelerado.",
    "teams.feature1": "Biblioteca de atividades",
    "teams.feature1.desc": "Acesso a biblioteca de atividades recorrentes por função: administrativo, financeiro, contábil, controladoria e mais.",
    "teams.feature2": "Estrutura que ganha vida",
    "teams.feature2.desc": "Estrutura de papéis e responsabilidades que sai do papel e se torna atividades práticas no dia a dia.",
    "teams.feature3": "Onboarding rápido",
    "teams.feature3.desc": "Configure todas as atividades de rotina para novos funcionários em poucos cliques.",
    "teams.feature4": "Visão de gestão",
    "teams.feature4.desc": "Acompanhe como cada membro e time específico está performando em suas atividades.",

    // Pricing Section
    "pricing.title": "Preços Simples e Transparentes",
    "pricing.individual.title": "Uso Pessoal",
    "pricing.individual.price": "Gratuito",
    "pricing.individual.desc": "Para quem quer organizar suas atividades pessoais",
    "pricing.teams.title": "Times e Empresas",
    "pricing.teams.price": "Entre em contato",
    "pricing.teams.desc": "Solução completa para equipes com biblioteca de atividades",

    // Evolution Banner
    "evolution.text": "Estamos só no começo. Novas funcionalidades já estão a caminho, sempre com foco em simplicidade e eficiência.",

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

    // Individual Users Section
    "individual.title": "For Individual Users",
    "individual.subtitle": "Perfect for those who use notebooks, planners or note apps and want something more practical without complications.",
    "individual.benefit1": "Paper simplicity",
    "individual.benefit1.desc": "Keep the ease you already know, but with digital benefits.",
    "individual.benefit2": "No rework",
    "individual.benefit2.desc": "Unfinished tasks automatically move to the next day when necessary.",
    "individual.benefit3": "Visual organization",
    "individual.benefit3.desc": "See everything clearly without visual information overload.",

    // Teams Section
    "teams.title": "For Teams and Companies",
    "teams.subtitle": "Empower your team with intelligent activity management and accelerated onboarding.",
    "teams.feature1": "Activity library",
    "teams.feature1.desc": "Access to recurring activity library by function: administrative, financial, accounting, controlling and more.",
    "teams.feature2": "Structure that comes alive",
    "teams.feature2.desc": "Role and responsibility structure that leaves paper and becomes practical daily activities.",
    "teams.feature3": "Quick onboarding",
    "teams.feature3.desc": "Set up all routine activities for new employees in just a few clicks.",
    "teams.feature4": "Management view",
    "teams.feature4.desc": "Track how each member and specific team is performing in their activities.",

    // Pricing Section
    "pricing.title": "Simple and Transparent Pricing",
    "pricing.individual.title": "Personal Use",
    "pricing.individual.price": "Free",
    "pricing.individual.desc": "For those who want to organize their personal activities",
    "pricing.teams.title": "Teams and Companies",
    "pricing.teams.price": "Contact us",
    "pricing.teams.desc": "Complete solution for teams with activity library",

    // Evolution Banner
    "evolution.text": "We're just getting started. New features are already on the way, always focusing on simplicity and efficiency.",

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