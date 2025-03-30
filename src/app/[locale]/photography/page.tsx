import { getTranslations } from "next-intl/server";
import Collection from "./collection/Collection";
import { useTranslations } from "next-intl";
import PagesHero from "@/src/components/components/PagesHero/PagesHero";
import { photographyHero, projectHero } from "@/public/image";

export async function generateMetadata() {
  const t = await getTranslations("photographyPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function ProjectsPage() {
  const t = useTranslations("photographyPage");
  return (
    <div className="fadeOut">
      <PagesHero
        title1={t("pageHero.title1")}
        title2={t("pageHero.title2")}
        image={photographyHero}
      />
      <Collection
        readMore={t("photography.readMore")}
        seeAll={t("photography.seeAll")}
        title1={t("photography.title1")}
      />
    </div>
  );
}
