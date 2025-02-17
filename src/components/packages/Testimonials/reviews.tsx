import image1 from "@/public/images/testimonial/1-man.png";
import image2 from "@/public/images/testimonial/2-girl.png";
import image3 from "@/public/images/testimonial/3-man.png";
import image4 from "@/public/images/testimonial/4-man.png";
import image5 from "@/public/images/testimonial/5-girl.png";
import image6 from "@/public/images/testimonial/6-girl.png";
import image7 from "@/public/images/testimonial/7-man.png";
import image8 from "@/public/images/testimonial/8-man.png";

import { StaticImageData } from "next/image";
interface reviewsDataProps {
  stars: number;
  reviews: {
    [key: string]: string;
  };
  image: StaticImageData; // Correct Type
  name: string;
  caption?: {
    [key: string]: string;
  };
}

export const reviewsData: reviewsDataProps[] = [
  {
    stars: 5,
    reviews: {
      en: "The renovation team is incredible! They transformed our outdated kitchen into a modern masterpiece. I highly recommend their services to anyone looking for quality work.",
      fr: "L'équipe de rénovation est incroyable ! Ils ont transformé notre cuisine démodée en un chef-d'œuvre moderne. Je recommande vivement leurs services à tous ceux qui recherchent un travail de qualité.",
      de: "Das Renovierungsteam ist unglaublich! Sie haben unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Ich kann ihre Dienstleistungen jedem empfehlen, der nach qualitativ hochwertiger Arbeit sucht.",
      it: "Il team di ristrutturazione è incredibile! Hanno trasformato la nostra cucina datata in un capolavoro moderno. Consiglio vivamente i loro servizi a chiunque cerchi un lavoro di qualità.",
      ge: "რემონტის გუნდი დაუჯერებელია! მათ ჩვენი მოძველებული სამზარეულო თანამედროვე შედევრად გადააქციეს. გირჩევთ მათ სერვისებს ნებისმიერისთვის, ვინც ხარისხიან მუშაობას ეძებს.",
    },
    image: image2,
    name: "Sophia Brown",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 4.8,
    reviews: {
      en: "We hired them for flooring and painting, and the results were stunning. The team was professional, punctual, and paid attention to every detail.",
      fr: "Nous les avons engagés pour le revêtement de sol et la peinture, et les résultats étaient époustouflants. L'équipe était professionnelle, ponctuelle et a fait attention à chaque détail.",
      de: "Wir haben sie für Bodenbeläge und Malerarbeiten engagiert, und die Ergebnisse waren atemberaubend. Das Team war professionell, pünktlich und hat auf jedes Detail geachtet.",
      it: "Li abbiamo assunti per la pavimentazione e la pittura, e i risultati sono stati straordinari. Il team è stato professionale, puntuale e ha prestato attenzione ad ogni dettaglio.",
      ge: "მათ იატაკის დასაფარად და საღებავის სამუშაოებისთვის დავიქირავეთ, და შედეგები გამორჩეული იყო. გუნდი პროფესიონალური, პუნქტუალური იყო და ყველა დეტალს აქცევდა ყურადღებას.",
    },
    image: image1,
    name: "Michael Scott",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "The team did an amazing job assembling our furniture and installing wallpaper. They were patient, skilled, and left our home looking beautiful.",
      fr: "L'équipe a fait un travail incroyable en assemblant nos meubles et en installant le papier peint. Ils étaient patients, compétents et ont laissé notre maison magnifique.",
      de: "Das Team hat einen großartigen Job gemacht, indem es unsere Möbel zusammengebaut und die Tapeten installiert hat. Sie waren geduldig, geschickt und haben unser Zuhause wunderschön hinterlassen.",
      it: "Il team ha fatto un lavoro fantastico assemblando i nostri mobili e installando la carta da parati. Erano pazienti, abili e hanno lasciato la nostra casa bellissima.",
      ge: "გუნდმა შესანიშნავად შეასრულა ჩვენი ავეჯის შეკრება და ფონის დაგება. ისინი მოთმინებული, უნარიანი იყვნენ და ჩვენს სახლს ლამაზად გამოიყურებოდა.",
    },
    image: image5,
    name: "Lisa Black",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 4.7,
    reviews: {
      en: "They renovated our entire living room, and we couldn’t be happier. The team was efficient, friendly, and delivered beyond our expectations.",
      fr: "Ils ont rénové tout notre salon, et nous ne pourrions pas être plus heureux. L'équipe était efficace, sympathique et a dépassé nos attentes.",
      de: "Sie haben unser gesamtes Wohnzimmer renoviert, und wir könnten nicht glücklicher sein. Das Team war effizient, freundlich und hat unsere Erwartungen übertroffen.",
      it: "Hanno ristrutturato il nostro intero soggiorno, e non potremmo essere più felici. Il team è stato efficiente, amichevole e ha superato le nostre aspettative.",
      ge: "მათ მთელი ჩვენი მისაღები გაარემონტეს და უფრო ბედნიერები ვერ ვიქნებოდით. გუნდი ეფექტური, მეგობრული იყო და ჩვენი მოლოდინი გადააჭარბა.",
    },
    image: image6,
    name: "Emily White",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "The renovation team is incredible! They transformed our outdated kitchen into a modern masterpiece. I highly recommend their services to anyone looking for quality work.",
      fr: "L'équipe de rénovation est incroyable ! Ils ont transformé notre cuisine démodée en un chef-d'œuvre moderne. Je recommande vivement leurs services à tous ceux qui recherchent un travail de qualité.",
      de: "Das Renovierungsteam ist unglaublich! Sie haben unsere veraltete Küche in ein modernes Meisterwerk verwandelt. Ich kann ihre Dienstleistungen jedem empfehlen, der nach qualitativ hochwertiger Arbeit sucht.",
      it: "Il team di ristrutturazione è incredibile! Hanno trasformato la nostra cucina datata in un capolavoro moderno. Consiglio vivamente i loro servizi a chiunque cerchi un lavoro di qualità.",
      ge: "რემონტის გუნდი დაუჯერებელია! მათ ჩვენი მოძველებული სამზარეულო თანამედროვე შედევრად გადააქციეს. გირჩევთ მათ სერვისებს ნებისმიერისთვის, ვინც ხარისხიან მუშაობას ეძებს.",
    },
    image: image2,
    name: "Sophia Brown",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 4.8,
    reviews: {
      en: "We hired them for flooring and painting, and the results were stunning. The team was professional, punctual, and paid attention to every detail.",
      fr: "Nous les avons engagés pour le revêtement de sol et la peinture, et les résultats étaient époustouflants. L'équipe était professionnelle, ponctuelle et a fait attention à chaque détail.",
      de: "Wir haben sie für Bodenbeläge und Malerarbeiten engagiert, und die Ergebnisse waren atemberaubend. Das Team war professionell, pünktlich und hat auf jedes Detail geachtet.",
      it: "Li abbiamo assunti per la pavimentazione e la pittura, e i risultati sono stati straordinari. Il team è stato professionale, puntuale e ha prestato attenzione ad ogni dettaglio.",
      ge: "მათ იატაკის დასაფარად და საღებავის სამუშაოებისთვის დავიქირავეთ, და შედეგები გამორჩეული იყო. გუნდი პროფესიონალური, პუნქტუალური იყო და ყველა დეტალს აქცევდა ყურადღებას.",
    },
    image: image4,
    name: "Michael Scott",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "The team did an amazing job assembling our furniture and installing wallpaper. They were patient, skilled, and left our home looking beautiful.",
      fr: "L'équipe a fait un travail incroyable en assemblant nos meubles et en installant le papier peint. Ils étaient patients, compétents et ont laissé notre maison magnifique.",
      de: "Das Team hat einen großartigen Job gemacht, indem es unsere Möbel zusammengebaut und die Tapeten installiert hat. Sie waren geduldig, geschickt und haben unser Zuhause wunderschön hinterlassen.",
      it: "Il team ha fatto un lavoro fantastico assemblando i nostri mobili e installando la carta da parati. Erano pazienti, abili e hanno lasciato la nostra casa bellissima.",
      ge: "გუნდმა შესანიშნავად შეასრულა ჩვენი ავეჯის შეკრება და ფონის დაგება. ისინი მოთმინებული, უნარიანი იყვნენ და ჩვენს სახლს ლამაზად გამოიყურებოდა.",
    },
    image: image5,
    name: "Lisa Black",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
  {
    stars: 4.7,
    reviews: {
      en: "They renovated our entire living room, and we couldn’t be happier. The team was efficient, friendly, and delivered beyond our expectations.",
      fr: "Ils ont rénové tout notre salon, et nous ne pourrions pas être plus heureux. L'équipe était efficace, sympathique et a dépassé nos attentes.",
      de: "Sie haben unser gesamtes Wohnzimmer renoviert, und wir könnten nicht glücklicher sein. Das Team war effizient, freundlich und hat unsere Erwartungen übertroffen.",
      it: "Hanno ristrutturato il nostro intero soggiorno, e non potremmo essere più felici. Il team è stato efficiente, amichevole e ha superato le nostre aspettative.",
      ge: "მათ მთელი ჩვენი მისაღები გაარემონტეს და უფრო ბედნიერები ვერ ვიქნებოდით. გუნდი ეფექტური, მეგობრული იყო და ჩვენი მოლოდინი გადააჭარბა.",
    },
    image: image6,
    name: "Emily White",
    caption: {
      en: "Homeowner",
      fr: "Propriétaire",
      de: "Hausbesitzer",
      it: "Proprietario di casa",
      ge: "მესაკუთრე",
    },
  },
];

interface StarIconProps {
  filled: boolean;
  half?: boolean;
}

export const StarIcon: React.FC<StarIconProps> = ({ filled, half }) => (
  <svg
    width="20"
    height="17"
    viewBox="0 0 20 17"
    fill="none"
    role="img"
    aria-label="Star icon"
  >
    <defs>
      <linearGradient id="halfGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="50%" style={{ stopColor: "#FFBB00", stopOpacity: 1 }} />
        <stop
          offset="50%"
          style={{ stopColor: "transparent", stopOpacity: 1 }}
        />
      </linearGradient>
    </defs>
    <path
      d="M9.75653 13.6975L14.4883 16.2075C15.3548 16.6675 16.4152 15.9875 16.1872 15.1275L14.933 10.4075L19.1175 7.2275C19.8814 6.6475 19.4709 5.5475 18.4676 5.4775L12.9605 5.0675L10.8055 0.6075C10.4178 -0.2025 9.09522 -0.2025 8.70756 0.6075L6.5526 5.0575L1.0455 5.4675C0.0421383 5.5375 -0.368329 6.6375 0.395596 7.2175L4.58008 10.3975L3.32588 15.1175C3.09784 15.9775 4.15821 16.6575 5.02475 16.1975L9.75653 13.6975Z"
      fill={filled ? "#FFBB00" : half ? "url(#halfGradient)" : "none"}
      stroke={filled ? "none" : "#FFBB00"}
      strokeWidth={filled ? "0" : "1.4"} /* Double border for empty stars */
    />
  </svg>
);
