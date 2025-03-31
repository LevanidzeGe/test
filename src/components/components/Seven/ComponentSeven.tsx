import React from "react";
import styles from "./ComponentSeven.module.css";
import { aboutData } from "./aboutData";
import TopBorder from "../borderShapes/TopBorder";
import BottomBorder from "../borderShapes/BottomBorder";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ComponentSeven() {
  const t = await getTranslations("aboutPage.componentSeven");
  const locale = await getLocale();
  return (
    <>
      <TopBorder />
      <section className="section section-medium ">
        <div className="container">
          <div className={styles.wrapper}>
            <div className="sideLineWrap">
              <div className="sideLine"></div>
              <h2 className="heading4">{t("title1")}</h2>
            </div>
            <h3 className="heading2 color4">{t("title2")} </h3>
            {aboutData.map((item, index) => (
              <div key={index} className={styles.item}>
                <h4 className="heading3 color4"> - {item.title[locale]}</h4>
                <p className="paragraph gray9">{item.text[locale]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <BottomBorder />
    </>
  );
}
