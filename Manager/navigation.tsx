export const supportedLocales = ["fr", "en", "de", "it", "ge"];
export const defaultLocale = supportedLocales[0];

export interface NavItemProps {
  title: string;
  url: string;
  button?: boolean;
  dropdown?: { title: string; url: string }[]; // Optional dropdown array
}

export const navItems: { [key: string]: NavItemProps[] } = {
  en: [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/services",
      dropdown: [
        { title: "Renovation", url: "/renovation" },
        { title: "Flooring", url: "/flooring" },
        { title: "Furniture Assembling", url: "/furniture-assembly" },
        { title: "Gardening", url: "/gardening" },
      ],
    },
    { title: "Projects", url: "/projects" },
    { title: "About Us", url: "/about" },
    { title: "Contact", url: "/contact", button: true },
  ],
  fr: [
    { title: "Accueil", url: "/" },
    {
      title: "Services",
      url: "/services",
      dropdown: [
        { title: "Rénovation", url: "/renovation" },
        { title: "Revêtement de sol", url: "/flooring" },
        { title: "Assemblage de meubles", url: "/furniture-assembly" },
        { title: "Jardinage", url: "/gardening" },
      ],
    },
    { title: "Projets", url: "/projects" },
    { title: "À propos de nous", url: "/about" },
    { title: "Contact", url: "/contact", button: true },
  ],
  de: [
    { title: "Startseite", url: "/" },
    {
      title: "Dienstleistungen",
      url: "/services",
      dropdown: [
        { title: "Renovierung", url: "/renovation" },
        { title: "Bodenbeläge", url: "/flooring" },
        { title: "Möbelmontage", url: "/furniture-assembly" },
        { title: "Gartenarbeit", url: "/gardening" },
      ],
    },
    { title: "Projekte", url: "/projects" },
    { title: "Über uns", url: "/about" },
    { title: "Kontakt", url: "/contact", button: true },
  ],
  it: [
    { title: "Home", url: "/" },
    {
      title: "Servizi",
      url: "/services",
      dropdown: [
        { title: "Ristrutturazione", url: "/renovation" },
        { title: "Pavimentazione", url: "/flooring" },
        { title: "Montaggio mobili", url: "/furniture-assembly" },
        { title: "Giardinaggio", url: "/gardening" },
      ],
    },
    { title: "Progetti", url: "/projects" },
    { title: "Chi siamo", url: "/about" },
    { title: "Contatto", url: "/contact", button: true },
  ],
  ge: [
    { title: "მთავარი", url: "/" },
    {
      title: "სერვისები",
      url: "/services",
      dropdown: [
        { title: "რემონტი", url: "/renovation" },
        { title: "იატაკის დაგება", url: "/flooring" },
        { title: "ავეჯის შეკრება", url: "/furniture-assembly" },
        { title: "ბაღის მოვლა", url: "/gardening" },
      ],
    },
    { title: "პროექტები", url: "/projects" },
    { title: "ჩვენს შესახებ", url: "/about" },
    { title: "კონტაქტი", url: "/contact", button: true },
  ],
};
