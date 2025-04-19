import "@/src/app/css/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { SupportedLocale } from "@/src/i18n/routing";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Short_Stack, Fredoka, Montserrat } from "next/font/google";
import Header from "@/src/components/packages/Header/Header";
import Footer from "@/src/components/packages/Footer/Footer";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/src/manager/navigation";

// SEO Metadata
import { getTranslations } from "next-intl/server";
import { companyDomain, googleAnaliticId } from "@/src/manager/info";
import { CookieBot } from "./CookieBot";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
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

const font = Montserrat({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
const font1 = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font1",
});

// const greatVibes = Great_Vibes
const font2 = Short_Stack({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font2",
});

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as SupportedLocale)) {
    redirect(`/${defaultLocale}`);
  }

  const messages = await getMessages();

  return (
    <html lang={locale || defaultLocale}>
      {/* cookie bot */}
      <CookieBot />
      <body
        className={` ${font.className} ${font1.variable}  ${font2.variable}    `}
      >
        <GoogleAnalytics gaId={googleAnaliticId} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
          <Analytics />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
