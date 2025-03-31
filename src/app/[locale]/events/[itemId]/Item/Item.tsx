import styles from "./Item.module.css";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import type { ReturnTypeOfExtract } from "@/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  const t = await getTranslations("projectsPage.projects");
  const locale = await getLocale();

  return (
    <article className={styles.eventDetailsWrapper}>
      <h2 className={`heading3 font1 color3 ${styles.title}`}>
        {item.transTitle}
      </h2>
      <div className={styles.imgWrapper}>
        <AlbumSlider
          images={item.images.map((src) => ({
            src,
            alt: item.transTitle || "",
          }))}
        />
      </div>
      <div className={styles.infoWrapper}>
        {item.noTransDate && (
          <p className={`gray5 paragraph ${styles.date}`}>
            {new Date(item.noTransDate).toLocaleDateString(locale)}
          </p>
        )}
        <p className={`paragraph gray7 ${styles.description}`}>
          {item.transDescription}
        </p>
      </div>
    </article>
  );
}
