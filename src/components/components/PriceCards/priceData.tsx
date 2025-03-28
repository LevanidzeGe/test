import {
  FaGlobe,
  FaCamera,
  FaCogs,
  FaProjectDiagram,
  FaEdit,
  FaTools,
  FaServer,
  FaCalendarCheck,
  FaTimesCircle,
} from "react-icons/fa";
import { supportedLocales } from "@/Manager/navigation";

export type Locale = (typeof supportedLocales)[number];

export interface Feature {
  text: Record<Locale, string>;
  icon: JSX.Element;
  available: boolean;
}

export interface Plan {
  id: string;
  name: Record<Locale, string>;
  price?: string;
  salePrice?: string;
  subtitle: Record<Locale, string>;
  main: Feature[];
  features: Feature[];
  popular: boolean;
}

const unavailable = (text: Record<Locale, string>): Feature => ({
  text,
  icon: <FaTimesCircle color="var(--red1)" />,
  available: false,
});

const available = (
  icon: JSX.Element,
  text: Record<Locale, string>
): Feature => ({
  icon,
  text,
  available: true,
});

export const plans: Plan[] = [
  {
    id: "starter",
    name: { en: "Starter", fr: "Débutant" },
    price: "CHF 1,200",
    salePrice: "CHF 800",
    subtitle: {
      en: "Great for small businesses starting out",
      fr: "Idéal pour les petites entreprises débutantes",
    },
    main: [
      available(<FaEdit />, {
        en: "Pre-created website",
        fr: "Site web préconçu",
      }),
      available(<FaGlobe />, {
        en: "2 languages support",
        fr: "Support en 2 langues",
      }),

      unavailable({ en: "Onsite photographer", fr: "Photographe sur site" }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "1 collection management",
        fr: "1 gestion de collection",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Project page",
        fr: "Page Blog/Actualités/Projets",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
      }),
      available(<FaTools />, {
        en: "Ongoing maintenance",
        fr: "Maintenance continue",
      }),
    ],
    popular: false,
  },
  {
    id: "pro",
    name: { en: "Pro", fr: "Pro" },
    price: "CHF 2,200",
    salePrice: "CHF 1,500",
    subtitle: {
      en: "Custom design with professional photography",
      fr: "Design personnalisé avec photographie professionnelle",
    },
    main: [
      available(<FaEdit />, {
        en: "Custom website design",
        fr: "Design de site personnalisé",
      }),
      available(<FaGlobe />, {
        en: "Multilingual support",
        fr: "Support multilingue",
      }),
      available(<FaCamera />, {
        en: "Onsite photographer 4hr",
        fr: "Photographe sur site 4h",
      }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "2 collection management dashboards",
        fr: "2 tableaux de bord",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Project page",
        fr: "Page Blog/Actualités/Projets",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
      }),
      available(<FaTools />, {
        en: "Ongoing maintenance",
        fr: "maintenance",
      }),
    ],
    popular: true,
  },
  {
    id: "elite",
    name: { en: "Elite", fr: "Élite" },
    subtitle: {
      en: "Advanced features and premium customization",
      fr: "Fonctionnalités avancées et personnalisation premium",
    },
    main: [
      available(<FaEdit />, {
        en: "Fully custom website design",
        fr: "Design entièrement personnalisé",
      }),
      available(<FaGlobe />, {
        en: "Unlimited multilingual support",
        fr: "Support multilingue",
      }),
      available(<FaCamera />, {
        en: "Onsite photographer",
        fr: "hotographe sur site",
      }),
    ],
    features: [
      available(<FaProjectDiagram />, {
        en: "Multiple dashboards",
        fr: "Tableaux de bord multiples",
      }),
      available(<FaCogs />, {
        en: "Blog/News/Project page",
        fr: "Page Blog/Actualités/Projets",
      }),
      available(<FaCalendarCheck />, {
        en: "Booking/contact form",
        fr: "Formulaire de contact/réservation",
      }),
      available(<FaServer />, {
        en: "Hosting & domain setup",
        fr: "Hébergement & domaine",
      }),
      available(<FaTools />, {
        en: "month maintenance included",
        fr: "mois de maintenance incluse",
      }),
    ],
    popular: false,
  },
];
