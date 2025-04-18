// src/i18n/routing.ts
import { supportedLocales } from "@/src/PPPmanager/navigation";
import { defaultLocale } from "@/src/PPPmanager/navigation";

import { defineRouting } from "next-intl/routing";
export type SupportedLocale = (typeof supportedLocales)[number];

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: defaultLocale,
});
