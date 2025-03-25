import { fetchCollectionIfUpdated } from "../getFirebaseData";

import ServerCard from "./card/ServerCard";
import { collectionRoute1, companyRoute } from "@/Manager/info";
import Link from "next/link";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "../types";
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
  const locale = await getLocale();
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const items = collection?.items ? Object.values(collection.items) : [];
  const extractedCollection = items
    .map((item) => extractCollectionFields(item, locale))
    .filter((item) => !item.itemActive);

  const sortedCollection = extractedCollection.sort((a, b) => {
    const aHasTrue = Object.values(a.boolOption1 || {}).some((v) => v === true);
    const bHasTrue = Object.values(b.boolOption1 || {}).some((v) => v === true);

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
    <section className="section">
      <div className={`container ${!mini && styles.container}`}>
        <div className={`${!mini && styles.paddingBottom}`}>
          <div className={styles.collectionWrapper}>
            {(mini ? paginatedCollection.slice(0, 1) : paginatedCollection).map(
              (item) => (
                <ServerCard key={item.id} {...item} readMore={readMore} />
              )
            )}
          </div>
          {mini && (
            <Link
              className={` button  button-small ${styles.button} `}
              href={`/${locale}/projects`}
            >
              {seeAll}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
