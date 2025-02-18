import { getTranslations } from "next-intl/server";
import Projects from "./menuComponents/Projects";
import Pageshead from "@/src/components/components/PagesHead/Pageshead";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";

export async function generateMetadata() {
  const t = await getTranslations("eventsPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default function MenuPage() {
  return (
    <div className="fadeOut">
      <Pageshead value1="Projects" value2="everythhing that we do" />

      <Projects />
    </div>
  );
}
