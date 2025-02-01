import styles from "./events.module.css";
import ServerCard from "./card/ServerCard";
import { useLocale } from "next-intl";
import { defaultLocale } from "@/Manager/navigation";
import { getTranslations } from "next-intl/server";
import { events, EventProps } from "../eventsData";
import { giSvg } from "@/public/image";
import Image from "next/image";

export const revalidate = 86400; // Revalidate once a day

export default async function Events({ mini }: { mini?: boolean }) {
  const locale = useLocale();
  const t = await getTranslations("");

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
        <div className={`${!mini && styles.paddingTop}`}>
          <div className={` ${styles.iconTextDiv}`}>
            <Image src={giSvg} width={50} height={70} alt="" />
            <h2 className="heading3 color3">{t("eventsPage.events.title")}</h2>
          </div>
          <div className={` ${styles.eventsWrapper}`}>
            {mini
              ? sortedEvents.slice(0, 2).map(
                  (
                    event: EventProps // Only the first two events
                  ) => <ServerCard key={event.id} {...event} />
                )
              : sortedEvents.map(
                  (
                    event: EventProps // All events when mini is false
                  ) => <ServerCard key={event.id} {...event} />
                )}
          </div>
        </div>
      </div>
    </section>
  );
}
