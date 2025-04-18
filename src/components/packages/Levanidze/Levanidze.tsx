"use client";
import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "./bg.svg";
import photo from "./photo.jpg";
import web from "./web.jpg";
import { useTranslations } from "next-intl";
import { IoShareOutline } from "react-icons/io5";
import { companyDomain } from "@/src/manager/info";

export default function Levanidze() {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Levanidze.com",
        text: "Check out Levanidze's digital business card:",
        url: `${companyDomain}/images/digitalBusinesCard.png`,
      });
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Share failed:", err);
      }
    }
  };

  const t = useTranslations("levanidze");
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.darkBg}></div>
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="vector background"
      />
      <div className={styles.textWrap}>
        <h2 className={styles.textDropShadow}>
          Website and Photography Provider
        </h2>
        <Link href="https://levanidze.com" className={styles.textDropShadow}>
          www.Levanidze.com
        </Link>
      </div>
      <section className={`section`}>
        <div className="container relative">
          <div className={styles.wrapper}>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com" target="_blank">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      className="lift shadow3"
                      src={photo}
                      width={600}
                      height={400}
                      alt={`Photographer ${companyDomain} ${t("title1")}`}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      className="lift shadow3"
                      src={web}
                      width={600}
                      height={400}
                      alt="Website designer Levanidze.com"
                    />
                  </div>
                </div>
              </Link>
            </div>
            <div className={styles.cardDiv}>
              <Link href="https://levanidze.com" target="_blank">
                <div className={styles.cardInner}>
                  <div className={styles.cardFront}>
                    <Image
                      className="lift shadow3"
                      src={web}
                      width={600}
                      height={400}
                      alt={`Photographer ${companyDomain}`}
                    />
                  </div>
                  <div className={styles.cardBack}>
                    <Image
                      className="lift shadow3"
                      src={photo}
                      width={600}
                      height={400}
                      alt={`Website designer ${companyDomain}`}
                    />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
