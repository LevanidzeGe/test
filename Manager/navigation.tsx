export const supportedLocales = ["en", "fr", "de", "it"];
export const defaultLocale = supportedLocales[0];
// export const dynamicPageRoute = "menu"; // [slug]
// export const fireBaseRoute = "toisondor"; //firebase route
// export const menuCarPlaceHoldImg =
//   "https://github.com/levanydze/SUP/blob/main/Geneva-Restaurant-Assets/Placeholders/menuItemPlaceholder.jpg?raw=true";

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Home", url: "/" },
    { title: "web projects", url: "/projects" },
    { title: "photography", url: "/photography" },
    { title: "Contact", url: "/contact" },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    { title: "Projets web", url: "/projects" },
    { title: "Photographie", url: "/photography" },
    { title: "Contact", url: "/contact" },
  ],
  de: [
    { title: "Startseite", url: "/" },
    { title: "Webprojekte", url: "/projects" },
    { title: "Fotografie", url: "/photography" },
    { title: "Kontakt", url: "/contact" },
  ],
  it: [
    { title: "Home", url: "/" },
    { title: "Progetti web", url: "/projects" },
    { title: "Fotografia", url: "/photography" },
    { title: "Contatto", url: "/contact" },
  ],
};

//  en: [
//     { title: "Home", url: "/" },
//     {
//       title: "Services",
//       url: "/services",
//       dropdown: [
//         { title: "Renovation", url: "/renovation" },
//         { title: "Flooring", url: "/flooring" },
//         { title: "Furniture Assembling", url: "/furniture-assembly" },
//         { title: "Gardening", url: "/gardening" },
//       ],
//     },
//     { title: "Projects", url: "/projects" },
//     { title: "About Us", url: "/about" },
//     { title: "Contact", url: "/contact", button: true },
//   ],
