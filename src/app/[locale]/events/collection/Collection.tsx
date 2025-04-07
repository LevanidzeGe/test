import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import ServerCard from "./card/ServerCard";
import { collectionRoute1, companyRoute } from "@/src/Manager/info";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import Image from "next/image";
import { giSvg } from "@/public/image";
import type { ReturnTypeOfExtract } from "@/src/lib/firebase/types";

export default async function Collection({ mini }: { mini?: boolean }) {
  const locale = await getLocale();
  const t = await getTranslations("");

  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const items = collection?.items ? Object.values(collection.items) : [];
  const extractedCollection = items
    .map((item) => extractCollectionFields(item, locale))
    .filter((item) => !item.itemActive);

  const sortedCollection = extractedCollection.sort((a, b) => {
    const aHasTrue =
      typeof a.boolOption1 === "object"
        ? Object.values(a.boolOption1 || {}).some((v) => v === true)
        : a.boolOption1 === true;

    const bHasTrue =
      typeof b.boolOption1 === "object"
        ? Object.values(b.boolOption1 || {}).some((v) => v === true)
        : b.boolOption1 === true;

    if (aHasTrue && !bHasTrue) return -1;
    if (!aHasTrue && bHasTrue) return 1;

    // fallback: sort by date
    const dateA = a.noTransOption1 ? new Date(a.noTransOption1).getTime() : 0;
    const dateB = b.noTransOption1 ? new Date(b.noTransOption1).getTime() : 0;
    return dateB - dateA;
  });

  // down here is the fucntion that was working on local data
  const withTimestamps = sortedCollection.map((event) => ({
    ...event,
    timestamp: event.noTransOption1
      ? new Date(event.noTransOption1).getTime()
      : 0,
  }));

  // 🕓 Sort by most recent timestamp (desc)
  const sortedEvents = withTimestamps.sort(
    (a, b) => (b.timestamp ?? 0) - (a.timestamp ?? 0)
  );

  // 🗓️ Filter upcoming and past events
  const upcomingEvents = sortedEvents
    .filter((event) => event.timestamp > Date.now())
    .sort((a, b) => a.timestamp - b.timestamp); // Closest upcoming first

  const pastEvents = sortedEvents.filter(
    (event) => event.timestamp <= Date.now()
  );

  // 🆕 Mini Mode: Show the 2 events closest to today's date (future or past)
  const mostRecentEvents = sortedEvents
    .sort(
      (a, b) =>
        Math.abs(a.timestamp - Date.now()) - Math.abs(b.timestamp - Date.now())
    )
    .slice(0, 2);

  return (
    <>
      <section className="section section-light">
        <div className={`container ${!mini && styles.container}`}>
          {/* 📅 Upcoming Events Section */}
          <div className={`${!mini && styles.paddingTop}`}>
            <div className={styles.iconTextDiv}>
              <Image src={giSvg} width={50} height={70} alt="Upcoming Events" />
              <h2 className="heading3 color4">
                {mini
                  ? t("eventsPage.events.recentEvents")
                  : t("eventsPage.events.upcomingEvents")}
              </h2>
            </div>
            <div className={styles.eventsWrapper}>
              {!mini &&
                upcomingEvents.map((event: ReturnTypeOfExtract) => (
                  <ServerCard key={event.id} {...event} />
                ))}

              {mini &&
                mostRecentEvents.map((event: ReturnTypeOfExtract) => (
                  <ServerCard key={event.id} {...event} />
                ))}
            </div>
            {mini && (
              <Link
                href={`${locale}/events`}
                className={`${styles.button} button button-reverse`}
              >
                {t("eventsPage.events.seeAll")}
              </Link>
            )}
          </div>

          {/* ⏳ Past Events Section */}
          {!mini && (
            <div className={`${!mini && styles.paddingTop}`}>
              <div className={styles.iconTextDiv}>
                <Image src={giSvg} width={50} height={70} alt="Past Events" />
                <h2 className="heading3 color6">
                  {t("eventsPage.events.pastEvents")}
                </h2>
              </div>
              <div className={styles.eventsWrapper}>
                {pastEvents.map((event: ReturnTypeOfExtract) => (
                  <ServerCard key={event.id} {...event} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
