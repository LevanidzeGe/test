import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/src/lib/firebase/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocale, getTranslations } from "next-intl/server";
import { eventPlaceholder } from "@/public/image";
import { dynamicPageRoute1 } from "@/src/manager/navigation";

export default async function ServerCard({
  id,
  images,
  transOption1,
  transOption2,
  noTransOption1,
}: ReturnTypeOfExtract) {
  const locale = await getLocale();
  const t = await getTranslations();

  const eventTimestamp = new Date(noTransOption1).getTime();
  const isUpcoming = eventTimestamp > Date.now();

  return (
    <div className={styles.cardWrapper}>
      <Link
        href={`/${locale}/${dynamicPageRoute1}/${id}`}
        className={styles.imageWrapper}
      >
        <Image
          src={images[0] || eventPlaceholder}
          width={1000}
          height={700}
          alt={transOption1}
          loading="lazy"
          className={styles.image}
        />
      </Link>

      <div className={styles.topDiv}>
        {noTransOption1 && (
          <p className={`gray7 caption ${styles.date}`}>{noTransOption1}</p>
        )}
        {noTransOption1 && (
          <span className={isUpcoming ? styles.upcoming : styles.past}>
            {isUpcoming
              ? t("eventsPage.events.upcoming")
              : t("eventsPage.events.past")}
          </span>
        )}
      </div>

      <div className={styles.textWrap}>
        <div>
          <h2
            className={` heading4  ${isUpcoming ? "primary8" : "secondary9"}`}
          >
            {transOption1.length > 40
              ? `${transOption1.slice(0, 40)}...`
              : transOption1}
          </h2>
          <p className="paragraph gray7">
            {transOption2.length > 80
              ? `${transOption2.slice(0, 80)}...`
              : transOption2}
          </p>
        </div>

        <Link
          href={`/${locale}/${dynamicPageRoute1}/${id}`}
          className={`${styles.button} ${
            isUpcoming ? "button" : "button-reverse button"
          }`}
        >
          {t("eventsPage.events.button")}
          <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}
