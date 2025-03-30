import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/lib/firebase/types"; // or define inline
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export default function ServerCard({
  id,
  images,
  transTitle,
  noTransDate,
  transTag,
  readMore,
  boolOption3,
  boolOption4,
  boolOption5,
  boolOption6,
  boolOption2,
  isLast,
}: ReturnTypeOfExtract & { readMore: string; isLast: boolean }) {
  const locale = useLocale();

  return (
    <>
      <section className="section no-padding-x">
        <div className="container">
          <div className={styles.mainWrap}>
            <div className={styles.textWrap}>
              <span className={` caption-mini gray7  ${styles.date}`}>
                {noTransDate}
              </span>
              <p className="parargraph font1 gray5">{transTag}</p>
              <h2 className="heading3 gray7">{transTitle}</h2>
              <div className={styles.spans}>
                {boolOption2 && <span>Web Design</span>}
                {boolOption3 && <span>Next Js</span>}
                {boolOption4 && <span>Photography</span>}
                {boolOption5 && <span>Webflow</span>}
                {boolOption6 && <span>Copyright</span>}
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
        </div>
      </section>
      {!isLast && <div className="thinLine"></div>}
    </>
  );
}
