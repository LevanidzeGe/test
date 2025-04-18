import styles from "./SquaresTextPhoto.module.css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { childrenTeam } from "@/public/image";
import HeadLine from "../miniComponents/HeadLine";

export default function SquaresTextPhoto() {
  const t = useTranslations("homePage.componentTwo");
  return (
    <section className="section ">
      <div className="container">
        <HeadLine title={t("text1")} />

        <div className={` ${styles.wrapper}`}>
          <div className={styles.middleDiv}>
            <div className={styles.firstBox}>
              <h3 className="heading2 white">{t("text3")}</h3>
              <p className="paragraph gray0">{t("text4")}</p>
            </div>
            <Image
              width={800}
              height={300}
              alt=""
              src={childrenTeam}
              className={styles.secondBox}
            ></Image>
            <div className={styles.thirdBox}>
              <h3 className="heading2 white">{t("text5")}</h3>
              <p className="paragraph gray0">{t("text6")}</p>
            </div>
          </div>
          <div className={styles.lowerDiv}>
            <div className={styles.fourthBox}>
              <h3 className="heading2 white">{t("text7")}</h3>
              <p className="paragraph gray0">{t("text8")}</p>
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
      </div>
    </section>
  );
}
