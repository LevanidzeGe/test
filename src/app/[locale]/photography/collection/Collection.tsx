import { fetchCollectionIfUpdated } from "../../../../../lib/firebase/getFirebaseData";

import ServerCard from "./card/ServerCard";
import { collectionRoute2, companyRoute } from "@/Manager/info";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "../../../../../lib/firebase/types";
import { getLocale } from "next-intl/server";

export default async function Collection({
  mini,
  readMore,
  seeAll,
}: {
  mini?: boolean;
  readMore: string;
  seeAll?: string;
}) {
  // const collection = await getCollection(companyRoute, collectionRoute2);

  const locale = await getLocale();

  // You can store this timestamp somewhere: localStorage, Redis, etc.

  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute2
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
    const dateA = a.noTransDate ? new Date(a.noTransDate).getTime() : 0;
    const dateB = b.noTransDate ? new Date(b.noTransDate).getTime() : 0;
    return dateB - dateA;
  });

  const paginatedCollection = mini
    ? sortedCollection.slice(0, 3)
    : sortedCollection;

  return (
    <div className={`${!mini && styles.paddingBottom}`}>
      <h2 className={`heading2 font2 ${styles.title}`}>photography projects</h2>
      <div className={styles.collectionWrapper}>
        {(mini ? paginatedCollection.slice(0, 1) : paginatedCollection).map(
          (item) => (
            <ServerCard key={item.id} {...item} readMore={readMore} />
          )
        )}
      </div>
      {/* {mini && (
            <Link
              className={` button  button-small ${styles.button} `}
              href={`/${locale}/photography`}
            >
              {seeAll}
            </Link>
          )} */}
    </div>
  );
}
