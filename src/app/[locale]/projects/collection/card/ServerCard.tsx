import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/lib/firebase/types";
import { FaArrowRightLong } from "react-icons/fa6";
import { getLocale } from "next-intl/server";

export default async function ServerCard({
  id,
  images,
  transTitle,
  transDescription,
  noTransDate,
  transTag,
  readMore,
}: ReturnTypeOfExtract & { readMore: string }) {
  const locale = await getLocale();

  return (
    <div className={styles.cardWrapper}>
      <Link href={`/${locale}/projects/${id}`} className={styles.imageWrapper}>
        {images && images[0] && (
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
        {noTransDate && (
          <p className={`gray5 caption-mini ${styles.date}`}>{noTransDate}</p>
        )}
        <p className={`gray7 caption-mini ${styles.caption}`}>{transTag}</p>
      </div>

      <div>
        <h2 className="heading3 color4">
          {transTitle && transTitle.length > 40
            ? `${transTitle.substring(0, 40)}...`
            : transTitle}
        </h2>
        <p className="paragraph gray7">
          {transDescription && transDescription.length > 80
            ? `${transDescription.substring(0, 80)}...`
            : transDescription}
        </p>
      </div>

      <Link href={`/${locale}/projects/${id}`} className={styles.button}>
        {readMore}
        <FaArrowRightLong />
      </Link>
    </div>
  );
}
