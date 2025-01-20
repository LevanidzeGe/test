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
    { title: "About Us", url: "/about-us" },
    { title: "Contact", url: "/contact" },
    { title: "Registration", url: "/registration", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Événements", url: "/events" },
    { title: "À propos", url: "/about-us" },
    { title: "Contact", url: "/contact" },
    { title: "Inscription", url: "/registration", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Veranstaltungen", url: "/events" },
    { title: "Über uns", url: "/about-us" },
    { title: "Kontakt", url: "/contact" },
    { title: "Anmeldung", url: "/registration", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Eventi", url: "/events" },
    { title: "Chi siamo", url: "/about-us" },
    { title: "Contatto", url: "/contact" },
    { title: "Registrazione", url: "/registration", button: true },
  ],
  ge: [
    { title: "მთავარი", url: "/" },
    { title: "ივენთები", url: "/events" },
    { title: "ჩვენს შესახებ", url: "/about-us" },
    { title: "კონტაქტი", url: "/contact" },
    { title: "რეგისტრაცია", url: "/registration", button: true },
  ],
};
