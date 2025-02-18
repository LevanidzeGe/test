import React from "react";
import styles from "./ComponentSeven.module.css";
import { useLocale } from "next-intl";
import { aboutData } from "./aboutData";

export default function ComponentSeven() {
  const locale = useLocale();
  return (
    <section className="section ">
      <div className="container">
        <div className={styles.wrapper}>
          <div className="sideLineWrap">
            <div className="sideLine"></div>
            <h2 className="heading4">Företagets historia</h2>
          </div>
          <h3 className="heading2 color4">
            Din pålitliga partner för experttjänster inom trädgårds och
            landskapsarbete.
          </h3>
          {aboutData.map((item, index) => (
            <div key={index} className={styles.item}>
              <h4 className="heading3 color4"> - {item.title[locale]}</h4>
              <p className="paragraph gray9">{item.text[locale]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
