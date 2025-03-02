import React from "react";
import styles from "./WorkHours.module.css";
import { useTranslations } from "next-intl";

export default function WorkHours() {
  const t = useTranslations("footer");
  return (
    <div className={styles.eachWrapper}>
      <h2 className="heading4">{t("title3")}</h2>
      <ul>
        <li className={styles.eventWrap}>
          <p className="paragraph-bold">{t("monday")}</p>
          <h3 className="paragraph">17:30 - 19:15</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="paragraph-bold">{t("wednsday")}</p>
          <h3 className="paragraph">16:45 - 17:45</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="paragraph-bold">{t("thursday")}</p>
          <h3 className="paragraph">17:00 - 18:45</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="paragraph-bold">{t("friday")}</p>
          <h3 className="paragraph">17:00 - 19:00</h3>
        </li>
      </ul>
    </div>
  );
}
