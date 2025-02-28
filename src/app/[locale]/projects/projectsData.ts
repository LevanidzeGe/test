export interface ProjectProps {
  id: string;
  timestamp: number;
  images: string[];
  category: { [key: string]: string };
  title: { [key: string]: string };
  description: { [key: string]: string };
}
export const projects: ProjectProps[] = [
  {
    id: "event0",
    timestamp: 1739577600000, // 2025-02-15
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation of Historic Building in Geneva",
      fr: "Rénovation d'un Bâtiment Historique à Genève",
      de: "Renovierung eines Historischen Gebäudes in Genf",
      it: "Ristrutturazione di un Edificio Storico a Ginevra",
      ge: "ისტორიული შენობის რემონტი ჟენევაში",
    },
    description: {
      en: "This project in Geneva involved the renovation of a historic building, where we meticulously restored the original features while integrating modern amenities. Our team handled everything from structural reinforcements to interior design, ensuring that the final result preserved the building's character while offering modern functionality.",
      fr: "Ce projet à Genève a impliqué la rénovation d'un bâtiment historique, où nous avons minutieusement restauré les caractéristiques originales tout en intégrant des équipements modernes. Notre équipe a pris en charge tout, des renforcements structurels à la conception intérieure, assurant que le résultat final préserve le caractère du bâtiment tout en offrant une fonctionnalité moderne.",
      de: "Dieses Projekt in Genf beinhaltete die Renovierung eines historischen Gebäudes, bei dem wir die ursprünglichen Merkmale sorgfältig restaurierten und gleichzeitig moderne Annehmlichkeiten integrierten. Unser Team übernahm alles, von strukturellen Verstärkungen bis hin zur Innengestaltung, um sicherzustellen, dass das Endergebnis den Charakter des Gebäudes bewahrte und gleichzeitig moderne Funktionalität bot.",
      it: "Questo progetto a Ginevra ha riguardato la ristrutturazione di un edificio storico, dove abbiamo restaurato meticolosamente le caratteristiche originali integrando al contempo le comodità moderne. Il nostro team ha gestito tutto, dalle rinforze strutturali al design degli interni, garantendo che il risultato finale preservasse il carattere dell'edificio offrendo al contempo funzionalità moderne.",
      ge: "ამ პროექტში ჟენევაში იყო ისტორიული შენობის რემონტი, სადაც ჩვენ მოვახდინეთ ორიგინალური ელემენტების დაცვა, ხოლო თანამედროვე კეთილმოწყობა ინტეგრირებული შევიტანეთ. ჩვენი გუნდი დაკავებული იყო ყველაფრით, სტრუქტურული გაძლიერებისგან დაწყებული, ინტერიერის დიზაინის დასრულებამდე, რათა საბოლოო შედეგი შენობის ხასიათს შეენარჩუნებინა და თანამედროვე ფუნქციონალობა შემოერთებოდა.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
  {
    id: "event1",
    timestamp: 1735776000000, // 2025-01-02
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation Project in Lyon",
      fr: "Projet de Rénovation à Lyon",
      de: "Renovierungsprojekt in Lyon",
      it: "Progetto di Ristrutturazione a Lione",
      ge: "რემონტის პროექტი ლიონში",
    },
    description: {
      en: "This renovation project in Lyon transformed an old building into a modern and functional space. Our team worked meticulously on restoring the structural integrity, installing new flooring, and updating the plumbing and electrical systems. The project highlights our commitment to quality craftsmanship and attention to detail.",
      fr: "Ce projet de rénovation à Lyon a transformé un vieux bâtiment en un espace moderne et fonctionnel. Notre équipe a travaillé avec soin sur la restauration de l'intégrité structurelle, l'installation de nouveaux sols et la mise à jour des systèmes de plomberie et d'électricité. Le projet met en valeur notre engagement envers un travail de qualité et une attention aux détails.",
      de: "Dieses Renovierungsprojekt in Lyon verwandelte ein altes Gebäude in einen modernen und funktionalen Raum. Unser Team arbeitete sorgfältig an der Wiederherstellung der strukturellen Integrität, der Verlegung neuer Böden und der Aktualisierung der Sanitär- und Elektroinstallationen. Das Projekt hebt unser Engagement für handwerkliche Qualität und Liebe zum Detail hervor.",
      it: "Questo progetto di ristrutturazione a Lione ha trasformato un vecchio edificio in uno spazio moderno e funzionale. Il nostro team ha lavorato con attenzione per ripristinare l'integrità strutturale, installare nuovi pavimenti e aggiornare gli impianti idraulici ed elettrici. Il progetto sottolinea il nostro impegno per la qualità artigianale e la cura dei dettagli.",
      ge: "ამ რემონტმა ლიონში ძველი შენობა გადატყდა თანამედროვე და ფუნქციური სივრცედ. ჩვენი გუნდი მჭიდროდ მუშაობდა სტრუქტურული მთლიანობის აღდგენაზე, ახალი იატაკის მონტაჟსა და წყალმომარაგების და ელექტროენერგიის სისტემების განახლებაზე. პროექტი ხაზს უსვამს ჩვენს ვალდებულებას ხარისხიანი ხელოსნობის და დეტალებზე ყურადღების მიმართ.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
  {
    id: "event2",
    timestamp: 1735776000000,
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation Project in Lyon",
      fr: "Projet de Rénovation à Lyon",
      de: "Renovierungsprojekt in Lyon",
      it: "Progetto di Ristrutturazione a Lione",
      ge: "რემონტის პროექტი ლიონში",
    },
    description: {
      en: "This renovation project in Lyon transformed an old building into a modern and functional space. Our team worked meticulously on restoring the structural integrity, installing new flooring, and updating the plumbing and electrical systems. The project highlights our commitment to quality craftsmanship and attention to detail.",
      fr: "Ce projet de rénovation à Lyon a transformé un vieux bâtiment en un espace moderne et fonctionnel. Notre équipe a travaillé avec soin sur la restauration de l'intégrité structurelle, l'installation de nouveaux sols et la mise à jour des systèmes de plomberie et d'électricité. Le projet met en valeur notre engagement envers un travail de qualité et une attention aux détails.",
      de: "Dieses Renovierungsprojekt in Lyon verwandelte ein altes Gebäude in einen modernen und funktionalen Raum. Unser Team arbeitete sorgfältig an der Wiederherstellung der strukturellen Integrität, der Verlegung neuer Böden und der Aktualisierung der Sanitär- und Elektroinstallationen. Das Projekt hebt unser Engagement für handwerkliche Qualität und Liebe zum Detail hervor.",
      it: "Questo progetto di ristrutturazione a Lione ha trasformato un vecchio edificio in uno spazio moderno e funzionale. Il nostro team ha lavorato con attenzione per ripristinare l'integrità strutturale, installare nuovi pavimenti e aggiornare gli impianti idraulici ed elettrici. Il progetto sottolinea il nostro impegno per la qualità artigianale e la cura dei dettagli.",
      ge: "ამ რემონტმა ლიონში ძველი შენობა გადატყდა თანამედროვე და ფუნქციური სივრცედ. ჩვენი გუნდი მჭიდროდ მუშაობდა სტრუქტურული მთლიანობის აღდგენაზე, ახალი იატაკის მონტაჟსა და წყალმომარაგების და ელექტროენერგიის სისტემების განახლებაზე. პროექტი ხაზს უსვამს ჩვენს ვალდებულებას ხარისხიანი ხელოსნობის და დეტალებზე ყურადღების მიმართ.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
  {
    id: "event3",
    timestamp: 1739577600000, // 2025-02-15
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation of Historic Building in Geneva",
      fr: "Rénovation d'un Bâtiment Historique à Genève",
      de: "Renovierung eines Historischen Gebäudes in Genf",
      it: "Ristrutturazione di un Edificio Storico a Ginevra",
      ge: "ისტორიული შენობის რემონტი ჟენევაში",
    },
    description: {
      en: "This project in Geneva involved the renovation of a historic building, where we meticulously restored the original features while integrating modern amenities. Our team handled everything from structural reinforcements to interior design, ensuring that the final result preserved the building's character while offering modern functionality.",
      fr: "Ce projet à Genève a impliqué la rénovation d'un bâtiment historique, où nous avons minutieusement restauré les caractéristiques originales tout en intégrant des équipements modernes. Notre équipe a pris en charge tout, des renforcements structurels à la conception intérieure, assurant que le résultat final préserve le caractère du bâtiment tout en offrant une fonctionnalité moderne.",
      de: "Dieses Projekt in Genf beinhaltete die Renovierung eines historischen Gebäudes, bei dem wir die ursprünglichen Merkmale sorgfältig restaurierten und gleichzeitig moderne Annehmlichkeiten integrierten. Unser Team übernahm alles, von strukturellen Verstärkungen bis hin zur Innengestaltung, um sicherzustellen, dass das Endergebnis den Charakter des Gebäudes bewahrte und gleichzeitig moderne Funktionalität bot.",
      it: "Questo progetto a Ginevra ha riguardato la ristrutturazione di un edificio storico, dove abbiamo restaurato meticolosamente le caratteristiche originali integrando al contempo le comodità moderne. Il nostro team ha gestito tutto, dalle rinforze strutturali al design degli interni, garantendo che il risultato finale preservasse il carattere dell'edificio offrendo al contempo funzionalità moderne.",
      ge: "ამ პროექტში ჟენევაში იყო ისტორიული შენობის რემონტი, სადაც ჩვენ მოვახდინეთ ორიგინალური ელემენტების დაცვა, ხოლო თანამედროვე კეთილმოწყობა ინტეგრირებული შევიტანეთ. ჩვენი გუნდი დაკავებული იყო ყველაფრით, სტრუქტურული გაძლიერებისგან დაწყებული, ინტერიერის დიზაინის დასრულებამდე, რათა საბოლოო შედეგი შენობის ხასიათს შეენარჩუნებინა და თანამედროვე ფუნქციონალობა შემოერთებოდა.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
  {
    id: "event4",
    timestamp: 1735776000000, // 2025-01-02
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation Project in Lyon",
      fr: "Projet de Rénovation à Lyon",
      de: "Renovierungsprojekt in Lyon",
      it: "Progetto di Ristrutturazione a Lione",
      ge: "რემონტის პროექტი ლიონში",
    },
    description: {
      en: "This renovation project in Lyon transformed an old building into a modern and functional space. Our team worked meticulously on restoring the structural integrity, installing new flooring, and updating the plumbing and electrical systems. The project highlights our commitment to quality craftsmanship and attention to detail.",
      fr: "Ce projet de rénovation à Lyon a transformé un vieux bâtiment en un espace moderne et fonctionnel. Notre équipe a travaillé avec soin sur la restauration de l'intégrité structurelle, l'installation de nouveaux sols et la mise à jour des systèmes de plomberie et d'électricité. Le projet met en valeur notre engagement envers un travail de qualité et une attention aux détails.",
      de: "Dieses Renovierungsprojekt in Lyon verwandelte ein altes Gebäude in einen modernen und funktionalen Raum. Unser Team arbeitete sorgfältig an der Wiederherstellung der strukturellen Integrität, der Verlegung neuer Böden und der Aktualisierung der Sanitär- und Elektroinstallationen. Das Projekt hebt unser Engagement für handwerkliche Qualität und Liebe zum Detail hervor.",
      it: "Questo progetto di ristrutturazione a Lione ha trasformato un vecchio edificio in uno spazio moderno e funzionale. Il nostro team ha lavorato con attenzione per ripristinare l'integrità strutturale, installare nuovi pavimenti e aggiornare gli impianti idraulici ed elettrici. Il progetto sottolinea il nostro impegno per la qualità artigianale e la cura dei dettagli.",
      ge: "ამ რემონტმა ლიონში ძველი შენობა გადატყდა თანამედროვე და ფუნქციური სივრცედ. ჩვენი გუნდი მჭიდროდ მუშაობდა სტრუქტურული მთლიანობის აღდგენაზე, ახალი იატაკის მონტაჟსა და წყალმომარაგების და ელექტროენერგიის სისტემების განახლებაზე. პროექტი ხაზს უსვამს ჩვენს ვალდებულებას ხარისხიანი ხელოსნობის და დეტალებზე ყურადღების მიმართ.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
  {
    id: "event5",
    timestamp: 1735776000000,
    category: {
      en: "Renovation",
      fr: "Rénovation",
      de: "Renovierung",
      it: "Ristrutturazione",
      ge: "რემონტი",
    },
    title: {
      en: "Renovation Project in Lyon",
      fr: "Projet de Rénovation à Lyon",
      de: "Renovierungsprojekt in Lyon",
      it: "Progetto di Ristrutturazione a Lione",
      ge: "რემონტის პროექტი ლიონში",
    },
    description: {
      en: "This renovation project in Lyon transformed an old building into a modern and functional space. Our team worked meticulously on restoring the structural integrity, installing new flooring, and updating the plumbing and electrical systems. The project highlights our commitment to quality craftsmanship and attention to detail.",
      fr: "Ce projet de rénovation à Lyon a transformé un vieux bâtiment en un espace moderne et fonctionnel. Notre équipe a travaillé avec soin sur la restauration de l'intégrité structurelle, l'installation de nouveaux sols et la mise à jour des systèmes de plomberie et d'électricité. Le projet met en valeur notre engagement envers un travail de qualité et une attention aux détails.",
      de: "Dieses Renovierungsprojekt in Lyon verwandelte ein altes Gebäude in einen modernen und funktionalen Raum. Unser Team arbeitete sorgfältig an der Wiederherstellung der strukturellen Integrität, der Verlegung neuer Böden und der Aktualisierung der Sanitär- und Elektroinstallationen. Das Projekt hebt unser Engagement für handwerkliche Qualität und Liebe zum Detail hervor.",
      it: "Questo progetto di ristrutturazione a Lione ha trasformato un vecchio edificio in uno spazio moderno e funzionale. Il nostro team ha lavorato con attenzione per ripristinare l'integrità strutturale, installare nuovi pavimenti e aggiornare gli impianti idraulici ed elettrici. Il progetto sottolinea il nostro impegno per la qualità artigianale e la cura dei dettagli.",
      ge: "ამ რემონტმა ლიონში ძველი შენობა გადატყდა თანამედროვე და ფუნქციური სივრცედ. ჩვენი გუნდი მჭიდროდ მუშაობდა სტრუქტურული მთლიანობის აღდგენაზე, ახალი იატაკის მონტაჟსა და წყალმომარაგების და ელექტროენერგიის სისტემების განახლებაზე. პროექტი ხაზს უსვამს ჩვენს ვალდებულებას ხარისხიანი ხელოსნობის და დეტალებზე ყურადღების მიმართ.",
    },
    images: [
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/5.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/1.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/2.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/3.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/4.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/6.jpg?raw=true",
      "https://github.com/levanydze/SUP/blob/main/Geo-Renovations/7.jpg?raw=true",
    ],
  },
];
