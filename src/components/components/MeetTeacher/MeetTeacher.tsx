import Image from "next/image";
import styles from "./MeetTeacher.module.css";
import { giSvg, giorgiSofia } from "@/public/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";
import HeadLine from "../miniComponents/HeadLine";

export default async function MeetTeacher() {
  const t = await getTranslations("homePage.componentThree");
  const locale = await getLocale();
  return (
    <section className="section">
      <div className="container">
        <div className={styles.mainWrapper}>
          <div className={styles.leftDiv}>
            <HeadLine title={t("title1")} />
            <div className={styles.middleDiv}>
              <h3 className="heading3 primary6">{t("title2")}</h3>
              <p className="paragraph gray7">{t("text1")}</p>
              <Link
                className="button button-reverse heading4"
                href={`${locale}/registration`}
              >
                {t("button")}
              </Link>
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
