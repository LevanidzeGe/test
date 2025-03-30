"use client";
import styles from "./Levanidze.module.css";
import Image from "next/image";
import Link from "next/link";
import bg from "./bg.svg";
import photo from "./photo.jpg";
import web from "./web.jpg";
import { useTranslations } from "next-intl";
import { IoShareOutline } from "react-icons/io5";
import { companyDomain } from "@/Manager/info";

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
      <Image
        className={styles.background}
        src={bg}
        height={500}
        width={1400}
        alt="levanidze.com vector background"
      />
      <div className={styles.shareDiv} onClick={handleShare}>
        <p className="heading5 font2 yellow2">{t("title1")}</p>
        <IoShareOutline className="heading3" />
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
