import React from "react";
import styles from "./ServerCard.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "../../../../../../lib/firebase/types";
import AlbumSlider from "../AlbumSlider/AlbumSlider";
import { GrBottomCorner } from "react-icons/gr";

export default function ServerCard({
  id,
  images,
  transTitle,
  noTransDate,
  transDescription,
  readMore,
  isLast,
}: ReturnTypeOfExtract & { readMore: string; isLast: boolean }) {
  const locale = useLocale();

  return (
    <>
      <section className="section no-padding-x">
        <div className="container">
          <div className={styles.mainWrap}>
            {/* <Link href={`/${locale}/photography/${id}`}> */}
            {images && (
              <div className={styles.albumWrapper}>
                <AlbumSlider title={transTitle} images={images} />
              </div>
            )}

            {/* </Link> */}
            <div className={styles.textWrap}>
              <span className={`gray7 caption-mini  ${styles.date}`}>
                {noTransDate}
              </span>
              <h2 className="heading3 gray3">{transTitle}</h2>
              <p className="paragraph gray5">{transDescription}</p>
              <Link
                href={`/${locale}/photography/${id}`}
                className={styles.buttonPhoto}
              >
                <GrBottomCorner className="svg" />
                <GrBottomCorner className="svg" />
                <GrBottomCorner className="svg" />
                <GrBottomCorner className="svg" />
                {readMore}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {!isLast && <div className="thinLine"></div>}
    </>
  );
}
