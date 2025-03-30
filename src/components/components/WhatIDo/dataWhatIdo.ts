import { camera, development, monitor } from "@/public/image";
import { StaticImageData } from "next/image";
import { supportedLocales } from "@/Manager/navigation";

export type Locale = (typeof supportedLocales)[number];

export interface ServiceProps {
  image: StaticImageData;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  linkText?: Record<Locale, string>;
  link?: string;
}

export const services: ServiceProps[] = [
  {
    image: monitor,
    subtitle: {
      en: "Design",
      fr: "Conception",
      de: "Design",
      it: "Design",
    },
    description: {
      en: "I create modern, stylish websites that look great and are easy to use on any device. I use a strategy that ensures I understand exactly what you want, so the final design meets your expectations.",
      fr: "Je crée des sites modernes et élégants qui sont agréables à utiliser sur tous les appareils. Ma stratégie garantit que je comprends exactement ce que vous souhaitez, afin que le design final réponde à vos attentes.",
      de: "Ich gestalte moderne, stilvolle Websites, die auf jedem Gerät großartig aussehen und einfach zu bedienen sind. Meine Strategie stellt sicher, dass ich genau verstehe, was Sie möchten, damit das endgültige Design Ihren Erwartungen entspricht.",
      it: "Creo siti web moderni e stilosi, facili da usare su qualsiasi dispositivo. Utilizzo una strategia che garantisce la comprensione precisa delle tue esigenze, affinché il design finale soddisfi le tue aspettative.",
    },
  },
  {
    image: development,
    subtitle: {
      en: "Website Development",
      fr: "Développement Web",
      de: "Webentwicklung",
      it: "Sviluppo Web",
    },
    description: {
      en: "Using Webflow or Next.js, I create fully responsive websites that work perfectly on any device, including mobile phones. My approach ensures your website is clean, fast, and provides a great user experience for all visitors. My backend system is planneed for my custmers to amange their website easy and keep it updated with google auth and easiest setup need to improve textes",
      fr: "Avec Webflow ou Next.js, je crée des sites entièrement responsives qui fonctionnent parfaitement sur tous les appareils, y compris les téléphones. Mon approche garantit un site propre, rapide et agréable à utiliser.",
      de: "Mit Webflow oder Next.js erstelle ich vollständig responsive Websites, die auf allen Geräten – auch Mobiltelefonen – perfekt funktionieren. Mein Ansatz sorgt für saubere, schnelle und benutzerfreundliche Seiten.",
      it: "Utilizzando Webflow o Next.js, realizzo siti completamente responsive che funzionano perfettamente su qualsiasi dispositivo, inclusi i telefoni. Il mio approccio garantisce un sito pulito, veloce e facile da usare per ogni visitatore.",
    },
  },
  {
    image: camera,
    subtitle: {
      en: "Photography",
      fr: "Photographie",
      de: "Fotografie",
      it: "Fotografia",
    },
    description: {
      en: "As a highly qualified photographer, I create images that speak for your business, improving your website to be more custom and trustworthy. See more at my",
      fr: "En tant que photographe qualifié, je crée des images qui reflètent votre activité, rendant votre site plus personnalisé et digne de confiance. Voir plus sur mon",
      de: "Als professioneller Fotograf erstelle ich Bilder, die Ihr Unternehmen widerspiegeln und Ihre Website individueller und vertrauenswürdiger machen. Mehr auf meiner",
      it: "Come fotografo professionista, creo immagini che raccontano la tua attività, rendendo il sito più personalizzato e affidabile. Scopri di più sul mio",
    },
    link: "https://artoflevanidze.com",
    linkText: {
      en: "photography website.",
      fr: "site photo.",
      de: "Fotowebsite.",
      it: "sito fotografico.",
    },
  },
];
