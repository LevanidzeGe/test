import React from "react";
import styles from "./ServerCard.module.css";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "../../../../../../lib/firebase/types";
import AlbumSlider from "../AlbumSlider/AlbumSlider";
import { GrBottomCorner } from "react-icons/gr";
import Divider from "@/src/components/components/Divider/Divider";

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
    <>
      <section className="section">
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
              <h2 className="heading3 gray5">{transTitle}</h2>
              <p className="paragraph gray7">{transDescription}</p>
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
      <Divider />
    </>
  );
}
