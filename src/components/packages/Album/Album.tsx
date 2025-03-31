import { fetchCollectionIfUpdated } from "@/lib/firebase/getFirebaseData";
import { extractCollectionFields } from "@/lib/firebase/types";
import { collectionRoute2, companyRoute } from "@/Manager/info";
import { getLocale } from "next-intl/server";
import AlbumSlider from "../AlbumSlider/AlbumSlider";

export default async function Album() {
  const collection = await fetchCollectionIfUpdated(
    companyRoute,
    collectionRoute2
  );
  const locale = await getLocale();

  const items = collection?.items ? Object.values(collection.items) : [];

  const extracted = items
    .map((item) => extractCollectionFields(item, locale))
    .filter((item) => !item.itemActive);

  const sorted = extracted.sort((a, b) => {
    const aOrder =
      (a.full as any)?.itemCategories?.["cat-all"]?.order ?? Infinity;
    const bOrder =
      (b.full as any)?.itemCategories?.["cat-all"]?.order ?? Infinity;
    return aOrder - bOrder;
  });

  const albumImages = sorted
    .map((item) => {
      const src = item.images?.[0];
      const alt = item.transTitle || "";
      return src ? { src, alt } : null;
    })
    .filter((entry): entry is { src: string; alt: string } => !!entry);
  return (
    <div className="fadeOut">
      <AlbumSlider images={albumImages} />
    </div>
  );
}
