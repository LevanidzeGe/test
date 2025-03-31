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
      en: "The coaches are incredible, and my son has learned so much discipline and confidence. I highly recommend this club for any .",
      fr: "Les entraîneurs sont incroyables, et mon fils a beaucoup appris en discipline et en confiance. Je recommande vivement ce club à tous les .",
      de: "Die Trainer sind unglaublich, und mein Sohn hat so viel Disziplin und Selbstvertrauen gelernt. Ich kann diesen Club jedem Elternteil .",
      it: "Gli allenatori sono incredibili e mio figlio ha imparato tantissimo in termini di disciplina e fiducia. Consiglio vivamente questo club a tutti i genitori .",
      ge: "მწვრთნელები დაუჯერებელნი არიან, და ჩემმა შვილმა ბევრ რამეში გაიარა დისციპლინისა და თავდაჯერებულობის გაძლიერება. ნამდვილად გირჩევთ ამ კლუბს ნებისმიერი .",
    },
    image: image2,
    name: "Sophia Brown",
    caption: {
      en: "Mother of a 7-year-old",
      fr: "Maman d'un enfant de 7 ans",
      de: "Mutter eines 7-Jährigen",
      it: "Mamma di un bambino di 7 anni",
      ge: "7 წლის ბავშვის დედა",
    },
  },
  {
    stars: 4.8,
    reviews: {
      en: "My daughter has been training here for a year, and the improvement is remarkable. She’s stronger, more disciplined, and loves the community here.",
      fr: "Ma fille s'entraîne ici depuis un an, et les progrès sont remarquables. Elle est plus forte, plus disciplinée et adore la communauté ici.",
      de: "Meine Tochter trainiert seit einem Jahr hier, und die Fortschritte sind bemerkenswert. Sie ist stärker, disziplinierter und liebt die Gemeinschaft hier.",
      it: "Mia figlia si allena qui da un anno e i miglioramenti sono notevoli. È più forte, più disciplinata e ama la comunità.",
      ge: "ჩემი შვილი უკვე ერთი წელია ვარჯიშობს აქ და პროგრესი საოცარია. ის უფრო ძლიერია, მეტად დისციპლინირებული და უყვარს აქაური საზოგადოება.",
    },
    image: image1,
    name: "Michael Scott",
    caption: {
      en: "Father of a 10-year-old",
      fr: "Papa d'un enfant de 10 ans",
      de: "Vater eines 10-Jährigen",
      it: "Papà di un bambino di 10 anni",
      ge: "10 წლის ბავშვის მამა",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "My 5-year-old loves coming here every week. The instructors are so patient, and it’s amazing to see how much he enjoys the sport.",
      fr: "Mon enfant de 5 ans adore venir ici chaque semaine. Les instructeurs sont très patients, et c'est incroyable de voir à quel point il aime ce sport.",
      de: "Mein 5-jähriger Sohn liebt es, jede Woche hierher zu kommen. Die Trainer sind sehr geduldig, und es ist erstaunlich zu sehen, wie sehr er den Sport genießt.",
      it: "Il mio bambino di 5 anni adora venire qui ogni settimana. Gli istruttori sono così pazienti, ed è incredibile vedere quanto ami questo sport.",
      ge: "ჩემი 5 წლის შვილი ყოველ კვირას სიამოვნებით მოდის აქ. ინსტრუქტორები ძალიან მოთმინებით გამოირჩევიან და საოცარია, როგორ უყვარს სპორტი.",
    },
    image: image5,
    name: "Lisa Black",
    caption: {
      en: "Mother of a 5-year-old",
      fr: "Maman d'un enfant de 5 ans",
      de: "Mutter eines 5-Jährigen",
      it: "Mamma di un bambino di 5 anni",
      ge: "5 წლის ბავშვის დედა",
    },
  },
  {
    stars: 4.7,
    reviews: {
      en: "This club has helped my twins, aged 12, develop teamwork and respect. The tournaments are well-organized, and they’ve made lifelong friends here.",
      fr: "Ce club a aidé mes jumeaux de 12 ans à développer le travail d'équipe et le respect. Les tournois sont bien organisés, et ils se sont fait des amis pour la vie ici.",
      de: "Dieser Club hat meinen 12-jährigen Zwillingen geholfen, Teamarbeit und Respekt zu entwickeln. Die Turniere sind gut organisiert, und sie haben hier lebenslange Freunde gefunden.",
      it: "Questo club ha aiutato i miei gemelli di 12 anni a sviluppare il lavoro di squadra e il rispetto. I tornei sono ben organizzati e hanno fatto amicizie durature.",
      ge: "ამ კლუბმა ჩემმა 12 წლის ტყუპებს გუნდური მუშაობისა და პატივისცემის განვითარებაში დაეხმარა. ტურნირები კარგად ორგანიზებულია და მათ აქ ცხოვრებაში მეგობრები იპოვეს.",
    },
    image: image6,
    name: "Emily White",
    caption: {
      en: "Mother of 12-year-old twins",
      fr: "Maman de jumeaux de 12 ans",
      de: "Mutter von 12-jährigen Zwillingen",
      it: "Mamma di gemelli di 12 anni",
      ge: "12 წლის ტყუპების დედა",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "The coaches are incredible, and my son has learned so much discipline and confidence. I highly recommend this club for any .",
      fr: "Les entraîneurs sont incroyables, et mon fils a beaucoup appris en discipline et en confiance. Je recommande vivement ce club à tous les .",
      de: "Die Trainer sind unglaublich, und mein Sohn hat so viel Disziplin und Selbstvertrauen gelernt. Ich kann diesen Club jedem Elternteil .",
      it: "Gli allenatori sono incredibili e mio figlio ha imparato tantissimo in termini di disciplina e fiducia. Consiglio vivamente questo club a tutti i genitori .",
      ge: "მწვრთნელები დაუჯერებელნი არიან, და ჩემმა შვილმა ბევრ რამეში გაიარა დისციპლინისა და თავდაჯერებულობის გაძლიერება. ნამდვილად გირჩევთ ამ კლუბს ნებისმიერი .",
    },
    image: image2,
    name: "Sophia Brown",
    caption: {
      en: "Mother of a 7-year-old",
      fr: "Maman d'un enfant de 7 ans",
      de: "Mutter eines 7-Jährigen",
      it: "Mamma di un bambino di 7 anni",
      ge: "7 წლის ბავშვის დედა",
    },
  },
  {
    stars: 4.8,
    reviews: {
      en: "My daughter has been training here for a year, and the improvement is remarkable. She’s stronger, more disciplined, and loves the community here.",
      fr: "Ma fille s'entraîne ici depuis un an, et les progrès sont remarquables. Elle est plus forte, plus disciplinée et adore la communauté ici.",
      de: "Meine Tochter trainiert seit einem Jahr hier, und die Fortschritte sind bemerkenswert. Sie ist stärker, disziplinierter und liebt die Gemeinschaft hier.",
      it: "Mia figlia si allena qui da un anno e i miglioramenti sono notevoli. È più forte, più disciplinata e ama la comunità.",
      ge: "ჩემი შვილი უკვე ერთი წელია ვარჯიშობს აქ და პროგრესი საოცარია. ის უფრო ძლიერია, მეტად დისციპლინირებული და უყვარს აქაური საზოგადოება.",
    },
    image: image4,
    name: "Michael Scott",
    caption: {
      en: "Father of a 10-year-old",
      fr: "Papa d'un enfant de 10 ans",
      de: "Vater eines 10-Jährigen",
      it: "Papà di un bambino di 10 anni",
      ge: "10 წლის ბავშვის მამა",
    },
  },
  {
    stars: 5,
    reviews: {
      en: "My 5-year-old loves coming here every week. The instructors are so patient, and it’s amazing to see how much he enjoys the sport.",
      fr: "Mon enfant de 5 ans adore venir ici chaque semaine. Les instructeurs sont très patients, et c'est incroyable de voir à quel point il aime ce sport.",
      de: "Mein 5-jähriger Sohn liebt es, jede Woche hierher zu kommen. Die Trainer sind sehr geduldig, und es ist erstaunlich zu sehen, wie sehr er den Sport genießt.",
      it: "Il mio bambino di 5 anni adora venire qui ogni settimana. Gli istruttori sono così pazienti, ed è incredibile vedere quanto ami questo sport.",
      ge: "ჩემი 5 წლის შვილი ყოველ კვირას სიამოვნებით მოდის აქ. ინსტრუქტორები ძალიან მოთმინებით გამოირჩევიან და საოცარია, როგორ უყვარს სპორტი.",
    },
    image: image5,
    name: "Lisa Black",
    caption: {
      en: "Mother of a 5-year-old",
      fr: "Maman d'un enfant de 5 ans",
      de: "Mutter eines 5-Jährigen",
      it: "Mamma di un bambino di 5 anni",
      ge: "5 წლის ბავშვის დედა",
    },
  },
  {
    stars: 4.7,
    reviews: {
      en: "This club has helped my twins, aged 12, develop teamwork and respect. The tournaments are well-organized, and they’ve made lifelong friends here.",
      fr: "Ce club a aidé mes jumeaux de 12 ans à développer le travail d'équipe et le respect. Les tournois sont bien organisés, et ils se sont fait des amis pour la vie ici.",
      de: "Dieser Club hat meinen 12-jährigen Zwillingen geholfen, Teamarbeit und Respekt zu entwickeln. Die Turniere sind gut organisiert, und sie haben hier lebenslange Freunde gefunden.",
      it: "Questo club ha aiutato i miei gemelli di 12 anni a sviluppare il lavoro di squadra e il rispetto. I tornei sono ben organizzati e hanno fatto amicizie durature.",
      ge: "ამ კლუბმა ჩემმა 12 წლის ტყუპებს გუნდური მუშაობისა და პატივისცემის განვითარებაში დაეხმარა. ტურნირები კარგად ორგანიზებულია და მათ აქ ცხოვრებაში მეგობრები იპოვეს.",
    },
    image: image6,
    name: "Emily White",
    caption: {
      en: "Mother of 12-year-old twins",
      fr: "Maman de jumeaux de 12 ans",
      de: "Mutter von 12-jährigen Zwillingen",
      it: "Mamma di gemelli di 12 anni",
      ge: "12 წლის ტყუპების დედა",
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
