import Image from "next/image";
import styles from "./Services.module.css";
import { camera, development, monitor } from "@/public/image";
import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function Services() {
  const locale = await getLocale();
  const t = await getTranslations("homePage.hero");
  return (
    <div className={styles.mainWrapper}>
      <h2 className="heading4 font3 ">{t("span2")}</h2>
      <div className={styles.socialCard}>
        <div className={styles.cardsWrapper}>
          <Link
            href={`/${locale}/projects`}
            className={`shadow5 lift ${styles.card}`}
          >
            <Image
              src={development}
              alt="development icon"
              width={80}
              height={80}
            />
            <div>
              <h3 className="font2"> {t("title4")}</h3>
            </div>
          </Link>
          <Link
            href={`/${locale}/photography`}
            className={`shadow5 lift ${styles.card}`}
          >
            <Image src={camera} alt="photography icon" width={80} height={80} />
            <div>
              <h3 className="font2"> {t("title5")}</h3>
            </div>
          </Link>
          <Link
            href={`/${locale}/projects`}
            className={`shadow5 lift ${styles.card}`}
          >
            <Image src={monitor} alt="  icon" width={80} height={80} />
            <div>
              <h3 className="font2"> {t("title6")}</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
