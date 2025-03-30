import { getTranslations } from "next-intl/server";
import Collection from "./collection/Collection";
import { useTranslations } from "next-intl";
import PagesHero from "@/src/components/components/PagesHero/PagesHero";
import { meCamera2, projectHero } from "@/public/image";

export async function generateMetadata() {
  const t = await getTranslations("projectsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function ProjectsPage() {
  const t = useTranslations("projectsPage");
  return (
    <div className="fadeOut">
      <PagesHero
        title1={t("pageHero.title1")}
        title2={t("pageHero.title2")}
        homepage
        image={projectHero}
      />
      <Collection
        readMore={t("projects.readMore")}
        seeAll={t("projects.seeAll")}
        title1={t("projects.title1")}
      />
    </div>
  );
}
