import {
  heroBG,
  heroScreens,
  meBuble,
  meCactus,
  meCamera,
} from "@/public/image";
import styles from "./Hero.module.css";
import Image from "next/image";
import { companyDomain } from "@/Manager/info";
import Services from "./Services/Services";
import SocialMedia from "../SocMedia/SocialMedia";
import { getTranslations } from "next-intl/server";

export default async function Hero() {
  const t = await getTranslations("homePage.hero");
  return (
    <div className={styles.heroWrapper}>
      <Image
        className={styles.bgImage}
        alt="vector background"
        src={heroBG}
        width={1300}
        height={1000}
      />
      <section className={`section no-padding-y  `}>
        <div className="container">
          <div className={styles.heroInnerWrapper}>
            <div className={styles.topDiv}>
              <div className={styles.textDiv}>
                <div>
                  <span className="headin5 font2 gray3">{t("span1")}</span>
                  <h1 className="heading1">
                    <strong className="red2"> {t("title1")} </strong>{" "}
                    {t("title2")}
                    <br />
                    {t("title3")}
                  </h1>

                  <h2 className="heading5 font2 gray5">{t("text1")}</h2>

                  <div className={`buttonCard ${styles.button}`}>
                    <span></span>
                    <p></p>
                    <button>{t("button1")}</button>
                  </div>
                </div>
                <Image
                  className={styles.buble}
                  src={meBuble}
                  alt={`${companyDomain} 3d cartoon`}
                  width={200}
                  height={400}
                />
              </div>
            </div>
            <div className={styles.middleDiv}>
              <Image
                className={styles.monitors}
                src={heroScreens}
                width={1500}
                height={700}
                alt={`${companyDomain} hero design`}
              />
              <div className={styles.cameraCactus}>
                <Image
                  className={styles.camera}
                  src={meCamera}
                  width={250}
                  height={250}
                  alt={`${companyDomain} hero design`}
                />
                <Image
                  className={styles.cactus}
                  src={meCactus}
                  alt="monitor icon"
                  width={300}
                  height={250}
                />
              </div>
            </div>
            <Services />
            <SocialMedia />
          </div>
        </div>
      </section>
    </div>
  );
}
