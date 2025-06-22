import React from "react";
import styles from "./Story.module.css";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
import HeadLine from "../miniComponents/HeadLine";
interface ComponentOne {
  image: StaticImageData;
  reverse?: boolean;
}

export default function Story({ image, reverse }: ComponentOne) {
  const t = useTranslations("homePage.componentOne");

  return (
    <section className="section ">
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
            <HeadLine title="Judo Club Geo de Genève " />
            <h3 className="heading3 gray8">{t("title1")}</h3>
            <p className="paragraph">{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
