import React from "react";
import styles from "./ComponentOne.module.css";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import { giIconSvg, giSvg } from "@/public/image";
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
            className={styles.image}
            src={image}
            height={1500}
            width={1000}
            alt="ss"
          />
          <div className={styles.textDiv}>
            <div className={`blueBg ${styles.iconTextDiv}`}>
              <Image src={giSvg} width={50} height={70} alt="" />
              <h2 className="heading2 color6">Geo Judo</h2>
            </div>
            <h3 className="heading3 color3">{t("title1")}</h3>
            <p className="paragraph">{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
