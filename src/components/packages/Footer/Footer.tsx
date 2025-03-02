import React from "react";
import styles from "./Footer.module.css";
import Navigation from "./fotComponents/Navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { footerWave } from "@/public/image";
import { companyName } from "@/Manager/info";
import DropDownNav from "./fotComponents/DropDownNav";
import ContactInfo from "./fotComponents/ContactInfo";
import LogoFooter from "./fotComponents/LogoFooter";
// import WorkHours from "./fotComponents/WorkHours";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className={styles.footMainWrapper}>
      <Image
        className={styles.wave}
        src={footerWave}
        width={1000}
        height={150}
        alt="vector"
      />
      <section className="section">
        <div className="container">
          <div className={styles.footWrapper}>
            <LogoFooter />
            <ContactInfo title={t("title1")} />
            <DropDownNav />
            <Navigation title={t("title2")} />
            {/* <WorkHours /> */}
          </div>
          <div className={styles.copyRgiht}>
            <p className="heading5 white">Copyright </p>
            <span className="heading5 white">{companyName}</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
