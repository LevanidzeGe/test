import styles from "./Lessons.module.css";
import HeadLine from "../miniComponents/HeadLine";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { lessonGroups } from "./lessonsData";

export default async function Lessons() {
  const t = await getTranslations("homePage.contactDetails");
  const locale = await getLocale();

  return (
    <section className="section">
      <div className="container">
        {/* <HeadLine title={t("tag1")} /> */}
        <div className={styles.wrapper}>
          {lessonGroups.map((group) => (
            <div key={group.id} className={styles.card}>
              <Image
                src={group.image}
                alt={group.title[locale]}
                className={styles.image}
                width={300}
                height={200}
                placeholder="blur"
              />
              <h3 className="heading4">{group.title[locale]}</h3>
              <p className={styles.age}>
                {group.ageLabel[locale]}: {group.age}
              </p>
              <ul className={styles.hours}>
                {group.hours.map((h, i) => (
                  <li key={i}>
                    <strong>{h.label[locale]}:</strong> {h.time}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
