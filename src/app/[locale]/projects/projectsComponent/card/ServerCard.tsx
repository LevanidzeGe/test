import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { ProjectProps } from "../../projectsData";
import { useLocale, useTranslations } from "next-intl";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

export default function ServerCard({
  id,
  images,
  title,
  description,
  timestamp,
  category,
  readMore,
}: ProjectProps & { readMore: string }) {
  const locale = useLocale();

  // Fallback to the default locale if the translation is not available

  return (
    <div className={`${styles.cardWrapper} `}>
      <Link href={`/${locale}/projects/${id}`} className={styles.imageWrapper}>
        <Image
          src={images[0]}
          width={1000}
          height={700}
          alt={title[locale]}
          loading="lazy"
          className={styles.image}
        />
      </Link>

      <div className={styles.topDiv}>
        {/* {timestamp && (
          <p className={`gray5 caption-mini ${styles.date}`}>
            {new Date(timestamp).toLocaleDateString(locale)}
          </p>
        )} */}
        <p className={`gray7 caption-mini ${styles.caption}`}>
          {category[locale]}
        </p>
      </div>

      <div>
        <h2 className="heading3 color4">
          {title[locale].length > 40
            ? `${title[locale].substring(0, 40)}...`
            : title[locale]}
        </h2>
        <p className="paragraph gray7">
          {description[locale].length > 80
            ? `${description[locale].substring(0, 80)}...`
            : description[locale]}
        </p>
      </div>

      <Link href={`/${locale}/projects/${id}`} className={styles.button}>
        {readMore}
        <FaArrowRightLong />
      </Link>
    </div>
  );
}
