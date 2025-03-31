import "@/src/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/src/i18n/routing";
import { SupportedLocale } from "@/src/i18n/routing";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Poppins, Roboto } from "next/font/google";
import Header from "@/src/components/packages/Header/Header";
import Footer from "@/src/components/packages/Footer/Footer";
import LowerFoot from "@/src/components/packages/LowerFooter/LowerFoot";
import { redirect } from "next/navigation";
import { defaultLocale } from "@/Manager/navigation"; // Import supported locales

// SEO Metadata
import { getTranslations } from "next-intl/server";
import { companyDomain, googleAnaliticId } from "@/Manager/info";

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
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font1",
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
      <body className={` ${roboto.className} ${poppins.variable}`}>
        <GoogleAnalytics gaId={googleAnaliticId} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen max-w-4xl mx-auto">
            <Header />
            {children}
            <Analytics />
            <Footer />
            <LowerFoot />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
