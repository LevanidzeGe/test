import Pageshead from "@/src/components/components/PagesHead/Pageshead";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";
import ComponentSix from "@/src/components/components/Six/ComponentSix";
import OurTeam from "@/src/components/packages/OurTeam/OurTeam";
import { getTranslations } from "next-intl/server";

export async function generateMetadata() {
  const t = await getTranslations("aboutPage.metadata");
  return {
    title: t("title"),
    description: t("description"),
  };
}

// Dynamic server-side rendering function that accepts params
export default async function AboutPage() {
  const t = await getTranslations("aboutPage");
  return (
    <div className="fadeOut">
      <Pageshead value1={t("pageHead.title1")} value2={t("pageHead.title2")} />

      <ComponentSix />
      <ComponentSeven />
      <OurTeam />
    </div>
  );
}
