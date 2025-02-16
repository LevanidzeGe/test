import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import {
  circleL,
  circleM,
  circleS,
  gardeningTractor,
  wave,
} from "@/public/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function MainImage() {
  const t = useTranslations("homePage.hero");
  const locale = useLocale();
  return (
    <section className={`section section-medium no-padding-x no-padding-y`}>
      <div className={styles.wrapper}>
        <div className={`section ${styles.leftDiv}`}>
          <h1 className="heading1">{t("title1")}</h1>
          <div className={styles.title}>
            <h2 className="heading2 gray7">{t("title2")}</h2>
          </div>
          <div className={styles.buttonContainer}>
            <Link className="button button-reverse" href={`${locale}/contact`}>
              {t("button1")}
            </Link>
            {/* <Link className="button" href={`${locale}/registration`}>
              {t("button2")}
            </Link> */}
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <Image
            src={gardeningTractor}
            width={1200}
            height={2000}
            alt="children judo"
          />
        </div>
        <Image
          className={styles.vector}
          src={wave}
          alt=""
          width={1000}
          height={500}
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.circles}>
        <Image
          className={styles.circleL}
          src={circleL}
          width={500}
          height={500}
          alt="vector circle"
        />
        <Image
          className={styles.circleS}
          src={circleS}
          width={500}
          height={500}
          alt="vector circle"
        />
        <Image
          className={styles.circleM}
          src={circleM}
          width={500}
          height={500}
          alt="vector circle"
        />
      </div>
    </section>
  );
}
