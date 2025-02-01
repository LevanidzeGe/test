import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { EventProps } from "../../eventsData";
import { useLocale } from "next-intl";

export default function ServerCard({
  id,
  titleEN,
  titleDE,
  titleFR,
  titleGE,
  titleIT,
  textEN,
  textDE,
  textGE,
  textIT,
  textFR,
  images,
  timestamp,
}: EventProps) {
  const locale = useLocale();

  // Determine the localized title and description
  const displayTitle =
    { en: titleEN, de: titleDE, fr: titleFR, ge: titleGE, it: titleIT }[
      locale
    ] || titleEN;
  const displayDescription =
    { en: textEN, de: textDE, fr: textFR, ge: textGE, it: textIT }[locale] ||
    textEN;

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={images[0]}
          width={1000}
          height={700}
          alt={displayTitle}
          loading="lazy"
          className={styles.image}
        />
      </div>
      {timestamp && (
        <p className={`gray7 ${styles.date}`}>
          {new Date(timestamp).toLocaleDateString(locale)}
        </p>
      )}
      <div className="">
        <h2 className="heading4 color4">{displayTitle}</h2>

        <p className="paragraph gray7">
          {displayDescription.length > 100
            ? `${displayDescription.substring(0, 100)}...`
            : displayDescription}
        </p>
      </div>
    </div>
  );
}
