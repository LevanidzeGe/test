import React from "react";
import styles from "./ComponentOne.module.css";
import Image, { StaticImageData } from "next/image";
import { useTranslations } from "next-intl";
interface ComponentOne {
  image: StaticImageData;
}

export default function ComponentOne({ image }: ComponentOne) {
  const t = useTranslations("homePage.componentOne");

  return (
    <section className="section">
      <div className="container no-padding-x">
        <div className={styles.wrapper}>
          <div className={styles.leftDiv}>
            <Image width={1500} height={1000} src={image} alt={t("title1")} />
            <div className={styles.boxOne}>
              <h4 className="heading2 white">+200</h4>
              <span className="heading4 white">Satisfied Client</span>
            </div>
            <div className={styles.boxTwo}>
              <h4 className="heading2 white">+10</h4>
              <span className="heading4 white">Years Experience</span>
            </div>
          </div>
          <div className={styles.textDiv}>
            <div className={""}>
              <div className="sideLineWrap">
                <div className="sideLine"></div>
                <h2 className="heading4">Who are we?</h2>
              </div>
            </div>
            <h3 className="heading2 color4">{t("title1")}</h3>
            <p className="paragraph">{t("text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
