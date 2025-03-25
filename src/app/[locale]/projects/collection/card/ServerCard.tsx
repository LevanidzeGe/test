"use client";

import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "../../types"; // or define inline
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ServerCard({
  id,
  images,
  transTitle,
  noTransDate,
  transTag,
  readMore,
  boolOption1,
  boolOption2,
  boolOption3,
  boolOption4,
  boolOption5,
}: ReturnTypeOfExtract & { readMore: string }) {
  const locale = useLocale();

  return (
    <div className={styles.mainWrap}>
      <div className={styles.textWrap}>
        <span className={styles.date}>{noTransDate}</span>
        <p className="header5">{transTag}</p>
        <h2 className="header2 font1">{transTitle}</h2>
        <div className={styles.spans}>
          {boolOption1 && <span>Web Design</span>}
          {boolOption2 && <span>Next Js</span>}
          {boolOption3 && <span>Photography</span>}
          {boolOption4 && <span>Webflow</span>}
          {boolOption5 && <span>Copyright</span>}
        </div>
        <Link className="button " href={`/${locale}/projects/${id}`}>
          {readMore}
          <HiOutlineArrowNarrowRight />
        </Link>
      </div>
      <div>
        <Link href={`/${locale}/projects/${id}`}>
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
      </div>
    </div>
  );
}
