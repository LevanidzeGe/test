import image1 from "@/public/images/testimonial/1-man.png";
import image2 from "@/public/images/testimonial/2-girl.png";
import image4 from "@/public/images/testimonial/4-man.png";

import { StaticImageData } from "next/image";
interface teamDataProps {
  description: {
    [key: string]: string;
  };
  image: StaticImageData; // Correct Type
  name: string;
  email: string;
  role: {
    [key: string]: string;
  };
}

export const ourTeamData: teamDataProps[] = [
  {
    image: image1,
    name: "Sophia Brown",
    email: "levanydze@gmail.com",
    role: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
    description: {
      en: "The renovation team is incredible! They transformed our outdated kitchen into a modern masterpiece. I highly recommend their services to anyone looking for quality work.",
      fr: "L'équipe de rénovation est incroyable ! Ils ont transformé notre cuisine démodée en un chef-d'œuvre moderne. Je recommande vivement leurs services à tous ceux qui recherchent un travail de qualité.",
      de: "Das Renovierungsteam ist unglaublich! Sie haben unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Ich kann ihre Dienstleistungen jedem empfehlen, der nach qualitativ hochwertiger Arbeit sucht.",
      it: "Il team di ristrutturazione è incredibile! Hanno trasformato la nostra cucina datata in un capolavoro moderno. Consiglio vivamente i loro servizi a chiunque cerchi un lavoro di qualità.",
      ge: "რემონტის გუნდი დაუჯერებელია! მათ ჩვენი მოძველებული სამზარეულო თანამედროვე შედევრად გადააქციეს. გირჩევთ მათ სერვისებს ნებისმიერისთვის, ვინც ხარისხიან მუშაობას ეძებს.",
    },
  },
  {
    image: image2,
    name: "Sophia Brown",
    email: "levanydze@gmail.com",
    role: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
    description: {
      en: "The renovation team is incredible! They transformed our outdated kitchen into a modern masterpiece. I highly recommend their services to anyone looking for quality work.",
      fr: "L'équipe de rénovation est incroyable ! Ils ont transformé notre cuisine démodée en un chef-d'œuvre moderne. Je recommande vivement leurs services à tous ceux qui recherchent un travail de qualité.",
      de: "Das Renovierungsteam ist unglaublich! Sie haben unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Ich kann ihre Dienstleistungen jedem empfehlen, der nach qualitativ hochwertiger Arbeit sucht.",
      it: "Il team di ristrutturazione è incredibile! Hanno trasformato la nostra cucina datata in un capolavoro moderno. Consiglio vivamente i loro servizi a chiunque cerchi un lavoro di qualità.",
      ge: "რემონტის გუნდი დაუჯერებელია! მათ ჩვენი მოძველებული სამზარეულო თანამედროვე შედევრად გადააქციეს. გირჩევთ მათ სერვისებს ნებისმიერისთვის, ვინც ხარისხიან მუშაობას ეძებს.",
    },
  },
  {
    image: image4,
    name: "Sophia Brown",
    email: "levanydze@gmail.com",
    role: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
    description: {
      en: "The renovation team is incredible! They transformed our outdated kitchen into a modern masterpiece. I highly recommend their services to anyone looking for quality work.",
      fr: "L'équipe de rénovation est incroyable ! Ils ont transformé notre cuisine démodée en un chef-d'œuvre moderne. Je recommande vivement leurs services à tous ceux qui recherchent un travail de qualité.",
      de: "Das Renovierungsteam ist unglaublich! Sie haben unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Ich kann ihre Dienstleistungen jedem empfehlen, der nach qualitativ hochwertiger Arbeit sucht.",
      it: "Il team di ristrutturazione è incredibile! Hanno trasformato la nostra cucina datata in un capolavoro moderno. Consiglio vivamente i loro servizi a chiunque cerchi un lavoro di qualità.",
      ge: "რემონტის გუნდი დაუჯერებელია! მათ ჩვენი მოძველებული სამზარეულო თანამედროვე შედევრად გადააქციეს. გირჩევთ მათ სერვისებს ნებისმიერისთვის, ვინც ხარისხიან მუშაობას ეძებს.",
    },
  },
];
