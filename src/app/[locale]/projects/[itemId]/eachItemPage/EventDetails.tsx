import styles from "./EventDetails.module.css";
import { useLocale } from "next-intl";
import { ProjectProps } from "../../projectsData";
import AlbumSlider from "@/src/components/packages/AlbumSlider/AlbumSlider";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

interface EventDetailsProps {
  event: ProjectProps;
}

export default function EventDetails({ event }: EventDetailsProps) {
  const locale = useLocale();

  const translation = event.translations[locale];

  return (
    <>
      <Pageshead value1="title here" value2="everythhing that we do" />
      <section className={styles.eventDetailsWrapper}>
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
      </section>
    </>
  );
}
