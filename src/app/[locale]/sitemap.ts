import { companyDomain } from "@/src/manager/info";
import {
  companyRoute,
  dynamicSitemap,
  navItems,
  supportedLocales,
} from "@/src/manager/navigation";
import { ref, get, getDatabase } from "firebase/database";
import { app } from "@/src/lib/firebase/firebase";
import { getLocale } from "next-intl/server";

const db = getDatabase(app);

export default async function sitemap() {
  const locale = await getLocale();
  try {
    const collectionsRef = ref(db, `companiesData/${companyRoute}/collections`);
    const snapshot = await get(collectionsRef);
    const collectionsData = snapshot.val();

    const collectionUrls = collectionsData
      ? Object.entries(collectionsData).flatMap(
          ([collectionKey, collectionValue]: any) => {
            if (!collectionValue.items) return [];

            const dynamicRoute = dynamicSitemap[collectionKey];
            if (!dynamicRoute) return [];

            return Object.values(collectionValue.items)
              .filter((item: any) => !item.itemActive) // ✅ skip inactive if needed
              .flatMap((item: any) => {
                return supportedLocales.map((locale) => ({
                  url: `${companyDomain}/${locale}/${dynamicRoute}/${item.id}`,
                  lastModified: new Date(
                    item.itemTimestamp || Date.now()
                  ).toISOString(),
                  changeFrequency: "monthly",
                  priority: 0.7,
                }));
              });
          }
        )
      : [];

    const navUrls = supportedLocales.flatMap((locale) => {
      return (
        navItems[locale]?.map((navItem) => ({
          url: `${companyDomain}/${locale}${navItem.url}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "monthly",
          priority: 0.6,
        })) || []
      );
    });

    return [...collectionUrls, ...navUrls];
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return [];
  }
}
