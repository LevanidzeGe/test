import "@/src/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/src/components/packages/Header/Header";
import { notFound, redirect } from "next/navigation";
import { defaultLocale, supportedLocales } from "@/Manager/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { SupportedLocale } from "@/src/i18n/routing";

// SEO Metadata
import { getTranslations } from "next-intl/server";
import { companyDomain } from "@/Manager/info";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;
  const t = await getTranslations("homePage.metadata");
  const canonicalUrl = `${companyDomain}/${locale}`;

  return {
    metadataBase: new URL(companyDomain),
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      description: t("description"),
      url: companyDomain,
      images: [
        {
          url: `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: t("title"),
        },
      ],
    },
  };
}
//fonts
import { Bebas_Neue, Poppins, Roboto, Shantell_Sans } from "next/font/google";
import SayHi from "@/src/components/packages/ContactForm/SayHi";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font1",
});
const shantel = Shantell_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font2",
});
const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font3",
});

interface RootLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = params;

  if (!routing.locales.includes(locale as SupportedLocale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale || defaultLocale}>
      <body
        className={` ${bebas.variable} ${poppins.variable} ${shantel.variable} ${poppins.className}    `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <SayHi />

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
