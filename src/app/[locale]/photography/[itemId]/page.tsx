import { Metadata } from "next";
import { fetchCollectionIfUpdated } from "../getFirebaseData";
import { collectionRoute2, companyRoute, companyDomain } from "@/Manager/info";
import { defaultLocale } from "@/Manager/navigation";
import { extractCollectionFields } from "../types";
import styles from "./page.module.css";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

interface Props {
  params: {
    itemId: string;
    locale: string;
  };
}

// SEO Metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
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
};

export default async function EventDetailsPage({ params }: Props) {
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
  console.log("🈯 Locale in details page:", locale);
  console.log("🔠 Text1 keys:", Object.keys(raw.transTexts?.text1 || {}));
  console.log("🈯 Requested locale:", locale);

  return (
    <section className={`section ${styles.eventDetailsWrapper}`}>
      <div>
        <div className={styles.container}>
          <div className={styles.mainWrapper}>
            <h1 className="header4">{item.transTag}</h1>
            <div className={styles.textWrapper}>
              <div>
                <h3 className="header6 font2">Project Overview</h3>
                <p className="paragraph">{item.transText1}</p>
              </div>
              <div>
                <h3 className="header6 font2">Innovative Solutions</h3>
                <p className="paragraph">{item.transText2}</p>
              </div>
            </div>
            <div className={styles.liveButtonWrapper}>
              {item.noTransLink1 && (
                <Link
                  className={`button ${styles.liveButton}`}
                  href={item.noTransLink1}
                  target="_blank"
                >
                  Preview in browser
                  <HiOutlineArrowNarrowRight />
                </Link>
              )}
            </div>

            <div className={styles.imageWrapper}>
              <Image
                width={1000}
                height={3000}
                alt={item.transTitle}
                src={item.images[1]}
                title={item.transTitle}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
