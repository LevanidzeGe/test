import { Metadata } from "next";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

import { flooring } from "../ServicesData/flooring";
import { furniture } from "../ServicesData/furniture";
import { gardening } from "../ServicesData/gardening";
import { renovation } from "../ServicesData/renovation";
import { defaultLocale } from "@/Manager/navigation";
import { companyDomain } from "@/Manager/info";
import Image from "next/image";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

const services = [flooring, furniture, gardening, renovation];

type Props = {
  params: {
    lang: string;
    slug: string;
  };
};

// Generate dynamic metadata for SEO
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Not Found",
      description: "The service you are looking for does not exist",
    };
  }

  return {
    title: service.title[params.lang] || service.title[defaultLocale],
    description:
      service.description[params.lang] || service.description[defaultLocale],
    alternates: {
      canonical: `/${params.lang}/services/${params.slug}`,
    },
    openGraph: {
      title: service.title[params.lang] || service.title[defaultLocale],
      description:
        service.description[params.lang] || service.description[defaultLocale],
      url: `${companyDomain}/${params.lang}/services/${params.slug}`,
      images: [
        {
          url: service.image || `${companyDomain}/images/openGraph/default.jpg`,
          width: 500,
          height: 300,
          alt: service.title[params.lang] || service.title[defaultLocale],
        },
      ],
    },
  };
};

// Dynamic Service Page
export default function ServiceDetailsPage({ params }: Props) {
  const locale = useLocale();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound(); // If service not found, return 404

  return (
    <>
      <Pageshead
        value1={service.title[locale]}
        value2="everythhing that we do"
      />

      <section className="section fadeOut">
        <div className="container">
          <ul className={styles.servicesWrapper}>
            {service.subServices.map((sub) => (
              <li
                className={`container ${styles.cardWrapper}`}
                key={sub.title[locale]}
              >
                <Image
                  src={sub.image}
                  width={500}
                  height={500}
                  alt={sub.title[locale]}
                />

                <div className={styles.cardTextWrap}>
                  <div className="sideLineWrap">
                    <div className="sideLine"></div>
                    <h2 className="heading4">{service.title[locale]}</h2>
                  </div>
                  <h3 className="heading2 color4">{sub.title[locale]}</h3>
                  <p className="paragraph gray7">{sub.description[locale]}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
