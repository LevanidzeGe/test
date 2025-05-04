"use client";
import styles from "./Accordion.module.css";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import HeadLine from "../../components/miniComponents/HeadLine";
import { companyRoute } from "@/src/manager/navigation";
const faqRoute = "faq";

export default function Accordion({ title1 }: { title1: string }) {
  const [items, setItems] = useState<any[]>([]);
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  useEffect(() => {
    const loadFaqs = async () => {
      const collection = await fetchCollectionIfUpdated(companyRoute, faqRoute);
      const rawItems = collection?.items ? Object.values(collection.items) : [];

      const extracted = rawItems
        .map((item) => extractCollectionFields(item, locale))
        .filter((item) => !item.itemActive);

      setItems(extracted);
    };

    loadFaqs();
  }, [locale]);

  if (items.length < 1) return null;

  return (
    <section className="section">
      <div className="container">
        <HeadLine title={title1} />
        <div className={styles.accordion}>
          {items.map((item, index) => (
            <div
              key={index}
              className={`${styles.eachAccordion} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleClick(index)}
            >
              <div className={styles.head}>
                <h6
                  className={`heading4 ${
                    activeIndex === index ? styles.titleActive : styles.title
                  }`}
                >
                  {item.transOption1}
                </h6>
                <span>{activeIndex === index ? "-" : "+"}</span>
              </div>
              <div
                className={`${styles.content} ${
                  activeIndex === index ? styles.show : styles.hide
                }`}
              >
                <p className="paragraph">{item.transOption2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
