export const supportedLocales = ["fr", "en", "de", "it", "ge"];
export const defaultLocale = "fr";
export const dynamicPageRoute = "menu"; // [slug]
export const fireBaseRoute = "toisondor"; //firebase route
export const menuCarPlaceHoldImg =
  "https://github.com/levanydze/SUP/blob/main/Geneva-Restaurant-Assets/Placeholders/menuItemPlaceholder.jpg?raw=true";

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Main", url: "/" },
    { title: "Events", url: "/events" },
    // { title: "Story", url: "/story" }, // Single word "Story"
    { title: "Contact", url: "/contact" },
    { title: "Registration", url: "/registration", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Événements", url: "/events" },
    // { title: "Histoire", url: "/story" }, // Single word "Histoire" (Story in French)
    { title: "Contact", url: "/contact" },
    { title: "Inscription", url: "/registration", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Veranstaltungen", url: "/events" },
    // { title: "Geschichte", url: "/story" }, // Single word "Geschichte" (Story in German)
    { title: "Kontakt", url: "/contact" },
    { title: "Anmeldung", url: "/registration", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Eventi", url: "/events" },
    // { title: "Storia", url: "/story" }, // Single word "Storia" (Story in Italian)
    { title: "Contatto", url: "/contact" },
    { title: "Registrazione", url: "/registration", button: true },
  ],
  ge: [
    { title: "მთავარი", url: "/" },
    { title: "ღონისძიებები", url: "/events" },
    // { title: "ისტორია", url: "/story" }, // Single word "ისტორია" (Story in Georgian)
    { title: "კონტაქტი", url: "/contact" },
    { title: "რეგისტრაცია", url: "/registration", button: true },
  ],
};
