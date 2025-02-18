import Image from "next/image";
import styles from "./ServicesList.module.css";
import { useLocale } from "next-intl";

// Import individual services directly
import { renovation } from "../ServicesData/renovation";
import { gardening } from "../ServicesData/gardening";
import { flooring } from "../ServicesData/flooring";
import { furniture } from "../ServicesData/furniture";
import Link from "next/link";
const services = [renovation, gardening, flooring, furniture, renovation];

export default function ServicesList() {
  const locale = useLocale(); // Get current language

  return (
    <section className="section">
      <div className="container">
        <div className="sideLineWrap">
          <div className="sideLine"></div>
          <h3 className="heading4">What We Do</h3>
        </div>
        <h1 className={`${styles.title} heading2 color4`}>Our services</h1>
        <div className={styles.servicesWrapper}>
          {services.map(({ slug, title, description, image }) => (
            <Link
              href={`/${locale}/services/${slug}`}
              key={slug}
              className={`shadow-black-s ${styles.serviceCard}`}
            >
              <Image
                width={500}
                height={500}
                src={image}
                alt={title[locale]}
                className={styles.serviceImage}
              />
              <div className={styles.textWrapper}>
                <h2 className="heading4 white">- {title[locale]}</h2>
                <p className="paragraph gray3"> {description[locale]}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
