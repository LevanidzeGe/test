import styles from "./ComponentTwo.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { childrenTeam } from "@/public/image";

export default function ComponentTwo() {
  const t = useTranslations("homePage.componentTwo");
  return (
    <section className="section ">
      <div className={`container ${styles.wrapper}`}>
        <div className={styles.upperDiv}>
          <h2 className=" heading2 color4">{t("text1")}</h2>
          <h3 className="heading3 gray5">{t("text2")}</h3>
        </div>
        <div className={styles.middleDiv}>
          <div className={styles.firstBox}>
            <h3 className="heading2 white">{t("text3")}</h3>
            <p className="paragraph gray3">{t("text4")}</p>
          </div>
          <Image
            width={800}
            height={300}
            alt=""
            src={childrenTeam}
            className={styles.secondBox}
          ></Image>
          <div className={styles.thirdBox}>
            <h3 className="heading3 white">{t("text5")}</h3>
            <p className="paragraph gray3">{t("text6")}</p>
          </div>
        </div>
        <div className={styles.lowerDiv}>
          <div className={styles.fourthBox}>
            <h3 className="heading2 white">{t("text7")}</h3>
            <p className="paragraph gray3">{t("text8")}</p>
          </div>
          <Image
            width={800}
            height={300}
            alt=""
            src={childrenTeam}
            className={styles.fifthBox}
          ></Image>
        </div>
      </div>
    </section>
  );
}
