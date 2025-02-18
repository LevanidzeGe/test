import Pageshead from "@/src/components/components/PagesHead/Pageshead";
import ComponentSeven from "@/src/components/components/Seven/ComponentSeven";
import ComponentSix from "@/src/components/components/Six/ComponentSix";
import OurTeam from "@/src/components/packages/OurTeam/OurTeam";
import Testimonials from "@/src/components/packages/Testimonials/Testimonials";
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
  const t = await getTranslations("");
  return (
    <div className="fadeOut">
      <Pageshead value1="About us" value2="everythhing that we do" />
      <ComponentSix />
      <ComponentSeven />
      <OurTeam />
      <Testimonials title1={t("homePage.testimonials.title1")} />
    </div>
  );
}
