import { Metadata } from "next";
import { fetchCollectionIfUpdated } from "@/lib/firebase/getFirebaseData";
import { collectionRoute1, companyRoute, companyDomain } from "@/Manager/info";
import { defaultLocale } from "@/Manager/navigation";
import { extractCollectionFields } from "@/lib/firebase/types";
import ItemJsx from "./Item/Item";

// ✅ SEO Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ itemId: string; locale: string }>;
}): Promise<Metadata> {
  const { itemId, locale } = await params;

  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const item = collection?.items?.[itemId];

  if (!item) {
    return {
      title: "Not Found",
      description: "The project you are looking for does not exist",
    };
  }

  const extracted = extractCollectionFields(item, locale);

  return {
    title: extracted.transTitle || defaultLocale,
    description: extracted.transDescription || defaultLocale,
    alternates: {
      canonical: `/${locale}/projects/${itemId}`,
    },
    openGraph: {
      title: extracted.transTitle,
      description: extracted.transDescription,
      url: `${companyDomain}/${locale}/projects/${itemId}`,
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

// ✅ Page Component
export default async function Page({
  params,
}: {
  params: Promise<{ itemId: string; locale: string }>;
}) {
  const { itemId, locale } = await params;
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute1
  );

  const raw = collection?.items?.[itemId];

  if (!raw) {
    return <div>Project not found</div>;
  }

  const item = extractCollectionFields(raw, locale);

  return (
    <>
      <ItemJsx item={item} />
    </>
  );
}
