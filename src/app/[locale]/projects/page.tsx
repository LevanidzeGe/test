import { getTranslations } from "next-intl/server";
import Collection from "./collection/Collection";
import { useTranslations } from "next-intl";

export async function generateMetadata() {
  const t = await getTranslations("projectsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function ProjectsPage() {
  const t = useTranslations();
  return (
    <div className="fadeOut">
      <Collection
        readMore={t("projectsPage.projects.readMore")}
        seeAll={t("projects.seeAll")}
      />
    </div>
  );
}
