import styles from "./EventDetails.module.css";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ProjectProps } from "../../projectsData";
import { defaultLocale } from "@/Manager/navigation";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import { babyIcon } from "@/public/image";

interface EventDetailsProps {
  event: ProjectProps;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const locale = useLocale();

  // Get localized content with fallback to defaultLocale
  const translation =
    event.translations[locale] || event.translations[defaultLocale];

  return (
    <article className={styles.eventDetailsWrapper}>
      <h2 className={`heading3 font1 color3 ${styles.title}`}>
        {translation.title}
      </h2>
      <div className={styles.imgWrapper}>
        <AlbumSlider images={event.images} />
      </div>

      <div className={styles.infoWrapper}>
        {event.timestamp && (
          <p className={`gray5 paragraph ${styles.date}`}>
            {new Date(event.timestamp).toLocaleDateString(locale)}
          </p>
        )}
        <p className={`paragraph gray7 ${styles.description}`}>
          {translation.description}
        </p>
      </div>
    </article>
  );
}
