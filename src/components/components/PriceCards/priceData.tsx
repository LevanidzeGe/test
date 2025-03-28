import {
  FaGlobe,
  FaCamera,
  FaCogs,
  FaProjectDiagram,
  FaEdit,
  FaTools,
  FaServer,
  FaCalendarCheck,
} from "react-icons/fa";
import { supportedLocales } from "@/Manager/navigation";

export type Locale = (typeof supportedLocales)[number];

export interface Feature {
  text: Record<Locale, string>;
  icon: JSX.Element;
}

export interface Plan {
  name: Record<Locale, string>;
  price?: string; // Made optional to accommodate plans with hidden prices
  subtitle: Record<Locale, string>;
  main: Feature[]; // Core offerings of the plan
  features: Feature[]; // Additional features included
  popular: boolean;
}

export const plans: Plan[] = [
  {
    name: {
      en: "Starter",
      fr: "Débutant",
    },
    price: "CHF 1,200",
    subtitle: {
      en: "Great for small businesses starting out",
      fr: "Idéal pour les petites entreprises débutantes",
    },
    main: [
      {
        text: {
          en: "Pre-created website",
          fr: "Site web basé sur un modèle",
        },
        icon: <FaEdit />,
      },
      {
        text: {
          en: "2 languages support",
          fr: "Support multilingue",
        },
        icon: <FaGlobe />,
      },
      {
        text: {
          en: "1 collection management",
          fr: "1 gestion de collection",
        },
        icon: <FaProjectDiagram />,
      },
    ],
    features: [
      {
        text: {
          en: "Blog/News/Project page",
          fr: "Page Blog/Actualités/Projets",
        },
        icon: <FaCogs />,
      },
      {
        text: {
          en: "Booking/contact form",
          fr: "Formulaire de réservation/contact",
        },
        icon: <FaCalendarCheck />,
      },
      {
        text: {
          en: "Hosting & domain setup",
          fr: "Hébergement & configuration du domaine",
        },
        icon: <FaServer />,
      },
      {
        text: {
          en: "Ongoing maintenance",
          fr: "Maintenance continue",
        },
        icon: <FaTools />,
      },
    ],
    popular: false,
  },
  {
    name: {
      en: "Pro",
      fr: "Pro",
    },
    // Price is intentionally omitted to keep it hidden
    price: "CHF 2,200",
    subtitle: {
      en: "Custom design with professional photography",
      fr: "Design personnalisé avec photographie professionnelle",
    },
    main: [
      {
        text: {
          en: "Custom website design",
          fr: "Design de site web personnalisé",
        },
        icon: <FaEdit />,
      },
      {
        text: {
          en: "Multilingual support",
          fr: "Support multilingue",
        },
        icon: <FaGlobe />,
      },
      {
        text: {
          en: "Onsite photography in Geneva (20+ photos)",
          fr: "Photographie sur site à Genève (20+ photos)",
        },
        icon: <FaCamera />,
      },
    ],
    features: [
      {
        text: {
          en: "2 collection management dashboard",
          fr: "2 tableau de bord de gestion de collection",
        },
        icon: <FaProjectDiagram />,
      },
      {
        text: {
          en: "Blog/News/Project page",
          fr: "Page Blog/Actualités/Projets",
        },
        icon: <FaCogs />,
      },
      {
        text: {
          en: "Booking/contact form",
          fr: "Formulaire de réservation/contact",
        },
        icon: <FaCalendarCheck />,
      },
      {
        text: {
          en: "Hosting & domain setup",
          fr: "Hébergement & configuration du domaine",
        },
        icon: <FaServer />,
      },
      {
        text: {
          en: "2h/month maintenance included",
          fr: "2h/mois de maintenance incluse",
        },
        icon: <FaTools />,
      },
    ],
    popular: true,
  },
  {
    name: {
      en: "Elite",
      fr: "Élite",
    },
    price: "Contact us",
    subtitle: {
      en: "Advanced features with double management dashboards",
      fr: "Fonctionnalités avancées avec doubles tableaux de bord de gestion",
    },
    main: [
      {
        text: {
          en: "Fully custom website design",
          fr: "Design de site web entièrement personnalisé",
        },
        icon: <FaEdit />,
      },
      {
        text: {
          en: "Multilingual support",
          fr: "Support multilingue",
        },
        icon: <FaGlobe />,
      },
      {
        text: {
          en: "Onsite photography in Geneva (40+ photos)",
          fr: "Photographie sur site à Genève (40+ photos)",
        },
        icon: <FaCamera />,
      },
    ],
    features: [
      {
        text: {
          en: " collection management dashboards",
          fr: " tableaux de bord de gestion de collection",
        },
        icon: <FaProjectDiagram />,
      },
      {
        text: {
          en: "Blog/News/Project page",
          fr: "Page Blog/Actualités/Projets",
        },
        icon: <FaCogs />,
      },
      {
        text: {
          en: "Booking/contact form",
          fr: "Formulaire de réservation/contact",
        },
        icon: <FaCalendarCheck />,
      },
      {
        text: {
          en: "Hosting & domain setup",
          fr: "Hébergement & configuration du domaine",
        },
        icon: <FaServer />,
      },
      {
        text: {
          en: "4h/month maintenance included",
          fr: "4h/mois de maintenance incluse",
        },
        icon: <FaTools />,
      },
    ],
    popular: false,
  },
];
