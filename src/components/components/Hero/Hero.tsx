import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import {
  childrenTeam,
  giorgiSofia,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  judoChildren,
} from "@/public/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function MainImage() {
  const t = await getTranslations("homePage.hero");
  const locale = await getLocale();
  const judoImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];
  const shuffledImages = [...judoImages].sort(() => 0.5 - Math.random());

  return (
    <section className={` section  no-padding-y  ${styles.mainWrapper}`}>
      <div className={`container`}>
        <div className={styles.wrapper}>
          <div className={styles.leftDiv}>
            <div>
              <span className="heading2 primary3"> Geneva Champel</span>
              <h1 className="heading1 primary8">
                Judo Club Geo <br /> de Genève
              </h1>
              <div className={styles.title}>
                <h2 className="heading3 secondary7">
                  Study the ar of Judo in Geneva with our beautiful somee text
                  here and so one ...
                </h2>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Link className="button" href={`${locale}/registration`}>
                {t("button2")}
              </Link>
              <Link
                className="button button-reverse "
                href={`${locale}/contact`}
              >
                {t("button1")}
              </Link>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <div className={styles.overlay}></div>
            <div className={styles.judoGrid}>
              {shuffledImages.slice(0, 10).map((img, i) => (
                <div key={i} className={styles.judoImageWrapper}>
                  <Image
                    src={img}
                    alt={`judo-${i}`}
                    fill
                    className={styles.judoImage}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
