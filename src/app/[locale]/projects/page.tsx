import { getTranslations } from "next-intl/server";
import Collections from "./collection/Collection";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

export async function generateMetadata() {
  const t = await getTranslations("projectsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function ProjectsPage() {
  const t = await getTranslations("projectsPage");
  return (
    <div className="fadeOut">
      <Pageshead value1={t("pageHead.title1")} value2={t("pageHead.title2")} />
      <Collections
        title1={t("projects.title1")}
        title2={t("projects.title2")}
        readMore={t("projects.readMore")}
        seeAll={t("projects.seeAll")}
      />
    </div>
  );
}
