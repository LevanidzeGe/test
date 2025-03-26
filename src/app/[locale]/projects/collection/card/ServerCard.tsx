import React from "react";
import styles from "./ServerCard.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import Link from "next/link";
import { ReturnTypeOfExtract } from "@/lib/firebase/types"; // or define inline
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Divider from "@/src/components/components/Divider/Divider";

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
    <>
      <section className="section">
        <div className="container">
          <div className={styles.mainWrap}>
            <div className={styles.textWrap}>
              <span className={` caption-mini gray7  ${styles.date}`}>
                {noTransDate}
              </span>
              <p className="parargraph font1 gray5">{transTag}</p>
              <h2 className="heading3 gray7">{transTitle}</h2>
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
        </div>
      </section>
      <Divider />
    </>
  );
}
