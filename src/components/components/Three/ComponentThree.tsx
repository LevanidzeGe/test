import Image from "next/image";
import styles from "./ComponentThree.module.css";
import { giSvg, giorgiSofia } from "@/public/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ComponentThree() {
  const t = await getTranslations("homePage.componentThree");
  const locale = await getLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.leftDiv}>
            <div className={styles.iconTextDiv}>
              <Image src={giSvg} height={50} width={50} alt="" />
              <h2 className="heading3 color4">{t("title1")}</h2>
            </div>
            <div className={styles.middleDiv}>
              <h2 className="heading2 color4">{t("title2")}</h2>
              <p className="paragraph">{t("text1")}</p>
              <Link
                className="button button-reverse heading4"
                href={`${locale}/registration`}
              >
                {t("button")}
              </Link>
            </div>
            <div className={styles.lowerDiv}>
              <h4 className="heading3 white">{t("title3")}</h4>
              <p className="paragraph gray3">{t("text2")}</p>
            </div>
          </div>
          <div className={styles.rightDiv}>
            <Image src={giorgiSofia} width={800} height={800} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
