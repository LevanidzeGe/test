import React from "react";
import styles from "./ComponentSix.module.css";
import Link from "next/link";
import Image from "next/image";
import { team } from "@/public/image";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ComponentSix() {
  const t = await getTranslations("homePage.componentSix");
  const locale = await getLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.container}>
          <h2 className="heading2 color4">{t("title1")}</h2>
          <div className={styles.wrapper}>
            <div className={styles.textDiv}>
              <div className="sideLineWrap">
                <div className="sideLine"></div>
                <h3 className="heading4 ">{t("title2")}</h3>
              </div>
              <h4 className="heading1 color4">{t("title3")}</h4>
              <p className="paragraph gray7">{t("text")}</p>
              <Link
                className="button button-reverse"
                href={`/${locale}/contact`}
              >
                {t("button")}
              </Link>
            </div>
            <div className={styles.imageDiv}>
              <Image src={team} width={800} height={800} alt="our team" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
