import { Metadata } from "next";
import { fetchCollectionIfUpdated } from "../../../../../lib/firebase/getFirebaseData";
import { collectionRoute2, companyRoute, companyDomain } from "@/Manager/info";
import { defaultLocale } from "@/Manager/navigation";
import { extractCollectionFields } from "../../../../../lib/firebase/types";
import styles from "./page.module.css";
import AlbumSlider from "../collection/AlbumSlider/AlbumSlider";

interface Props {
  params: {
    itemId: string;
    locale: string;
  };
}

// SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: { itemId: string; locale: string };
}): Promise<Metadata> {
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute2
  );

  const item = collection?.items?.[params.itemId];

  if (!item) {
    return {
      title: "Not Found",
      description: "The project you are looking for does not exist",
    };
  }

  const extracted = extractCollectionFields(item, params.locale);

  return {
    title: extracted.transTitle || defaultLocale,
    description: extracted.transDescription || defaultLocale,
    alternates: {
      canonical: `/${params.locale}/projects/${params.itemId}`,
    },
    openGraph: {
      title: extracted.transTitle,
      description: extracted.transDescription,
      url: `${companyDomain}/${params.locale}/photography/${params.itemId}`,
      images: [
        {
          url:
            extracted.images?.[0] ||
            `${companyDomain}/images/openGraph/mainOpenGraph.jpg`,
          width: 500,
          height: 300,
          alt: extracted.transTitle,
        },
      ],
    },
  };
}

export default async function DynamicPage({
  params,
}: {
  params: { itemId: string; locale: string };
}) {
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute2
  );

  const raw = collection?.items?.[params.itemId];
  const locale = params.locale;
  if (!raw) {
    return <div>Project not found</div>;
  }

  const item = extractCollectionFields(raw, locale);

  return (
    <section className={`section`}>
      <div className={styles.mainWrapper}>
        <div className={styles.textWrapper}>
          <span className={`gray7 caption-mini  ${styles.date}`}>
            {item.noTransDate}
          </span>
          <h1 className="heading2 gray3">{item.transTitle}</h1>
          <p className="paragraph gray5">{item.transDescription}</p>
        </div>

        {item.images && (
          <div className={styles.albumWrapper}>
            <AlbumSlider title={item.transTitle} images={item.images} />
          </div>
        )}
      </div>
    </section>
  );
}
