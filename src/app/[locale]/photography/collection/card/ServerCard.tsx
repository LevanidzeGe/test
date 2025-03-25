"use client";

import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "../../types"; // or define inline
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import AlbumSlider from "./AlbumSlider/AlbumSlider";

export default function ServerCard({
  id,
  images,
  transTitle,
  noTransDate,
  transDescription,
  readMore,
}: ReturnTypeOfExtract & { readMore: string }) {
  const locale = useLocale();

  return (
    <div className={styles.mainWrap}>
      {/* <Link href={`/${locale}/photography/${id}`}> */}
      {images && (
        <div className={styles.albumWrapper}>
          <AlbumSlider title={transTitle} images={images} />
        </div>
      )}

      {/* </Link> */}
      <div className={styles.textWrap}>
        <span className={styles.date}>{noTransDate}</span>
        <h2 className="header2 font1">{transTitle}</h2>
        <p className="paragraph">{transDescription}</p>
        <Link className="button " href={`/${locale}/photography/${id}`}>
          {readMore}
        </Link>
      </div>
    </div>
  );
}
