import { getTranslations } from "next-intl/server";
import Collections from "./collection/Collection";

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
      <Collections />
    </div>
  );
}
