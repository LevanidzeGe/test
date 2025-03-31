import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/lib/firebase/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ServerCard({
  id,
  images,
  transTitle,
  transDescription,
  noTransDate,
}: ReturnTypeOfExtract) {
  const locale = await getLocale();
  const t = await getTranslations();

  const eventTimestamp = new Date(noTransDate).getTime();
  const isUpcoming = eventTimestamp > Date.now();

  return (
    <div className={styles.cardWrapper}>
      <Link href={`/${locale}/events/${id}`} className={styles.imageWrapper}>
        {images && (
          <Image
            src={images[0]}
            width={1000}
            height={700}
            alt={transTitle}
            loading="lazy"
            className={styles.image}
          />
        )}
      </Link>

      <div className={styles.topDiv}>
        {noTransDate && <p className={`gray7 ${styles.date}`}>{noTransDate}</p>}
        {noTransDate && (
          <span className={isUpcoming ? styles.upcoming : styles.past}>
            {isUpcoming
              ? t("eventsPage.events.upcoming")
              : t("eventsPage.events.past")}
          </span>
        )}
      </div>

      <div>
        <h2 className="heading4 color4">
          {transTitle.length > 40
            ? `${transTitle.slice(0, 40)}...`
            : transTitle}
        </h2>
        <p className="paragraph gray7">
          {transDescription.length > 80
            ? `${transDescription.slice(0, 80)}...`
            : transDescription}
        </p>
      </div>

      <Link href={`/${locale}/events/${id}`} className={styles.button}>
        {t("eventsPage.events.button")}
        <FaArrowRightLong />
      </Link>
    </div>
  );
}
