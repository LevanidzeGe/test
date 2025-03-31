import styles from "./Item.module.css";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import type { ReturnTypeOfExtract } from "@/lib/firebase/types";
import { getTranslations } from "next-intl/server";

export default async function ItemJsx({ item }: { item: ReturnTypeOfExtract }) {
  const t = await getTranslations("projectsPage.projects");

  return (
    <section className={`section ${styles.eventDetailsWrapper}`}>
      <div>
        <div className={styles.container}>
          <div className="sideLineWrap">
            <div className="sideLine"></div>
            <p className="heading4">{item.transTag}</p>
          </div>
          <h2 className={`heading3 font1 color3 ${styles.title}`}>
            {item.transTitle}
          </h2>
          <div className={styles.infoWrapper}>
            <p className={`paragraph gray7 ${styles.description}`}>
              {item.transDescription}
            </p>
          </div>
        </div>

        {item.noTransDate && (
          <p className={`gray5 paragraph ${styles.date}`}>{item.noTransDate}</p>
        )}

        <div className={styles.imgWrapper}>
          <AlbumSlider images={item.images || []} />
        </div>
      </div>
    </section>
  );
}
