import { fetchCollectionIfUpdated } from "@/src/lib/firebase/getFirebaseData";
import ServerCard from "./card/ServerCard";
import { collectionRoute1, companyRoute } from "@/src/manager/info";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "@/src/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";
import type { ReturnTypeOfExtract } from "@/src/lib/firebase/types";
import HeadLine from "@/src/components/components/miniComponents/HeadLine";

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
  let mostRecentEvents: ReturnTypeOfExtract[] = [];

  // === 1. Find closest featured upcoming event ===
  const featuredUpcoming = upcomingEvents.find((event) => {
    if (typeof event.boolOption1 === "object") {
      return Object.values(event.boolOption1).some((v) => v === true);
    }
    return event.boolOption1 === true;
  });

  // Fallback to any closest upcoming
  const fallbackUpcoming = upcomingEvents[0];

  // === 2. Find closest featured past event ===
  const featuredPast = pastEvents.find((event) => {
    if (typeof event.boolOption1 === "object") {
      return Object.values(event.boolOption1).some((v) => v === true);
    }
    return event.boolOption1 === true;
  });

  // Fallback to any closest past
  const fallbackPast = pastEvents[0];

  // === 3. Push into mostRecentEvents (prioritize featured) ===
  if (featuredUpcoming) {
    mostRecentEvents.push(featuredUpcoming);
  } else if (fallbackUpcoming) {
    mostRecentEvents.push(fallbackUpcoming);
  }

  if (featuredPast) {
    mostRecentEvents.push(featuredPast);
  } else if (fallbackPast) {
    mostRecentEvents.push(fallbackPast);
  }

  return (
    <section className={`section ${mini && "section-light"}`}>
      <div className={`container ${!mini && styles.container}`}>
        <HeadLine
          title={
            mini
              ? t("eventsPage.events.recentEvents")
              : t("eventsPage.events.upcomingEvents")
          }
        />
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

        {/* ⏳ Past Events Section */}
        {!mini && (
          <div className={styles.paddingTop}>
            <HeadLine title={t("eventsPage.events.pastEvents")} secondary />
            <div className={styles.eventsWrapper}>
              {pastEvents.map((event: ReturnTypeOfExtract) => (
                <ServerCard key={event.id} {...event} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
