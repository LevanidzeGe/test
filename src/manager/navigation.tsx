export const supportedLocales = ["fr", "en", "de", "it", "ge"];
export const defaultLocale = supportedLocales[0];

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
}

export const companyRoute = "geo-judo-geneva-2025-04-16";

export const collectionRoute1 = "events";
export const collectionRoute2 = "";

export const dynamicPageRoute1 = "events";
export const dynamicPageRoute2 = "";

export const dynamicSitemap: Record<string, string> = {
  [collectionRoute1]: dynamicPageRoute1,
  [collectionRoute2]: dynamicPageRoute2,
};

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Main", url: "/" },
    { title: "Events", url: "/events" },
    { title: "FAQ", url: "/faq" },
    { title: "Contact", url: "/contact" },
    { title: "Registration", url: "/registration", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Événements", url: "/events" },
    { title: "FAQ", url: "/faq" },
    { title: "Contact", url: "/contact" },
    { title: "Inscription", url: "/registration", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Veranstaltungen", url: "/events" },
    { title: "FAQ", url: "/faq" },
    { title: "Kontakt", url: "/contact" },
    { title: "Anmeldung", url: "/registration", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Eventi", url: "/events" },
    { title: "FAQ", url: "/faq" },
    { title: "Contatto", url: "/contact" },
    { title: "Registrazione", url: "/registration", button: true },
  ],
  ge: [
    { title: "მთავარი", url: "/" },
    { title: "ღონისძიებები", url: "/events" },
    { title: "FAQ", url: "/faq" }, // "FAQ" in Georgian
    { title: "კონტაქტი", url: "/contact" },
    { title: "რეგისტრაცია", url: "/registration", button: true },
  ],
};
