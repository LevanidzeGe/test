import { fetchCollectionIfUpdated } from "@/lib/firebase/getFirebaseData";
import ServerCard from "./card/ServerCard";
import { collectionRoute1, companyRoute } from "@/Manager/info";
import styles from "./Collection.module.css";
import { extractCollectionFields } from "@/lib/firebase/types";
import { getLocale, getTranslations } from "next-intl/server";
import BottomBorder from "@/src/components/components/borderShapes/BottomBorder";
import TopBorder from "@/src/components/components/borderShapes/TopBorder";
import Link from "next/link";

export default async function Collections({
  mini,
  title1,
  title2,
  readMore,
  seeAll,
}: {
  mini?: boolean;
  title1: string;
  title2: string;
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
  const t = await getTranslations("");
  return (
    <>
      <TopBorder />
      <section className="section section-medium no-padding-y">
        <div className={`container ${!mini && styles.container}`}>
          <div className={`${!mini && styles.paddingBottom}`}>
            <div className="sideLineWrap">
              <div className="sideLine"></div>
              <h2 className="heading4">{title1}</h2>
            </div>
            <h3 className={`heading2 color4 ${styles.title}`}>{title2}</h3>
            <div className={styles.eventsWrapper}>
              {(mini
                ? paginatedCollection.slice(0, 3)
                : paginatedCollection
              ).map((item, index, arr) => (
                <ServerCard
                  key={item.id}
                  {...item}
                  readMore={readMore}
                  isLast={index === arr.length - 1}
                />
              ))}
            </div>
            {mini && (
              <Link
                className={` button button-reverse button-small ${styles.button} `}
                href={`/${locale}/projects`}
              >
                {seeAll}
              </Link>
            )}
            {/* Pagination Controls */}
            {/* {!mini && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )} */}
          </div>
        </div>
      </section>
      {mini && <BottomBorder />}
    </>
  );
}
