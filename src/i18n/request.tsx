// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { SupportedLocale } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;

  const locale = routing.locales.includes(requestedLocale as SupportedLocale)
    ? requestedLocale
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@/src/messages/${locale}.json`)).default,
  };
});

// import { notFound } from "next/navigation";
// import { getRequestConfig } from "next-intl/server";
// import { supportedLocales } from "@/Manager/navigation";

// // Can be imported from a shared config

// export default getRequestConfig(async ({ locale }) => {
//   if (!supportedLocales.includes(locale)) notFound();

//   try {
//     const messages = (await import(`../messages/${locale}.json`)).default;
//     return { messages };
//   } catch (error) {
//     // Fallback to default locale if messages file is not found
//     const fallbackMessages = (await import(`../messages/en.json`)).default;
//     return { messages: fallbackMessages };
//   }
// });
