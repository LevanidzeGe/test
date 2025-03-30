import styles from "./WhatIDo.module.css";
import Link from "next/link";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { services } from "./dataWhatIdo";

export default async function WhatIDo() {
  const locale = await getLocale(); // ✅
  const t = await getTranslations("homePage.whatIdo");
  return (
    <section className="section">
      <div className="container">
        <div className={styles.whatIDoWrapper}>
          <div className={styles.h3}>
            <h3 className={`heading2 font2 ${styles.whatI}`}>{t("title1")}</h3>
            <h3 className={`heading2 font2 ${styles.do}`}>{t("title2")}</h3>
          </div>
          <div className={styles.sections}>
            {services.map((section, index) => (
              <div key={index}>
                <Image src={section.image} width={100} height={100} alt="" />
                <h4 className="heading5">{section.subtitle[locale]}</h4>
                <p className="paragraph gray5">
                  {section.description[locale]}
                  {section.link && (
                    <Link target="_blank" href={section.link}>
                      {section.linkText?.[locale]}
                    </Link>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
