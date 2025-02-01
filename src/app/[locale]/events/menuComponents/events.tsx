import styles from "./events.module.css";
import ServerCard from "./card/ServerCard";
import { useLocale } from "next-intl";
import { defaultLocale } from "@/Manager/navigation";
import { getTranslations } from "next-intl/server";
import { events, EventProps } from "../eventsData";

export const revalidate = 86400; // Revalidate once a day

export default async function Events() {
  const locale = useLocale();
  const t = await getTranslations("menuPage.menu");

  if (!events) {
    return (
      <div>
        <p>Error fetching events data</p>
      </div>
    );
  }

  const sortedEvents = events.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  return (
    <section className="section section-medium">
      <div className={`container ${styles.container}`}>
        <div className={styles.eventsWrapper}>
          {sortedEvents.map((event: EventProps) => (
            <ServerCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
