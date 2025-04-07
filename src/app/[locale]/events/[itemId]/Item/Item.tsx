import styles from "./Item.module.css";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import type { ReturnTypeOfExtract } from "@/src/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  const t = await getTranslations("projectsPage.projects");
  const locale = await getLocale();

  return (
    <article className={styles.eventDetailsWrapper}>
      <h2 className={`heading3 font1 color3 ${styles.title}`}>
        {item.transOption1}
      </h2>
      <div className={styles.imgWrapper}>
        <AlbumSlider
          images={item.images.map((src) => ({
            src,
            alt: item.transOption1 || "",
          }))}
        />
      </div>
      <div className={styles.infoWrapper}>
        {item.noTransOption1 && (
          <p className={`gray5 paragraph ${styles.date}`}>
            {new Date(item.noTransOption1).toLocaleDateString(locale)}
          </p>
        )}
        <p className={`paragraph gray7 ${styles.description}`}>
          {item.transOption2}
        </p>
      </div>
    </article>
  );
}
