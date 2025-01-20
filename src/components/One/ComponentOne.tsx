import React from "react";
import styles from "./ComponentOne.module.css";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
interface ComponentOne {
  image: StaticImageData;
  reverse?: boolean;
}

export default function ComponentOne({ image, reverse }: ComponentOne) {
  const t = useTranslations("homePage.componentOne");

  return (
    <section className="section section-light">
      <div className="container">
        <div
          className={` ${reverse ? styles.reverse : ""}  ${
            styles.photoTextWrapper
          }`}
        >
          <Image
            src={image}
            height={1500}
            width={1000}
            alt="ss"
            className={styles.test}
          />
          <div className={` ${styles.textDiv}`}>
            <h2 className="heading2 color6 blueBg">Geo Judo</h2>
            <h2 className="heading3 ">{t("title1")}</h2>
            <h3 className="paragraph">{t("text")}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
