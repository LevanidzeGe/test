import { getTranslations } from "next-intl/server";
import Projects from "./projectsComponent/Projects";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";

export async function generateMetadata() {
  const t = await getTranslations("eventsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function ProjectsPage() {
  return (
    <div className="fadeOut">
      <Pageshead value1="Projects" value2="everythhing that we do" />

      <Projects />
    </div>
  );
}
