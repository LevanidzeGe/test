import styles from "./Lessons.module.css";
import HeadLine from "../miniComponents/HeadLine";
import Image from "next/image";
import { getTranslations, getLocale } from "next-intl/server";
import { lessonGroups } from "./lessonsData";

export default async function Lessons() {
  const t = await getTranslations("homePage.lessons");
  const locale = await getLocale();

  return (
    <section className="section">
      <div className="container">
        <HeadLine title={t("title1")} />
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
              <h3 className="heading3 white">
                {/* {group.title[locale]} */}
                {""}
              </h3>
              <p className={`gray0 heading4 ${styles.age}`}>
                {group.ageLabel[locale]}: {group.age}
              </p>
              <ul className={styles.hours}>
                {group.hours.map((h, i) => (
                  <li key={i} className="gray0 paragraph">
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
