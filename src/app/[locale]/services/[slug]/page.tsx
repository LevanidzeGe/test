import { Metadata } from "next";
import styles from "./page.module.css";
import { flooring } from "../ServicesData/flooring";
import { furniture } from "../ServicesData/furniture";
import { gardening } from "../ServicesData/gardening";
import { renovation } from "../ServicesData/renovation";
import { companyDomain } from "@/Manager/info";
import Image from "next/image";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";
import { defaultLocale } from "@/Manager/navigation";

const services = [flooring, furniture, gardening, renovation];

type Props = {
  params: {
    locale: string; // Changed from lang to locale
    slug: string;
  };
};

// **Generate dynamic metadata for SEO**
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const service = services.find((s) => s.slug === params.slug);
  const locale = params.locale; // Ensure a valid locale

  if (!service) {
    return {
      title: "Not Found",
      description: "The service you are looking for does not exist",
    };
  }

  // Ensure translations exist and provide a fallback
  const title = service.title[locale] ?? service.title[defaultLocale];
  const description =
    service.description[locale] ?? service.description[defaultLocale];

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/services/${params.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${companyDomain}/${locale}/services/${params.slug}`,
      images: [
        {
          url: service.image || `${companyDomain}/images/openGraph/default.jpg`,
          width: 500,
          height: 300,
          alt: title,
        },
      ],
    },
  };
};

// **Dynamic Service Page**
export default function ServiceDetailsPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);
  const locale = params.locale || defaultLocale; // Ensure locale is always valid

  if (!service) {
    return {
      title: "Not Found",
      description: "The service you are looking for does not exist",
    };
  }

  // Ensure translations exist and provide a fallback
  const title = service.title[locale] ?? service.title[defaultLocale];
  return (
    <>
      <Pageshead value1={title} value2="everything that we do" />

      <section className="section fadeOut">
        <div className="container">
          <ul className={styles.servicesWrapper}>
            {service.subServices.map((sub) => {
              const subTitle = sub.title[locale] ?? sub.title[defaultLocale];
              const subDescription =
                sub.description[locale] ?? sub.description[defaultLocale];

              return (
                <li
                  className={`container ${styles.cardWrapper}`}
                  key={subTitle}
                >
                  <Image
                    src={sub.image}
                    width={500}
                    height={500}
                    alt={subTitle}
                  />

                  <div className={styles.cardTextWrap}>
                    <div className="sideLineWrap">
                      <div className="sideLine"></div>
                      <h2 className="heading4">{title}</h2>
                    </div>
                    <h3 className="heading2 color4">{subTitle}</h3>
                    <p className="paragraph gray7">{subDescription}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
