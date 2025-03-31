import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import { giIconSvg, judoChildren } from "@/public/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function MainImage() {
  const t = await getTranslations("homePage.hero");
  const locale = await getLocale();
  return (
    <div
      className={` section no-padding ${styles.mainWrapper} ${styles.outline}`}
    >
      <div className="container">
        <div className={styles.overlay}>
          <div className={styles.leftDiv}>
            <div>
              <h1 className="heading1">GEO JUDO</h1>
              <div className={styles.title}>
                <h2 className="heading2">{t("title1")}</h2>
                <h2 className="heading2">{t("title2")}</h2>
              </div>
            </div>
            <div className={styles.buttonContainer}>
              <Link
                className="button button-reverse"
                href={`${locale}/contact`}
              >
                {t("button1")}
              </Link>
              <Link className="button" href={`${locale}/registration`}>
                {t("button2")}
              </Link>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <div className={styles.topDiv}>
              <div>
                <p>95+</p>
                <span>{t("text1")}</span>
              </div>
              <div>
                <p>15+</p>
                <span>{t("text2")}</span>
              </div>
            </div>
            <div className={styles.imagesDiv}>
              <Image
                src={judoChildren}
                width={1000}
                height={1000}
                alt="children judo"
              ></Image>
            </div>
          </div>
        </div>
        <Image
          className={styles.mainImage}
          src={giIconSvg}
          alt=""
          width={1200}
          height={800}
          priority
        />
      </div>
    </div>
  );
}
