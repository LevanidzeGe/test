import { supportedLocales } from "@/src/Manager/navigation";

type Locale = (typeof supportedLocales)[number];

export interface AccordionItem {
  id: string;
  title: Record<Locale, string>;
  content: Record<Locale, string>;
}

export const accordionItems: AccordionItem[] = [
  {
    id: "ageRequirement",
    title: {
      en: "At what age can children start practicing judo?",
      de: "Ab welchem Alter können Kinder mit Judo beginnen?",
      fr: "À quel âge les enfants peuvent-ils commencer le judo ?",
      it: "A che età i bambini possono iniziare a praticare judo?",
      ge: "რა ასაკიდან შეუძლიათ ბავშვებს ჯუდოს ვარჯიში?",
    },
    content: {
      en: "Children can start practicing judo from the age of 4. At this age, we focus on basic motor skills, balance, and discipline through fun activities.",
      de: "Kinder können ab 4 Jahren mit Judo beginnen. In diesem Alter konzentrieren wir uns auf grundlegende motorische Fähigkeiten, Gleichgewicht und Disziplin durch spielerische Aktivitäten.",
      fr: "Les enfants peuvent commencer le judo à partir de 4 ans. À cet âge, nous nous concentrons sur les compétences motrices de base, l'équilibre et la discipline à travers des activités ludiques.",
      it: "I bambini possono iniziare a praticare judo a partire dai 4 anni. A questa età ci concentriamo sulle abilità motorie di base, l'equilibrio e la disciplina tramite attività divertenti.",
      ge: "ბავშვებს შეუძლიათ ჯუდოს ვარჯიში დაიწყონ 4 წლის ასაკიდან. ამ ეტაპზე ყურადღებას ვაქცევთ მოძრაობის უნარებს, ბალანსსა და დისციპლინას თამაშების მეშვეობით.",
    },
  },
  {
    id: "benefitsOfJudo",
    title: {
      en: "What are the benefits of practicing judo?",
      de: "Was sind die Vorteile des Judo-Trainings?",
      fr: "Quels sont les avantages de la pratique du judo ?",
      it: "Quali sono i benefici della pratica del judo?",
      ge: "რა სარგებელი მოაქვს ჯუდოს ვარჯიშს?",
    },
    content: {
      en: "Judo improves physical fitness, coordination, self-confidence, discipline, and respect for others. It also teaches self-defense techniques in a safe environment.",
      de: "Judo verbessert die körperliche Fitness, Koordination, das Selbstvertrauen, die Disziplin und den Respekt gegenüber anderen. Es lehrt auch Selbstverteidigungstechniken in einer sicheren Umgebung.",
      fr: "Le judo améliore la condition physique, la coordination, la confiance en soi, la discipline et le respect des autres. Il enseigne également des techniques d'autodéfense en toute sécurité.",
      it: "Il judo migliora la forma fisica, la coordinazione, la fiducia in sé stessi, la disciplina e il rispetto per gli altri. Insegna anche tecniche di autodifesa in un ambiente sicuro.",
      ge: "ჯუდო აუმჯობესებს ფიზიკურ მომზადებას, კოორდინაციას, თავდაჯერებულობას, დისციპლინას და სხვების პატივისცემას. ასევე ასწავლის თავდაცვით ტექნიკებს უსაფრთხო გარემოში.",
    },
  },
  {
    id: "judoUniform",
    title: {
      en: "What equipment is needed for judo practice?",
      de: "Welche Ausrüstung wird für das Judo-Training benötigt?",
      fr: "Quel équipement est nécessaire pour la pratique du judo ?",
      it: "Quale attrezzatura è necessaria per la pratica del judo?",
      ge: "რა აღჭურვილობაა საჭირო ჯუდოს ვარჯიშისთვის?",
    },
    content: {
      en: "A judo uniform, called a judogi, is required. It consists of a jacket, pants, and a belt. Beginners can start with comfortable sportswear until they get their first judogi.",
      de: "Für das Judo-Training wird ein Judogi benötigt. Er besteht aus einer Jacke, einer Hose und einem Gürtel. Anfänger können mit bequemer Sportkleidung beginnen.",
      fr: "Un judogi est nécessaire pour la pratique du judo. Il se compose d'une veste, d'un pantalon et d'une ceinture. Les débutants peuvent commencer avec des vêtements de sport confortables.",
      it: "È necessario un judogi, composto da giacca, pantaloni e cintura. I principianti possono iniziare con abbigliamento sportivo comodo.",
      ge: "ჯუდოს ვარჯიშისთვის საჭიროა სპეციალური ფორმა, ჯუდოგი, რომელიც შედგება ქურთუკის, შარვლის და ქამრისგან. დამწყებთათვის შესაძლებელია სპორტული ტანსაცმლით ვარჯიშის დაწყება.",
    },
  },
  {
    id: "beltProgression",
    title: {
      en: "How does the belt system work in judo?",
      de: "Wie funktioniert das Gürtelsystem im Judo?",
      fr: "Comment fonctionne le système de ceintures en judo ?",
      it: "Come funziona il sistema delle cinture nel judo?",
      ge: "როგორ მუშაობს ქამრების სისტემა ჯუდოში?",
    },
    content: {
      en: "Judo uses a colored belt system to signify progress. Beginners start with a white belt and advance through yellow, orange, green, blue, and brown before reaching the black belt.",
      de: "Im Judo zeigt das Farbsystem der Gürtel den Fortschritt an. Anfänger beginnen mit einem weißen Gürtel und steigen über gelb, orange, grün, blau und braun bis zum schwarzen Gürtel auf.",
      fr: "Le judo utilise un système de ceintures colorées pour indiquer la progression. On commence par la ceinture blanche, puis jaune, orange, verte, bleue, marron et enfin noire.",
      it: "Il judo utilizza un sistema di cinture colorate per indicare i progressi. Si inizia con la cintura bianca e si prosegue con gialla, arancione, verde, blu, marrone e infine nera.",
      ge: "ჯუდოში პროგრესი აღინიშნება ფერადი ქამრების საშუალებით. დასაწყისში თეთრი ქამარი, შემდეგ ყვითელი, ნარინჯისფერი, მწვანე, ლურჯი და ყავისფერი, საბოლოოდ კი შავი ქამარი.",
    },
  },
  {
    id: "selfDefense",
    title: {
      en: "Does judo help with self-defense?",
      de: "Hilft Judo bei der Selbstverteidigung?",
      fr: "Le judo aide-t-il à la self-défense ?",
      it: "Il judo aiuta nell'autodifesa?",
      ge: "ჯუდო გვეხმარება თავდაცვაში?",
    },
    content: {
      en: "Yes, judo teaches effective self-defense techniques, including throws, holds, and submission techniques, while emphasizing control and safety.",
      de: "Ja, Judo vermittelt effektive Selbstverteidigungstechniken, einschließlich Würfe, Haltegriffe und Kontrolltechniken, mit Schwerpunkt auf Sicherheit.",
      fr: "Oui, le judo enseigne des techniques de self-défense efficaces, telles que des projections, des immobilisations et des contrôles en toute sécurité.",
      it: "Sì, il judo insegna tecniche di autodifesa efficaci, inclusi proiezioni, immobilizzazioni e tecniche di controllo, con enfasi sulla sicurezza.",
      ge: "დიახ, ჯუდო ასწავლის თავდაცვის ეფექტურ ტექნიკებს, მათ შორის ჩაგდებებს, გაჩერებებს და კონტროლის მეთოდებს, უსაფრთხოებაზე ყურადღების გამახვილებით.",
    },
  },
  {
    id: "competitionParticipation",
    title: {
      en: "Do students have to compete in tournaments?",
      de: "Müssen Schüler an Turnieren teilnehmen?",
      fr: "Les élèves doivent-ils participer à des tournois ?",
      it: "Gli studenti devono partecipare ai tornei?",
      ge: "უნდა მონაწილეობდნენ მოსწავლეები ტურნირებში?",
    },
    content: {
      en: "Competition is optional. While it helps improve skills and confidence, students can choose whether to participate based on their comfort and interest.",
      de: "Die Teilnahme an Wettkämpfen ist optional. Sie hilft, Fähigkeiten und Selbstvertrauen zu verbessern, ist jedoch nicht verpflichtend.",
      fr: "La compétition est facultative. Elle aide à améliorer les compétences et la confiance en soi, mais la participation dépend de la volonté de l'élève.",
      it: "La partecipazione ai tornei è facoltativa. Aiuta a migliorare le abilità e la fiducia, ma la decisione spetta allo studente.",
      ge: "ტურნირებში მონაწილეობა არჩევითია. იგი ეხმარება უნარების და თავდაჯერებულობის განვითარებაში, მაგრამ გადაწყვეტილება თავად მოსწავლეს ეკუთვნის.",
    },
  },
  {
    id: "injuryRisk",
    title: {
      en: "Is judo a safe sport?",
      de: "Ist Judo ein sicherer Sport?",
      fr: "Le judo est-il un sport sûr ?",
      it: "Il judo è uno sport sicuro?",
      ge: "ჯუდო უსაფრთხო სპორტია?",
    },
    content: {
      en: "Yes, judo is considered safe when practiced correctly. Instructors focus on proper techniques, controlled movements, and safety rules to minimize injury risks.",
      de: "Ja, Judo gilt als sicher, wenn es korrekt ausgeführt wird. Trainer achten auf richtige Techniken, kontrollierte Bewegungen und Sicherheitsregeln.",
      fr: "Oui, le judo est sûr lorsqu'il est pratiqué correctement. Les instructeurs insistent sur les bonnes techniques et les règles de sécurité.",
      it: "Sì, il judo è sicuro se praticato correttamente. Gli istruttori si concentrano su tecniche corrette e regole di sicurezza.",
      ge: "დიახ, ჯუდო უსაფრთხოა სწორად ვარჯიშისას. ინსტრუქტორები აქცენტს აკეთებენ სწორი ტექნიკის და უსაფრთხოების წესების დაცვაზე.",
    },
  },
  {
    id: "classFrequency",
    title: {
      en: "How many times per week should my child train?",
      de: "Wie oft pro Woche sollte mein Kind trainieren?",
      fr: "Combien de fois par semaine mon enfant doit-il s'entraîner ?",
      it: "Quante volte a settimana dovrebbe allenarsi mio figlio?",
      ge: "კვირაში რამდენჯერ უნდა ვარჯიშობდეს ჩემი შვილი?",
    },
    content: {
      en: "For beginners, 1-2 sessions per week are ideal. As children progress, they may train 3-4 times a week, depending on their goals and competition level.",
      de: "Für Anfänger sind 1-2 Trainingseinheiten pro Woche ideal. Fortgeschrittene können je nach Ziel 3-4 Mal pro Woche trainieren.",
      fr: "Pour les débutants, 1 à 2 séances par semaine sont idéales. Les élèves avancés peuvent s'entraîner 3 à 4 fois par semaine.",
      it: "Per i principianti, 1-2 sessioni a settimana sono l'ideale. Gli atleti avanzati possono allenarsi 3-4 volte a settimana.",
      ge: "დამწყებთათვის იდეალურია 1-2 ვარჯიში კვირაში. გამოცდილი მოსწავლეები შეიძლება ვარჯიშობდნენ 3-4-ჯერ კვირაში მათი მიზნების მიხედვით.",
    },
  },
];
