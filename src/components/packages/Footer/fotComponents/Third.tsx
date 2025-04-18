import React from "react";
import styles from "./Third.module.css";
import { useTranslations } from "next-intl";

export default function Third() {
  const t = useTranslations("footer");
  return (
    <section>
      <h2 className="heading4">{t("title3")}</h2>
      <ul>
        <li className={styles.eventWrap}>
          <p className="caption">{t("monday")}</p>
          <h3 className="caption">17:30 - 19:15</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="caption">{t("wednsday")}</p>
          <h3 className="caption">16:45 - 17:45</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="caption">{t("thursday")}</p>
          <h3 className="caption">17:00 - 18:45</h3>
        </li>
        <li className={styles.eventWrap}>
          <p className="caption">{t("friday")}</p>
          <h3 className="caption">17:00 - 19:00</h3>
        </li>
      </ul>
    </section>
  );
}
