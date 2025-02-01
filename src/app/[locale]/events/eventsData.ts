// Events Interface
export interface EventProps {
  id: string;
  titleEN: string;
  titleDE: string;
  titleFR: string;
  titleGE: string;
  titleIT: string;
  textEN: string;
  textDE: string;
  textGE: string;
  textIT: string;
  textFR: string;
  images: string[];
  timestamp?: number;
}

export const events: EventProps[] = [
  {
    id: "event1",
    timestamp: 1735776000000, // 2025-01-02
    titleEN: "International Judo Competition in Lyon",
    titleDE: "Internationale Judo-Wettbewerb in Lyon",
    titleFR: "Compétition internationale de judo à Lyon",
    titleGE: "ძიუდოს საერთაშორისო შეჯიბრი ლიონში",
    titleIT: "Competizione internazionale di judo a Lione",
    textEN:
      "Join us for an exhilarating international judo competition held in Lyon, where athletes from around the world will showcase their skills, determination, and sportsmanship. This event promises high-level performances, exciting matches, and a celebration of judo culture.",
    textDE:
      "Begleiten Sie uns zu einem aufregenden internationalen Judo-Wettbewerb in Lyon, bei dem Athleten aus der ganzen Welt ihre Fähigkeiten, Entschlossenheit und Sportlichkeit unter Beweis stellen. Freuen Sie sich auf hochkarätige Leistungen und spannende Kämpfe.",
    textGE:
      "შემოგვიერთდით ლიონში გამართულ ძიუდოს საერთაშორისო შეჯიბრებაზე, სადაც მსოფლიოს სხვადასხვა კუთხიდან ჩამოსული სპორტსმენები თავიანთ ოსტატობას, მიზანდასახულობას და სპორტულ სულს წარმოგვიდგენენ.",
    textIT:
      "Unisciti a noi per un'emozionante competizione internazionale di judo a Lione, dove atleti di tutto il mondo mostreranno le loro abilità, determinazione e spirito sportivo. Un evento imperdibile per gli appassionati di judo.",
    textFR:
      "Rejoignez-nous pour une compétition internationale de judo palpitante à Lyon, où des athlètes du monde entier démontreront leurs compétences, leur détermination et leur esprit sportif. Un événement incontournable pour les fans de judo.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },
  {
    id: "event2",
    timestamp: 1739577600000, // 2025-02-15
    titleEN: "Advanced Training Camp in Geneva",
    titleDE: "Fortgeschrittenes Trainingslager in Genf",
    titleFR: "Camp d'entraînement avancé à Genève",
    titleGE: "დამატებითი სასწავლო ბანაკი ჟენევაში",
    titleIT: "Campo di allenamento avanzato a Ginevra",
    textEN:
      "This intensive training camp in Geneva is designed for advanced judo practitioners seeking to enhance their techniques and tactical understanding. Experienced coaches will provide personalized guidance to help participants reach new levels of performance.",
    textDE:
      "Dieses intensive Trainingslager in Genf richtet sich an fortgeschrittene Judoka, die ihre Techniken und ihr taktisches Verständnis verbessern möchten. Erfahrene Trainer bieten individuelle Anleitung für maximale Leistung.",
    textGE:
      "ინტენსიური სასწავლო ბანაკი ჟენევაში განკუთვნილია ძიუდოს მაღალ დონეზე მომუშავე სპორტსმენებისთვის, რომლებიც ცდილობენ გაიუმჯობესონ თავიანთი ტექნიკა და ტაქტიკური უნარები.",
    textIT:
      "Questo campo di allenamento intensivo a Ginevra è pensato per judoka avanzati che vogliono migliorare le loro tecniche e la comprensione tattica. Istruttori esperti forniranno supporto personalizzato.",
    textFR:
      "Ce camp d'entraînement intensif à Genève s'adresse aux judokas avancés désireux d'améliorer leurs techniques et leur compréhension tactique. Des entraîneurs expérimentés offriront un encadrement personnalisé.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },
  {
    id: "event3",
    timestamp: 1742428800000, // 2025-03-20
    titleEN: "International Judo Tournament in Berlin",
    titleDE: "Internationales Judo-Turnier in Berlin",
    titleFR: "Tournoi international de judo à Berlin",
    titleGE: "ძიუდოს საერთაშორისო ტურნირი ბერლინში",
    titleIT: "Torneo internazionale di judo a Berlino",
    textEN:
      "Witness the spirit of competition at the International Judo Tournament in Berlin. Athletes will compete in various categories, demonstrating skillful throws, grappling techniques, and tactical prowess. An event not to be missed by any judo enthusiast.",
    textDE:
      "Erleben Sie den Geist des Wettbewerbs beim Internationalen Judo-Turnier in Berlin. Athleten treten in verschiedenen Kategorien an und zeigen ihr Können in Würfen, Grifftechniken und Taktik.",
    textGE:
      "ძიუდოს საერთაშორისო ტურნირი ბერლინში მიგაწვდით კონკურენციის ნამდვილ სულს. სპორტსმენები აჩვენებენ თავიანთ ოსტატობას სხვადასხვა კატეგორიაში.",
    textIT:
      "Assisti allo spirito competitivo durante il Torneo Internazionale di Judo a Berlino. Atleti da tutto il mondo mostreranno le loro abilità in diverse categorie.",
    textFR:
      "Vivez l'esprit de compétition lors du Tournoi international de judo à Berlin. Des athlètes de différentes catégories présenteront des techniques impressionnantes.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },

  {
    id: "event1",
    timestamp: 1735776000000, // 2025-01-02
    titleEN: "International Judo Competition in Lyon",
    titleDE: "Internationale Judo-Wettbewerb in Lyon",
    titleFR: "Compétition internationale de judo à Lyon",
    titleGE: "ძიუდოს საერთაშორისო შეჯიბრი ლიონში",
    titleIT: "Competizione internazionale di judo a Lione",
    textEN:
      "Join us for an exhilarating international judo competition held in Lyon, where athletes from around the world will showcase their skills, determination, and sportsmanship. This event promises high-level performances, exciting matches, and a celebration of judo culture.",
    textDE:
      "Begleiten Sie uns zu einem aufregenden internationalen Judo-Wettbewerb in Lyon, bei dem Athleten aus der ganzen Welt ihre Fähigkeiten, Entschlossenheit und Sportlichkeit unter Beweis stellen. Freuen Sie sich auf hochkarätige Leistungen und spannende Kämpfe.",
    textGE:
      "შემოგვიერთდით ლიონში გამართულ ძიუდოს საერთაშორისო შეჯიბრებაზე, სადაც მსოფლიოს სხვადასხვა კუთხიდან ჩამოსული სპორტსმენები თავიანთ ოსტატობას, მიზანდასახულობას და სპორტულ სულს წარმოგვიდგენენ.",
    textIT:
      "Unisciti a noi per un'emozionante competizione internazionale di judo a Lione, dove atleti di tutto il mondo mostreranno le loro abilità, determinazione e spirito sportivo. Un evento imperdibile per gli appassionati di judo.",
    textFR:
      "Rejoignez-nous pour une compétition internationale de judo palpitante à Lyon, où des athlètes du monde entier démontreront leurs compétences, leur détermination et leur esprit sportif. Un événement incontournable pour les fans de judo.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },
  {
    id: "event2",
    timestamp: 1739577600000, // 2025-02-15
    titleEN: "Advanced Training Camp in Geneva",
    titleDE: "Fortgeschrittenes Trainingslager in Genf",
    titleFR: "Camp d'entraînement avancé à Genève",
    titleGE: "დამატებითი სასწავლო ბანაკი ჟენევაში",
    titleIT: "Campo di allenamento avanzato a Ginevra",
    textEN:
      "This intensive training camp in Geneva is designed for advanced judo practitioners seeking to enhance their techniques and tactical understanding. Experienced coaches will provide personalized guidance to help participants reach new levels of performance.",
    textDE:
      "Dieses intensive Trainingslager in Genf richtet sich an fortgeschrittene Judoka, die ihre Techniken und ihr taktisches Verständnis verbessern möchten. Erfahrene Trainer bieten individuelle Anleitung für maximale Leistung.",
    textGE:
      "ინტენსიური სასწავლო ბანაკი ჟენევაში განკუთვნილია ძიუდოს მაღალ დონეზე მომუშავე სპორტსმენებისთვის, რომლებიც ცდილობენ გაიუმჯობესონ თავიანთი ტექნიკა და ტაქტიკური უნარები.",
    textIT:
      "Questo campo di allenamento intensivo a Ginevra è pensato per judoka avanzati che vogliono migliorare le loro tecniche e la comprensione tattica. Istruttori esperti forniranno supporto personalizzato.",
    textFR:
      "Ce camp d'entraînement intensif à Genève s'adresse aux judokas avancés désireux d'améliorer leurs techniques et leur compréhension tactique. Des entraîneurs expérimentés offriront un encadrement personnalisé.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },
  {
    id: "event3",
    timestamp: 1742428800000, // 2025-03-20
    titleEN: "International Judo Tournament in Berlin",
    titleDE: "Internationales Judo-Turnier in Berlin",
    titleFR: "Tournoi international de judo à Berlin",
    titleGE: "ძიუდოს საერთაშორისო ტურნირი ბერლინში",
    titleIT: "Torneo internazionale di judo a Berlino",
    textEN:
      "Witness the spirit of competition at the International Judo Tournament in Berlin. Athletes will compete in various categories, demonstrating skillful throws, grappling techniques, and tactical prowess. An event not to be missed by any judo enthusiast.",
    textDE:
      "Erleben Sie den Geist des Wettbewerbs beim Internationalen Judo-Turnier in Berlin. Athleten treten in verschiedenen Kategorien an und zeigen ihr Können in Würfen, Grifftechniken und Taktik.",
    textGE:
      "ძიუდოს საერთაშორისო ტურნირი ბერლინში მიგაწვდით კონკურენციის ნამდვილ სულს. სპორტსმენები აჩვენებენ თავიანთ ოსტატობას სხვადასხვა კატეგორიაში.",
    textIT:
      "Assisti allo spirito competitivo durante il Torneo Internazionale di Judo a Berlino. Atleti da tutto il mondo mostreranno le loro abilità in diverse categorie.",
    textFR:
      "Vivez l'esprit de compétition lors du Tournoi international de judo à Berlin. Des athlètes de différentes catégories présenteront des techniques impressionnantes.",
    images: [
      "https://github.com/levanydze/restaurant2024support/blob/main/highResolution/olivOilandCake.jpg?raw=true",
    ],
  },
];
