"use client";

import { useState } from "react";
import styles from "./Accordion.module.css";
import { accordionItems } from "./dataAccordion";
import { useLocale } from "next-intl";

export default function Accordion({ title }: { title: string }) {
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="section no-padding-y">
      <div className="container">
        <h5 className={`heading2 color4 ${styles.headTitle}`}>{title}</h5>
        <div className={styles.accordion}>
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className={`${styles.eachAccordion} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className={styles.head}>
                <h6
                  className={`heading5 ${
                    activeIndex === index ? styles.titleActive : styles.title
                  }`}
                >
                  {item.title[locale]}
                </h6>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.content} ${
                  activeIndex === index ? styles.show : styles.hide
                }`}
              >
                <p className="paragraph">{item.content[locale]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
