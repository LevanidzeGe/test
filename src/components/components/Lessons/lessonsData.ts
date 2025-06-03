import { supportedLocales } from "@/src/manager/navigation";
import image4 from "./images/4.png";
import image8 from "./images/8.png";
import image12 from "./images/12.png";
import { StaticImageData } from "next/image";

type Locale = (typeof supportedLocales)[number];

export interface LessonGroup {
  id: string;
  title: Record<Locale, string>;
  ageLabel: Record<Locale, string>;
  age: string;
  image: StaticImageData;
  hours: {
    dayKey: string;
    label: Record<Locale, string>;
    time: string;
  }[];
}

export const lessonGroups: LessonGroup[] = [
  {
    id: "group1",
    image: image4,
    title: {
      en: "Children's Group",
      fr: "Groupe des enfants",
      de: "Kindergruppe",
      it: "Gruppo bambini",
      ge: "ბავშვთა ჯგუფი",
    },
    ageLabel: {
      en: "Age",
      fr: "Âge",
      de: "Alter",
      it: "Età",
      ge: "ასაკი",
    },
    age: "4-6",
    hours: [
      {
        dayKey: "monday",
        label: {
          en: "Monday",
          fr: "Lundi",
          de: "Montag",
          it: "Lunedì",
          ge: "ორშაბათი",
        },
        time: "17:15 - 18:00",
      },
      {
        dayKey: "thursday",
        label: {
          en: "Thursday",
          fr: "Jeudi",
          de: "Donnerstag",
          it: "Giovedì",
          ge: "ხუთშაბათი",
        },
        time: "17:15 - 18:00",
      },
      {
        dayKey: "friday",
        label: {
          en: "Friday",
          fr: "Vendredi",
          de: "Freitag",
          it: "Venerdì",
          ge: "პარასკევი",
        },
        time: "17:15 - 18:00",
      },
    ],
  },
  {
    id: "group2",
    image: image8,
    title: {
      en: "Junior Group",
      fr: "Groupe junior",
      de: "Juniorengruppe",
      it: "Gruppo junior",
      ge: "უმცროსთა ჯგუფი",
    },
    ageLabel: {
      en: "Age",
      fr: "Âge",
      de: "Alter",
      it: "Età",
      ge: "ასაკი",
    },
    age: "7-12",
    hours: [
      {
        dayKey: "monday",
        label: {
          en: "Monday",
          fr: "Lundi",
          de: "Montag",
          it: "Lunedì",
          ge: "ორშაბათი",
        },
        time: "18:00 - 19:00",
      },
      {
        dayKey: "thursday",
        label: {
          en: "Thursday",
          fr: "Jeudi",
          de: "Donnerstag",
          it: "Giovedì",
          ge: "ხუთშაბათი",
        },
        time: "18:00 - 19:00",
      },
      {
        dayKey: "friday",
        label: {
          en: "Friday",
          fr: "Vendredi",
          de: "Freitag",
          it: "Venerdì",
          ge: "პარასკევი",
        },
        time: "18:00 - 19:00",
      },
    ],
  },
  {
    id: "group3",
    image: image12,
    title: {
      en: "Teen & Adult Group",
      fr: "Groupe ados et adultes",
      de: "Gruppe Jugendliche & Erwachsene",
      it: "Gruppo adolescenti e adulti",
      ge: "მოზარდთა და უფროსთა ჯგუფი",
    },
    ageLabel: {
      en: "Age",
      fr: "Âge",
      de: "Alter",
      it: "Età",
      ge: "ასაკი",
    },
    age: "12+ & 18+",
    hours: [
      {
        dayKey: "thursday",
        label: {
          en: "Thursday",
          fr: "Jeudi",
          de: "Donnerstag",
          it: "Giovedì",
          ge: "ხუთშაბათი",
        },
        time: "19:00 - 20:15",
      },
    ],
  },
];
