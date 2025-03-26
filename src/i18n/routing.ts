// src/i18n/routing.ts
import { supportedLocales } from "@/Manager/navigation";
import { defaultLocale } from "@/Manager/navigation";

import { defineRouting } from "next-intl/routing";
export type SupportedLocale = (typeof supportedLocales)[number];

export const routing = defineRouting({
  locales: supportedLocales,
  defaultLocale: defaultLocale,
});
